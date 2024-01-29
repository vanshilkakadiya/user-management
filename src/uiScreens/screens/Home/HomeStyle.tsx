import { StyleSheet } from "react-native";
import { colors } from "../../../../assets/constant/colors";
import { fontSize, hp, wp } from "../../../../assets/helper/helper";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    flatListMainView: {
      flex:1,
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
    // detailView: {
    //   justifyContent: 'center',
    //   marginLeft: wp(25),
    // },
    // detailHeadingTxt: {
    //   width: wp(60),
    //   fontWeight: '600',
    //   fontSize:fontSize(20)
    // },
    detailTxt: {
      fontSize:fontSize(20),
      marginHorizontal:wp(10),
      alignSelf:'center',
      marginTop:hp(10)
    },
    flexDirectionRow: {
      flexDirection: 'row',
    },
    // colon:{
    //   marginHorizontal:wp(10),
    // },
    // editTextInput:{
    //   borderWidth:wp(1),
    //   paddingVertical:hp(5),
    //   paddingHorizontal:wp(10),
    //   width:wp(110),
    //   marginVertical:hp(10)
    // },
    flatListContainer:{
      marginTop:hp(25),
      borderTopRightRadius: hp(25),
      borderTopLeftRadius: hp(25),
    },
    nodatafoundTxt:{
      alignSelf:'center',
      fontSize:fontSize(50)
    },
    centerDetail:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
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