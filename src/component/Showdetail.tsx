import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {strings} from '../../assets/constant/strings';
import useHome from '../uiScreens/screens/Home/useHome';
import Topac from './Topac';
import {colors} from '../../assets/constant/colors';
import {fontSize, hp, validateEmail, wp} from '../../assets/helper/helper';
import {imagePath} from '../../assets/icon/imagePath';
import {styles} from '../uiScreens/screens/Adduser/AdduserStyle';
import Textinput from './Textinput';
import ImagePickerModal from './ImagePickerModal';
import {cameraImage, selectFromGallery} from '../hooks/usePickerOptions';

const Showdetail = ({item}: any) => {
  const {
    email,
    fName,
    lName,
    setEmail,
    setFName,
    setLName,
    isEditData,
    setIsEditData,
    setEditSelectedData,
    setId,
    updateUser,
    avatar,
    setAvatar,
    cancelUser,
    isImagePickerModal,
    setIsImagePickerModal,
    setDocId,
    imageSource,
    setImageSource,
  } = useHome();

  const editTopac = (item: React.SetStateAction<any>) => {
    setIsEditData(true);
    setEditSelectedData(item?.id);
    setFName(item.first_name);
    setLName(item.last_name);
    setEmail(item.email);
    setId(item?.id);
    setAvatar(item?.avatar);
    setDocId(item?.docId);
  };

  return (
    <View style={style.flatListMainView}>
      <Image source={{uri: item?.avatar}} style={style.imageSty} />
      <TouchableOpacity style={style.editTopac} onPress={() => editTopac(item)}>
        <Image source={imagePath.pencil} style={style.pencil} />
      </TouchableOpacity>
      <Text
        style={
          style.detailTxt
        }>{`${item?.first_name} ${item?.last_name}`}</Text>
      <Text style={style.emailTxt}>{`${item?.email}`}</Text>

      {isEditData && (
        <Modal transparent={true}>
          <KeyboardAvoidingView
            behavior={strings.height as 'height'}
            style={styles.container}>
            <View style={style.modalView}>
              <TouchableOpacity
                style={[styles.closeImageTopac, style.marginRight]}
                onPress={() => setIsEditData(false)}>
                <Image style={styles.closeImage} source={imagePath.close} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.imageTopac}
                onPress={() => setIsImagePickerModal(true)}>
                {isImagePickerModal && (
                  <ImagePickerModal
                    setIsModalVisibleValue={setIsImagePickerModal}
                    onCameraPress={() =>
                      cameraImage(setImageSource, setIsImagePickerModal)
                    }
                    onGalleryPress={() =>
                      selectFromGallery(setImageSource, setIsImagePickerModal)
                    }
                  />
                )}
                <Image
                  source={
                    imageSource || avatar
                      ? {uri: imageSource ? imageSource : avatar}
                      : imagePath.user
                  }
                  style={styles.selectedImage}
                />
              </TouchableOpacity>
              <Textinput
                defaulValue={fName}
                onChangeTexts={(value: string) => setFName(value)}
                placeHolder={strings.fName}
                iconPath={imagePath.user}
              />
              <Textinput
                defaulValue={lName}
                onChangeTexts={(value: string) => setLName(value)}
                placeHolder={strings.lName}
                iconPath={imagePath.user}
              />
              <Textinput
                defaulValue={email}
                onChangeTexts={(value: string) => setEmail(value)}
                placeHolder={strings.email}
                iconPath={imagePath.email}
              />
              <View style={styles.topacView}>
                <Topac
                  topacName={strings.add}
                  backColor={colors.blue}
                  onPressEvent={updateUser}
                  disable={
                    (!imageSource && !avatar) ||
                    !fName ||
                    !validateEmail(email) ||
                    !lName
                      ? true
                      : false
                  }
                />
                <Topac
                  topacName={strings.cancel}
                  backColor={colors.red}
                  onPressEvent={cancelUser}
                  disable={false}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </Modal>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  modalView: {
    backgroundColor: colors.aliceblue,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp(25),
    paddingVertical: hp(25),
    borderRadius: hp(25),
  },
  flatListMainView: {
    flex: hp(1),
    backgroundColor: colors.white,
    marginVertical: hp(10),
    borderRadius: hp(25),
    padding: hp(10),
    marginHorizontal: wp(25),
  },
  imageSty: {
    height: hp(100),
    width: hp(100),
    borderRadius: hp(100),
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  detailTxt: {
    fontSize: fontSize(20),
    marginHorizontal: wp(10),
    alignSelf: 'center',
    marginTop: hp(10),
  },
  marginRight: {
    marginRight: wp(20),
  },
  editTopac: {
    height: hp(35),
    width: wp(35),
    marginTop: hp(15),
    borderRadius: hp(35),
    borderWidth: hp(1),
    right: wp(25),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  emailTxt: {
    fontSize: fontSize(20),
    marginHorizontal: wp(10),
    alignSelf: 'center',
  },
  pencil: {
    height: hp(15),
    width: wp(15),
    resizeMode: 'contain',
  },
});

export default React.memo(Showdetail);
