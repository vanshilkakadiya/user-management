import {useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {setFirestoreUser} from '../../../redux/userSlice';
import {useNavigation} from '@react-navigation/native';
import {firebase} from '@react-native-firebase/firestore';
import { route } from '../../../../assets/constant/route';
import { updateUploadImage } from '../../../hooks/usePickerOptions';

const useAdduser = () => {
  const user = firebase.auth().currentUser;
  const dispatch = useDispatch();
  const {navigate}: any = useNavigation();

  const [imagePickerVisible,setImagePickerVisible] = useState<boolean>(false);
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
  };
};

export default useAdduser;
