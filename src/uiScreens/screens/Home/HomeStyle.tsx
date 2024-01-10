import { StyleSheet } from "react-native";
import { colors } from "../../../../assets/constant/colors";
import { hp, wp } from "../../../../assets/helper/helper";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    flatListMainView: {
      backgroundColor: colors.white,
      marginVertical: hp(10),
      borderRadius: hp(25),
      flexDirection: 'row',
      paddingVertical: hp(50),
      marginHorizontal: wp(10),
    },
    imageSty: {
      height: hp(125),
      width: hp(125),
      borderRadius: hp(125),
      resizeMode: 'contain',
      marginLeft: wp(15),
    },
    detailView: {
      justifyContent: 'center',
      marginLeft: wp(25),
    },
    detailHeadingTxt: {
      width: wp(60),
      fontWeight: '600',
    },
    detailTxt: {
      width: wp(150),
    },
    flexDirectionRow: {
      flexDirection: 'row',
    },
  });