import { StyleSheet } from "react-native";
import { colors } from "../../../../assets/constant/colors";
import { fontSize, hp, wp } from "../../../../assets/helper/helper";

export const styles = StyleSheet.create({
    container: {
      flex: hp(1),
    },
    flatListMainView: {
      flex:hp(1),
      backgroundColor: colors.white,
      marginVertical: hp(10),
      borderRadius: hp(25),
      padding:hp(10),
      marginHorizontal: wp(25),
    },
    flexRow:{
      flexDirection:'row'
    },
    imageSty: {
      height: hp(100),
      width: hp(100),
      borderRadius: hp(100),
      resizeMode: 'stretch',
      alignSelf:'center'
    },
    detailTxt: {
      fontSize:fontSize(20),
      marginHorizontal:wp(10),
      alignSelf:'center',
      marginTop:hp(10)
    },
    flexDirectionRow: {
      flexDirection: 'row',
    },
    flatListContainer:{
      marginTop:hp(25),
      borderTopRightRadius: hp(25),
      borderTopLeftRadius: hp(25),
    },
    nodatafoundTxt:{
      alignSelf:'center',
      fontSize:fontSize(50)
    },
    editTopac:{
      height: hp(35),
      width: wp(35),
      marginTop:hp(15),
      borderRadius:hp(35),
      borderWidth:hp(1),
      right:wp(25),
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
    },
    detailView:{
      marginTop: hp(10),
       alignSelf: 'center'
  },
  emailTxt:{
    fontSize: fontSize(20),
    marginHorizontal: wp(10),
    alignSelf: 'center',
  },
  pencil:{
    height:hp(15),
    width:wp(15),
    resizeMode:'contain'
  }
  });