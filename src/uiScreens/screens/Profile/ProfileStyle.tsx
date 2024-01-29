import {StyleSheet} from 'react-native';
import {fontSize, hp, wp} from '../../../../assets/helper/helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  justifyCenter:{
    justifyContent:'center'
  },
  logoutTopac: {
    alignSelf: 'flex-end',
    marginRight: wp(25),
  },
  logoutTxt: {
    fontSize: fontSize(30),
    fontWeight: '600',
  },
  profileImage: {
    height: hp(100),
    width: wp(100),
    borderRadius: wp(100),
    resizeMode: 'cover',
  },
  imageTopac: {
    height: hp(100),
    width: wp(100),
    borderRadius: wp(100),
    borderWidth: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(25),
  },
});
