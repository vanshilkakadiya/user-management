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
import UseHome from '../uiScreens/screens/Home/useHome';
import Topac from './Topac';
import {colors} from '../../assets/constant/colors';
import {fontSize, hp, wp} from '../../assets/helper/helper';
import {useNavigation} from '@react-navigation/native';
import {imagePath} from '../../assets/icon/imagePath';
import {styles} from '../uiScreens/screens/Adduser/AdduserStyle';
import Textinput from './Textinput';
import ImagePickerModal from './ImagePickerModal';

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
    selectedId,
    setSelecetedId,
    isEditable,
    setIsEditable,
    setIsEditedData,
    isEditedData,
    editSelectedData,
    setEditSelectedData,
    id,
    setId,
    updateUser,
    avatar,
    setAvatar,
    cancelUser,
    isImagePickerModal,
    setIsImagePickerModal,
    imagePaths,
    setImagePath,
  } = UseHome();
  const {navigate}: any = useNavigation();
  // const [isEditData, setIsEditData] = useState(false);
  // const [fName, setFName] = useState('');

  // const [lName, setLName] = useState('');
  // const [email, setEmail] = useState('');

  const editTopac = (item: React.SetStateAction<any>) => {
    setEditSelectedData(item?.id);
    setIsEditData(true);
    setFName(item.first_name);
    setLName(item.last_name);
    setEmail(item.email);
    setId(item?.id);
    setAvatar(item?.avatar);
    // navigate('Adduser', {selectedItem: item,fromEdit: true});
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
            style={{justifyContent: 'center', flex: 1}}>
            <View
              style={{
                backgroundColor: colors.aliceblue,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: wp(25),
                paddingVertical: hp(25),
                borderRadius: hp(25),
              }}>
              <TouchableOpacity
                style={[styles.closeImageTopac, {marginRight: wp(20)}]}
                onPress={() => setIsEditData(false)}>
                <Image style={styles.closeImage} source={imagePath.close} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.imageTopac}
                onPress={() => setIsImagePickerModal(true)}>
                {isImagePickerModal && (
                  //                 setIsModalVisibleValue,
                  // onCameraPress,
                  // onGalleryPress,
                  <ImagePickerModal
                    isModalVisible={isImagePickerModal}
                    setIsModalVisibleValue={setIsImagePickerModal}
                  />
                )}
                <Image
                  source={avatar ? {uri: avatar} : imagePath.user}
                  style={styles.selectedImage}
                />
              </TouchableOpacity>

              <Textinput
                defaulValue={fName}
                // defaulValue={fName||item?.first_name}
                onChangeTexts={(value: string) => {
                  setFName(value);
                }}
                placeHolder={strings.fName}
                iconPath={imagePath.user}
              />
              <Textinput
                defaulValue={lName}
                onChangeTexts={(value: string) => {
                  setLName(value);
                }}
                placeHolder={strings.lName}
                iconPath={imagePath.user}
              />
              <Textinput
                defaulValue={email}
                onChangeTexts={(value: string) => {
                  setEmail(value);
                }}
                placeHolder={strings.email}
                iconPath={imagePath.email}
              />

              <View style={styles.topacView}>
                <Topac
                  topacName={strings.add}
                  backColor={colors.blue}
                  onPressEvent={() => {
                    updateUser();
                  }}
                  disable={
                    // imagePaths == '' ||
                    // fname == '' ||
                    // validateEmail(email) == false ||
                    // lname == ''
                    //   ? true
                    //   :
                    false
                  }
                />
                <Topac
                  topacName={strings.cancel}
                  backColor={colors.red}
                  onPressEvent={() => cancelUser()}
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
  txtInput: {
    borderWidth: hp(1),
    width: wp(250),
    borderRadius: hp(5),
    padding: hp(10),
    marginVertical: hp(10),
  },
  avatar: {
    height: hp(100),
    width: wp(100),
    borderRadius: hp(100),
    alignSelf: 'center',
  },

  flatListMainView: {
    flex: 1,
    backgroundColor: colors.white,
    marginVertical: hp(10),
    borderRadius: hp(25),
    padding: hp(10),
    marginHorizontal: wp(25),
  },
  flexRow: {
    flexDirection: 'row',
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
  flexDirectionRow: {
    flexDirection: 'row',
  },
  flatListContainer: {
    marginTop: hp(25),
    borderTopRightRadius: hp(25),
    borderTopLeftRadius: hp(25),
  },
  nodatafoundTxt: {
    alignSelf: 'center',
    fontSize: fontSize(50),
  },
  centerDetail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  detailView: {
    marginTop: hp(10),
    alignSelf: 'center',
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
