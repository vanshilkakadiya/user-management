import {useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {setFirestoreUser} from '../../../redux/userSlice';
import storage from '@react-native-firebase/storage';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import {hp, wp} from '../../../../assets/helper/helper';
import {firebase} from '@react-native-firebase/firestore';

const useAdduser = () => {
  const user = firebase.auth().currentUser;
  const dispatch = useDispatch();
  const {navigate}: any = useNavigation();

  const [imagePaths, setImagePath] = useState('');
  const [email, setEmail] = useState('');
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const cancelUser = () => {
    setEmail('');
    setFName('');
    setLName('');
    setImagePath('');
  };

  const adduser = async () => {
    const imageUrl = await UpdateUploadImage();
    const temp = {
      first_name: fname.trim(),
      last_name: lname.trim(),
      email: email.trim(),
      avatar: imageUrl,
      id: Math.random().toString(),
    };
    await firebase
      .firestore()
      .collection('data')
      .doc('alluser')
      .collection(`${user?.uid}`)
      .add(temp)
      .then(() => {
        dispatch(setFirestoreUser({data: [temp]}));
        cancelUser();
        navigate('Home');
      })
      .catch(() => {
        Alert.alert('Retry', 'User is not added, Please try again');
      });
  };

  const UpdateUploadImage = async () => {
    const temp = imagePaths.split('/');
    const imageName = temp[temp.length - 1];
    const imageRef = storage().ref(`userImage/${imageName}`);
    await imageRef.putFile(imagePaths, {contentType: 'image/jpg'}).catch(() => {
      Alert.alert('Retry', 'Image is not upload, Please try again');
    });
    const url = await imageRef?.getDownloadURL().catch(() => {
      Alert.alert('Retry', 'Image is not Uploaded, Please try again');
    });
    return url;
  };

  const selectFromGallery = () => {
    ImagePicker.openPicker({
      width: wp(300),
      height: hp(400),
      cropping: true,
    })
      .then(image => {
        setIsModalVisible(false);
        setImagePath(image?.path);
      })
      .catch(() => {
        Alert.alert('Retry', 'Image is not get, Please try again');
      });
  };

  const cameraImage = () => {
    ImagePicker.openCamera({
      width: wp(300),
      height: hp(400),
      cropping: true,
    })
      .then(image => {
        setIsModalVisible(false);
        setImagePath(image?.path);
      })
      .catch(() => {
        Alert.alert('Retry', 'Image is not get, Please try again');
      });
  };

  const setEmailValue = (value: string) => {
    setEmail(value);
  };
  const setFNameValue = (value: string) => {
    setFName(value);
  };
  const setLNameValue = (value: string) => {
    setLName(value);
  };
  const setIsModalVisibleValue = (value: boolean) => {
    setIsModalVisible(value);
  };

  return {
    imagePaths,
    email,
    fname,
    lname,
    isModalVisible,
    cameraImage,
    selectFromGallery,
    cancelUser,
    setFNameValue,
    setEmailValue,
    setLNameValue,
    setIsModalVisibleValue,
    adduser,
  };
};

export default useAdduser;
