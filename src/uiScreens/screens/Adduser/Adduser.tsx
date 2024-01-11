import React from 'react';
import {styles} from './AdduserStyle';
import useAdduser from './useAdduser';
import Topac from '../../../component/Topac';
import Textinput from '../../../component/Textinput';
import {strings} from '../../../../assets/constant/strings';
import {imagePath} from '../../../../assets/icon/imagePath';
import {wp} from '../../../../assets/helper/helper';
import {
  Image,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../../assets/constant/colors';

const Adduser = () => {
  const {
    cancelUser,
    imagePaths,
    email,
    fname,
    lname,
    isModalVisible,
    cameraImage,
    selectFromGallery,
    setIsModalVisibleValue,
    setEmailValue,
    setFNameValue,
    setLNameValue,
  } = useAdduser();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={[styles.imageTopac, {borderWidth: !imagePaths ? wp(1) : wp(0)}]}
        onPress={() => setIsModalVisibleValue(true)}>
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
        <Topac topacName={strings.add} backColor={colors.blue} />
        <Topac
          topacName={strings.cancel}
          backColor={colors.red}
          onPressEvent={() => cancelUser()}
        />
      </View>

      <Modal visible={isModalVisible} transparent={true}>
        <View style={[styles.container]}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeImageTopac}
              onPress={() => setIsModalVisibleValue(false)}>
              <Image style={styles.closeImage} source={imagePath.closes} />
            </TouchableOpacity>
            <View style={styles.selectOptionView}>
              <View>
                <TouchableOpacity onPress={() => cameraImage()}>
                  <Image source={imagePath.camera} style={styles.modalImg} />
                </TouchableOpacity>
                <Text style={styles.modalTxt}>{strings.camera}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => selectFromGallery()}>
                  <Image source={imagePath.gallery} style={styles.modalImg} />
                </TouchableOpacity>
                <Text style={styles.modalTxt}>{strings.gallery}</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Adduser;
