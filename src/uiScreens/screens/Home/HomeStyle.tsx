import { StyleSheet } from "react-native";
import { colors } from "../../../../assets/constant/colors";
import { fontSize, hp, wp } from "../../../../assets/helper/helper";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    flatListMainView: {
      backgroundColor: colors.white,
      marginVertical: hp(10),
      borderRadius: hp(25),
      flexDirection: 'row',
      paddingVertical: hp(25),
      marginHorizontal: wp(10),
    },
    imageSty: {
      height: hp(125),
      width: hp(125),
      borderRadius: hp(125),
      resizeMode: 'stretch',
      marginLeft: wp(15),
    },
    detailView: {
      justifyContent: 'center',
      marginLeft: wp(25),
    },
    detailHeadingTxt: {
      width: wp(60),
      fontWeight: '600',
      fontSize:fontSize(20)
    },
    detailTxt: {
      width: wp(110),
      fontSize:fontSize(20),
    },
    flexDirectionRow: {
      flexDirection: 'row',
    },
    colon:{
      marginHorizontal:wp(10),
    }
  });