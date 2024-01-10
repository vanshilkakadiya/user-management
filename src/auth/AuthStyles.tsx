import { StyleSheet } from "react-native";
import { colors } from "../../assets/constant/colors";
import { fontSize, hp, wp } from "../../assets/helper/helper";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    mainView: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: colors.white,
    },
    textInputView: {
      borderWidth: 1,
      borderColor: colors.black,
      marginHorizontal: wp(50),
      flexDirection: 'row',
      marginTop: hp(10),
    },
    textInput: {
      height: hp(50),
      width: wp(225),
    },
    signTxt: {
      fontSize: fontSize(35),
      color: colors.black,
      alignSelf: 'center',
      marginBottom: hp(50),
      fontWeight: '500',
    },
    txtInputIcon: {
      height: hp(25),
      width: wp(25),
      alignSelf: 'center',
      marginHorizontal: wp(11),
    },
    rightIconTopac: {
      alignSelf: 'center',
    },
    dontTxt: {
      fontSize: fontSize(15),
      alignSelf: 'center',
    },
    regestrationTxt: {
      color: colors.blue,
      marginLeft: wp(10),
    },
    switchAuthView: {
      flexDirection: 'row',
      marginTop: hp(10),
      justifyContent: 'center',
    },
    loginTopac: {
      backgroundColor: colors.black,
      height: hp(50),
      width: wp(150),
      alignSelf: 'center',
      marginTop: hp(25),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: hp(15),
    },
    topacTxt: {
      color: colors.white,
      fontSize: fontSize(25),
      fontWeight: '500',
    },
  });

  export default styles
  