import { Image, ImageSourcePropType, StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontSize, hp, wp } from '../../assets/helper/helper';
import { colors } from '../../assets/constant/colors';

const Textinput = ({value,onChangeTexts,iconPath,placeHolder}:{value: string,iconPath:ImageSourcePropType,onChangeTexts:any,placeHolder:string}) => {
  return (
    <View style={styles.textInputView}>
    <Image source={iconPath} style={styles.txtInputIcon}  />
    <TextInput
      placeholder={placeHolder}
      style={styles.textInput}
      value={value}
      onChangeText={onChangeTexts}
    />
    <TouchableOpacity style={styles.rightIconTopac}>
    </TouchableOpacity>
  </View>
  )
}


const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  textInputView: {
    borderWidth: 1,
    borderColor: colors.black,
    marginHorizontal: wp(50),
    flexDirection:'row',
    marginTop:hp(10),
    borderRadius:hp(10)
  },
  textInput: {
    height: hp(50),
    width:wp(225),
  },
  signTxt:{
    fontSize:fontSize(35),
    color:colors.black,
    alignSelf:'center',
    marginBottom:hp(50)
  },
  txtInputIcon:{
    height:hp(25),
    width:wp(25),
    alignSelf:'center',
    marginHorizontal:wp(11)
  },
  rightIconTopac:{
    alignSelf:'center',
  }
});

export default Textinput
