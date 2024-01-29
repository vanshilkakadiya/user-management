import React, {useEffect} from 'react';
import {styles} from './AdduserStyle';
import useAdduser from './useAdduser';
import Topac from '../../../component/Topac';
import Textinput from '../../../component/Textinput';
import {colors} from '../../../../assets/constant/colors';
import {strings} from '../../../../assets/constant/strings';
import {imagePath} from '../../../../assets/icon/imagePath';
<<<<<<< Updated upstream
import {validateEmail, wp} from '../../../../assets/helper/helper';
=======
import {hp, validateEmail, wp} from '../../../../assets/helper/helper';
>>>>>>> Stashed changes
import {
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePickerModal from '../../../component/ImagePickerModal';
<<<<<<< Updated upstream
import {cameraImage, selectFromGallery} from '../../../hooks/usePickerOptions';
=======
import {useNavigation, useRoute} from '@react-navigation/native';
>>>>>>> Stashed changes

const Adduser = () => {
  const routes: any = useRoute();
  const paramDatas = routes?.params?.selectedItem;
  console.log(routes?.params, 'paramDatasparamDatasparamDatas');
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
    updateUser,
    setIsModalVisible,

  } = useAdduser();

  
  const route: any = useRoute();
  const navigation = useNavigation();
  // useEffect(() => {
  //   navigation.addListener('blur', () => {
  //     console.log('Blurrer Called');
  //     setIsEditedData(route?.params?.fromEdit ? true : false)
  //   });
  // }, []);

  const paramData = route?.params?.selectedItem;

  return (
    <KeyboardAvoidingView
      behavior={strings.height as 'height'}
      style={styles.container}>
      <TouchableOpacity
        style={[styles.imageTopac, {borderWidth: !imagePaths ? wp(1) : wp(0)}]}
        onPress={() => setIsModalVisible(true)}>
        <Image
          source={imagePaths?{uri: imagePaths}:imagePath.user}
          // source={{uri: imagePaths ? imagePaths : paramData?.avatar}}
          style={styles.selectedImage}
        />
      </TouchableOpacity>
      <Textinput
        // value={fname}
        // defaulValue={!isEditedData ? paramData?.first_name:fname}
        // defaulValue={paramData?.first_name}
        defaulValue={fname}
        // defaulValue={paramData?.first_name?paramData?.first_name:fname}
        onChangeTexts={(value: string) => setFNameValue(value)}
        placeHolder={strings.fName}
        iconPath={imagePath.user}
      />
      <Textinput
        defaulValue={lname}
        // defaulValue={paramData?.last_name}
        // defaulValue={paramData?.last_name?paramData?.last_name:lname}

        onChangeTexts={(value: string) => setLNameValue(value)}
        placeHolder={strings.lName}
        iconPath={imagePath.user}
      />
      <Textinput
        defaulValue={email}
        // defaulValue={paramData?.email}
        // defaulValue={paramData?.email?paramData?.email:email}

        onChangeTexts={(value: string) => setEmailValue(value)}
        placeHolder={strings.email}
        iconPath={imagePath.email}
      />

      <View style={styles.topacView}>
        <Topac
          topacName={strings.add}
          backColor={colors.blue}
          onPressEvent={() => (paramData ? updateUser() : adduser())}
          // onPressEvent={() => adduser()}
          // onPressEvent={() => updateUser()}
          // disable={false}
          disable={
            !imagePaths || !fname || !validateEmail(email) || !lname
              ? true
              : false
          }
        />
        <Topac
          topacName={strings.cancel}
          backColor={colors.red}
          onPressEvent={() => {
            cancelUser();
          }}
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
