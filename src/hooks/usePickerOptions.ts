import {Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {hp, wp} from '../../assets/helper/helper';
import storage from '@react-native-firebase/storage';
import {Dispatch, SetStateAction} from 'react';

const selectFromGallery = (
  setImagePath: Dispatch<SetStateAction<string>>,
  setIsModalVisible: Dispatch<SetStateAction<boolean>>,
) => {
  ImagePicker.openPicker({
    width: wp(300),
    height: hp(400),
    cropping: true,
  })
    .then(image => {
      setImagePath(image?.path);
      setIsModalVisible(false);
    })
    .catch(() => {
      Alert.alert('Retry', 'Image is not get, Please try again');
    });
};

const cameraImage = (
  setImagePath: Dispatch<SetStateAction<string>>,
  setIsModalVisible: Dispatch<SetStateAction<boolean>>,
) => {
  ImagePicker.openCamera({
    width: wp(300),
    height: hp(400),
    cropping: true,
  })
    .then(image => {
      setImagePath(image?.path);
      setIsModalVisible(false);
    })
    .catch(() => {
      Alert.alert('Retry', 'Image is not get, Please try again');
    });
};

<<<<<<< Updated upstream
const updateUploadImage = async (imagePath: any) => {
=======
const UpdateUploadImage = async (imagePath: any) => {
>>>>>>> Stashed changes
  const temp = imagePath.split('/');
  const imageName = temp[temp.length - 1];
  const imageRef = storage().ref(`userImage/${imageName}`);
  await imageRef.putFile(imagePath, {contentType: 'image/jpg'}).catch(() => {
    Alert.alert('Retry', 'Image is not upload, Please try again');
  });
  const url = await imageRef?.getDownloadURL().catch(() => {
    Alert.alert('Retry', 'Image is not Uploaded, Please try again');
  });
  return url;
};

<<<<<<< Updated upstream
export {selectFromGallery, cameraImage, updateUploadImage};
=======
export {selectFromGallery, cameraImage, UpdateUploadImage};
>>>>>>> Stashed changes
