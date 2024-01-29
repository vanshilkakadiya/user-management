import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import useProfile from './useProfile';
import {styles} from './ProfileStyle';
import {strings} from '../../../../assets/constant/strings';
import ProfileDetail from '../../../component/ProfileDetail';
import ImagePickerModal from '../../../component/ImagePickerModal';
import Topac from '../../../component/Topac';
import {colors} from '../../../../assets/constant/colors';
import {cameraImage, selectFromGallery} from '../../../hooks/usePickerOptions';
import {imagePath} from '../../../../assets/icon/imagePath';

const Profile = () => {
  const {
    logOutAlert,
    getProfileData,
    modalVisible,
    setModalVisible,
    detailEdit,
    fName,
    lName,
    email,
    mobileNumber,
    setMobileNumberValue,
    setFNameValue,
    setLNameValue,
    avatar,
    openModal,
    editButtonPress,
    profileImage,
    setProfileImage,
  } = useProfile();

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.editLogoutView}>
        <TouchableOpacity onPress={logOutAlert} style={styles.logoutTopac}>
          <Text style={styles.logoutTxt}>{strings.logout}</Text>
        </TouchableOpacity>
        <Topac
          topacName={detailEdit ? strings.done : strings.edit}
          backColor={detailEdit ? colors.green : colors.blue}
          onPressEvent={editButtonPress}
          disable={
            detailEdit
              ? fName.length < 1 ||
                lName.length < 1 ||
                (mobileNumber.length !== 10 && true)
              : false
          }
        />
      </View>
      <KeyboardAvoidingView
        behavior={strings.padding as 'padding'}
        style={[styles.container, styles.keyboardAvoidView]}>
        <TouchableOpacity
          style={styles.imageTopac}
          disabled={!detailEdit}
          onPress={openModal}>
          <Image
            source={
              profileImage || avatar
                ? {uri: profileImage ? profileImage : avatar}
                : imagePath.user
            }
            style={styles.profileImage}
          />
        </TouchableOpacity>

        {modalVisible && (
          <ImagePickerModal
            setIsModalVisibleValue={setModalVisible}
            onCameraPress={() => cameraImage(setProfileImage, setModalVisible)}
            onGalleryPress={() =>
              selectFromGallery(setProfileImage, setModalVisible)
            }
          />
        )}
        <ProfileDetail
          detailHeading={strings.fName}
          detailEle={fName}
          isEditable={detailEdit}
          onChangeText={(value: string) => setFNameValue(value)}
        />
        <ProfileDetail
          detailHeading={strings.lName}
          detailEle={lName}
          isEditable={detailEdit}
          onChangeText={(value: string) => setLNameValue(value)}
        />
        <ProfileDetail detailHeading={strings.email} detailEle={email} />
        <ProfileDetail
          detailHeading={strings.Contactno}
          detailEle={mobileNumber}
          isEditable={detailEdit}
          onChangeText={(value: string) => setMobileNumberValue(value)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Profile;
