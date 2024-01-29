import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../../assets/helper/helper';
import {colors} from '../../assets/constant/colors';

interface LabeledValue {
  iconPath: ImageSourcePropType;
  onChangeTexts: any;
  placeHolder: string;
  defaulValue?: any;
}
const Textinput = ({
  onChangeTexts,
  iconPath,
  placeHolder,
  defaulValue,
}: LabeledValue) => {
  return (
    <View style={styles.textInputView}>
      <Image source={iconPath} style={styles.txtInputIcon} />
      <TextInput
        autoCapitalize="none"
        placeholder={placeHolder}
        style={styles.textInput}
        onChangeText={onChangeTexts}
        defaultValue={defaulValue}
      />
      <TouchableOpacity style={styles.rightIconTopac}></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputView: {
    borderWidth: hp(1),
    borderColor: colors.black,
    marginHorizontal: wp(50),
    flexDirection: 'row',
    marginTop: hp(10),
    borderRadius: hp(10),
  },
  textInput: {
    height: hp(50),
    width: wp(225),
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
});

export default Textinput;
