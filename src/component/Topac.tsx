import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontSize, hp, wp } from '../../assets/helper/helper'
import { colors } from '../../assets/constant/colors'
import { strings } from '../../assets/constant/strings'

const Topac = ({onPressEvent,topacName,backColor}:any) => {
  return (
 <TouchableOpacity style={[styles.topacBackground,{backgroundColor:backColor}]} onPress={onPressEvent}>
        <Text style={styles.txt}>{topacName}</Text>
      </TouchableOpacity>
  )
}

export const styles=StyleSheet.create({
    topacBackground:{
        height:hp(50),
        width:wp(125),
        backgroundColor:colors.white,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:hp(15),
        marginTop:hp(15),
        marginHorizontal:wp(10)
    },
    txt:{
        fontSize:fontSize(20),
        fontWeight:'700',
        color:colors.white
    }
})

export default Topac