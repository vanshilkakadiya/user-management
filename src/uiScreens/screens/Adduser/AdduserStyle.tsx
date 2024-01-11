import {StyleSheet} from 'react-native';
import {fontSize, hp, wp} from '../../../../assets/helper/helper';
import {colors} from '../../../../assets/constant/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topacView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageTopac: {
    height: hp(100),
    width: hp(100),
    borderRadius: hp(100),
    marginTop: hp(15),
  },
  selectedImage: {
    height: hp(100),
    width: hp(100),
    borderRadius: hp(100),
    borderWidth: hp(1),
  },
  modalMain: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: hp(0),
  },
  modalMainView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopStartRadius: hp(25),
    borderTopEndRadius: hp(25),
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
  modalView: {
    backgroundColor: colors.white,
    padding: hp(15),
    borderRadius: hp(25),
  },
});
