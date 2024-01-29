import auth from '@react-native-firebase/auth';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import firestore, {firebase} from '@react-native-firebase/firestore';
import {useState} from 'react';
import {route} from '../../../../assets/constant/route';
<<<<<<< Updated upstream
import {Alert} from 'react-native';
import {updateUploadImage} from '../../../hooks/usePickerOptions';
import {useDispatch} from 'react-redux';
import {clearUser} from '../../../redux/userSlice';
import {StackNavigationProp} from '@react-navigation/stack';
=======
import {useDispatch} from 'react-redux';
import {clearUser} from '../../../redux/userSlice';
import {StackNavigationProp} from '@react-navigation/stack';
import {Alert} from 'react-native';
>>>>>>> Stashed changes

const useProfile = () => {
  const user = firebase.auth().currentUser;
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
<<<<<<< Updated upstream
  const dispatch = useDispatch();
=======
>>>>>>> Stashed changes

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [detailEdit, setDetailEdit] = useState<boolean>(false);
  const [fName, setFName] = useState<string>('');
  const [lName, setLName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<any>(0);
  const [profileImage, setProfileImage] = useState<string>('');

  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.reset({index: 0, routes: [{name: route.auth}]});
        dispatch(clearUser());
<<<<<<< Updated upstream
      })
      .catch(() => {
        Alert.alert('Retry', 'You have not logouted, Please try again');
=======
      });
  };

  const getProfileData = () => {
    firestore()
      .collection('data')
      .doc('alluser')
      .collection(`${user?.uid}`)
      .doc('personalDetail')
      .onSnapshot(documentSnapshot => {
        setFNameValue(documentSnapshot?.data()?.first_name);
        setLNameValue(documentSnapshot?.data()?.last_name);
        setEmailValue(documentSnapshot?.data()?.email);
        setMobileNumberValue(documentSnapshot?.data()?.mobileNumber);
        setAvatarValue(documentSnapshot?.data()?.avatar);
>>>>>>> Stashed changes
      });
  };

  const getProfileData = () => {
    try {
      firestore()
        .collection('data')
        .doc('alluser')
        .collection(`${user?.uid}`)
        .doc('personalDetail')
        .onSnapshot(documentSnapshot => {
          setFNameValue(documentSnapshot?.data()?.first_name);
          setLNameValue(documentSnapshot?.data()?.last_name);
          setEmailValue(documentSnapshot?.data()?.email);
          setMobileNumberValue(documentSnapshot?.data()?.mobileNumber);
          setAvatarValue(documentSnapshot?.data()?.avatar);
        });
    } catch (err) {
      Alert.alert('Retry','Profile data not found,Please try again by reopen app');
    }
  };

  const updateProfileDetail = async () => {
    try{
      const imageUrl = profileImage && (await updateUploadImage(profileImage));
      firestore()
      .collection('data')
      .doc('alluser')
      .collection(`${user?.uid}`)
      .doc('personalDetail')
      .update({
        first_name: fName,
        last_name: lName,
        mobileNumber: mobileNumber,
        avatar: imageUrl ? imageUrl : avatar,
      });
    }catch{
      Alert.alert('Retry','Profile data not update,Please try again');
    }
  };

  const setFNameValue = (value: string) => {
    setFName(value);
  };
  const setLNameValue = (value: string) => {
    setLName(value);
  };
  const setMobileNumberValue = (value: number) => {
    setMobileNumber(value);
  };
  const setEmailValue = (value: string) => {
    setEmail(value);
  };
  const setAvatarValue = (value: any) => {
    setAvatar(value);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const editButtonPress = () => {
    setDetailEdit(!detailEdit);
    detailEdit && updateProfileDetail();
  };

  const logOutAlert = () => {
    Alert.alert('Log out', 'Are you sure want to Logout ?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => logout()},
    ]);
  };

  return {
    // logout,
    getProfileData,
    modalVisible,
    setModalVisible,
    detailEdit,
    fName,
    lName,
    mobileNumber,
    email,
    setEmailValue,
    setMobileNumberValue,
    setFNameValue,
    setLNameValue,
    avatar,
    setAvatarValue,
    openModal,
    editButtonPress,
<<<<<<< Updated upstream
    setAvatar,
    setProfileImage,
    profileImage,
=======
    logOutAlert,
>>>>>>> Stashed changes
  };
};

export default useProfile;
