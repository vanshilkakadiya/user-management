import {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {hp, wp} from '../../../../assets/helper/helper';
import { Alert } from 'react-native';

const useAdduser = () => {
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

  const selectFromGallery = () => {
    ImagePicker.openPicker({
      width: wp(300),
      height: hp(400),
      cropping: true,
    }).then(image => {
      setIsModalVisible(false);
      setImagePath(image?.path);
    }).catch(()=>{
      Alert.alert('Failed', 'Image is not set properly, try again')
    })
  };

  const cameraImage = () => {
    ImagePicker.openCamera({
      width: wp(300),
      height: hp(400),
      cropping: true,
    }).then(image => {
      setIsModalVisible(false);
      setImagePath(image?.path);
    }).catch(()=>{
      Alert.alert('Failed', 'Image is not set properly, try again')
    })
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
  };
};

export default useAdduser;
