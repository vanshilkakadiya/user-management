import {useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
<<<<<<< Updated upstream
import {setFirestoreUser} from '../../../redux/userSlice';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '@react-native-firebase/firestore';
import { route } from '../../../../assets/constant/route';
import { updateUploadImage } from '../../../hooks/usePickerOptions';
=======
import {editData, setFirestoreUser} from '../../../redux/userSlice';
import storage from '@react-native-firebase/storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import {hp, wp} from '../../../../assets/helper/helper';
import {firebase} from '@react-native-firebase/firestore';
import {route} from '../../../../assets/constant/route';
>>>>>>> Stashed changes

const useAdduser = () => {
  
  const routes: any = useRoute();
  const paramData = routes?.params?.selectedItem;

  const user = firebase.auth().currentUser;
  const dispatch = useDispatch();
  const {navigate}: any = useNavigation();

  const [imagePickerVisible, setImagePickerVisible] = useState<boolean>(false);
  // const [imagePaths, setImagePath] = useState('');
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
    const imageUrl = await updateUploadImage(imagePaths);
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
      .doc('detail')
      .collection('addedDetail')
      .add(temp)
      .then(() => {
        dispatch(setFirestoreUser({data: temp}));
        cancelUser();
        navigate(route.home);
      })
      .catch(() => {
        Alert.alert('Retry', 'User is not added, Please try again');
      });
  };

<<<<<<< Updated upstream
=======
  const updateUser = async () => {
    // paramData?.avatar?console.log("yesssss"):console.log("noo");
    const imageUrl = await UpdateUploadImage();
    // const imageUrl =!imagePaths&& await UpdateUploadImage();
    const data = {
      avatar: imageUrl ? imageUrl : imagePaths,
      // avatar: imagePaths?imagePaths:imageUrl,
      email: email ? email : paramData?.email,
      first_name: fname ? fname : paramData?.first_name,
      last_name: lname ? lname : paramData?.last_name,
      id: paramData?.id,
    };
    try {
      firebase
        .firestore()
        .collection('data')
        .doc('alluser')
        .collection(`${user?.uid}`)
        .doc('detail')
        .collection('addedDetail')
        .doc(paramData?.docId)
        .update(data)
        .then(() => {
          navigate(route.home);
        });
      // dispatch(editData(data))
    } catch {
      Alert.alert('Retry', "user do'nt update,Please try again");
    }
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

>>>>>>> Stashed changes
  const setEmailValue = (value: string) => {
    setEmail(value);
  };
  const setFNameValue = (value: string) => {
    setFName(value);
  };
  const setLNameValue = (value: string) => {
    setLName(value);
  };

  return {
    imagePaths,
    email,
    fname,
    lname,
    isModalVisible,
    cancelUser,
    setFNameValue,
    setEmailValue,
    setLNameValue,
    adduser,
    imagePickerVisible,
    setImagePickerVisible,
    setIsModalVisible,
    setImagePath,
<<<<<<< Updated upstream
=======
    UpdateUploadImage,
    updateUser,

>>>>>>> Stashed changes
  };
};

export default useAdduser;
