import React from 'react';
import {colors} from '../../assets/constant/colors';
import {fontSize, hp, wp} from '../../assets/helper/helper';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface dataTyp {
  onPressEvent: any;
  topacName: string;
  backColor: string;
  disable: boolean;
}

const Topac = ({onPressEvent, topacName, backColor, disable}: dataTyp) => {
  return (
    <TouchableOpacity
      style={[styles.topacBackground, {backgroundColor: backColor}]}
      onPress={onPressEvent}
      disabled={disable}>
      <Text style={styles.txt}>{topacName}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  topacBackground: {
    height: hp(50),
    width: wp(125),
    marginTop: hp(15),
    alignItems: 'center',
    borderRadius: hp(15),
    justifyContent: 'center',
    marginHorizontal: wp(10),
    backgroundColor: colors.white,
  },
  txt: {
    fontWeight: '700',
    color: colors.white,
    fontSize: fontSize(20),
  },
});

export default Topac;
