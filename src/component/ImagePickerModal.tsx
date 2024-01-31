import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {imagePath} from '../../assets/icon/imagePath';
import {fontSize, hp, wp} from '../../assets/helper/helper';
import {colors} from '../../assets/constant/colors';
import {strings} from '../../assets/constant/strings';

const ImagePickerModal = ({
  setIsModalVisibleValue,
  onCameraPress,
  onGalleryPress,
}: any) => {
  return (
    <Modal transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.closeImageTopac}
            onPress={() => setIsModalVisibleValue(false)}>
            <Image style={styles.closeImage} source={imagePath.close} />
          </TouchableOpacity>
          <View style={styles.selectOptionView}>
            <TouchableOpacity onPress={onCameraPress}>
              <Image source={imagePath.camera} style={styles.modalImg} />
              <Text style={styles.modalTxt}>{strings.camera}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onGalleryPress}>
              <Image source={imagePath.gallery} style={styles.modalImg} />
              <Text style={styles.modalTxt}>{strings.gallery}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: colors.white,
    padding: hp(15),
    borderRadius: hp(25),
  },
  imageTopac: {
    height: hp(100),
    width: hp(100),
    borderRadius: hp(100),
    marginTop: hp(15),
  },
  modalImg: {
    height: hp(50),
    width: wp(50),
    alignSelf: 'center',
    marginBottom: hp(10),
  },
  modalTxt: {
    fontSize: fontSize(20),
    fontWeight: '500',
  },
  closeImageTopac: {
    height: hp(50),
    width: wp(50),
    borderWidth: hp(1),
    borderRadius: hp(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  closeImage: {
    height: hp(20),
    resizeMode: 'center',
    width: wp(30),
  },
  selectOptionView: {
    height: hp(125),
    width: wp(275),
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
});

export default ImagePickerModal;
