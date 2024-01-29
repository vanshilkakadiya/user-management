import React from 'react';
import {styles} from './AdduserStyle';
import useAdduser from './useAdduser';
import Topac from '../../../component/Topac';
import Textinput from '../../../component/Textinput';
import {colors} from '../../../../assets/constant/colors';
import {strings} from '../../../../assets/constant/strings';
import {imagePath} from '../../../../assets/icon/imagePath';
import {validateEmail, wp} from '../../../../assets/helper/helper';
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePickerModal from '../../../component/ImagePickerModal';
import {cameraImage, selectFromGallery} from '../../../hooks/usePickerOptions';

const Adduser = () => {
  const {
    cancelUser,
    imagePaths,
    email,
    fname,
    lname,
    isModalVisible,
    setImagePath,
    setEmailValue,
    setFNameValue,
    setLNameValue,
    adduser,
    setIsModalVisible,
  } = useAdduser();

  return (
    <KeyboardAvoidingView
      behavior={strings.height as 'height'}
      style={styles.container}>
      <TouchableOpacity
        style={[styles.imageTopac, {borderWidth: !imagePaths ? wp(1) : wp(0)}]}
        onPress={() => setIsModalVisible(true)}>
        {imagePaths && (
          <Image source={{uri: imagePaths}} style={styles.selectedImage} />
        )}
      </TouchableOpacity>
      <Textinput
        value={fname}
        onChangeTexts={(value: string) => setFNameValue(value)}
        placeHolder={strings.fName}
        iconPath={imagePath.user}
      />
      <Textinput
        value={lname}
        onChangeTexts={(value: string) => setLNameValue(value)}
        placeHolder={strings.lName}
        iconPath={imagePath.user}
      />
      <Textinput
        value={email}
        onChangeTexts={(value: string) => setEmailValue(value)}
        placeHolder={strings.email}
        iconPath={imagePath.email}
      />
      <View style={styles.topacView}>
        <Topac
          topacName={strings.add}
          backColor={colors.blue}
          onPressEvent={() => adduser()}
          disable={
            !imagePaths || !fname || !validateEmail(email) || !lname
              ? true
              : false
          }
        />
        <Topac
          topacName={strings.cancel}
          backColor={colors.red}
          onPressEvent={() => cancelUser()}
          disable={false}
        />
      </View>

      {isModalVisible && (
        <ImagePickerModal
          setIsModalVisibleValue={setIsModalVisible}
          onCameraPress={() => cameraImage(setImagePath, setIsModalVisible)}
          onGalleryPress={() =>
            selectFromGallery(setImagePath, setIsModalVisible)
          }
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default Adduser;
