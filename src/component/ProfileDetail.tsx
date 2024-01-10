import {StyleSheet, Text, TextInput, View} from 'react-native';
import {fontSize, hp, wp} from '../../assets/helper/helper';
import {strings} from '../../assets/constant/strings';

const ProfileDetail = ({
  detailHeading,
  detailEle,
  isEditable,
  onChangeText,
}: any) => {
  return (
    <View style={styles.detailView}>
      <Text style={styles.detailHeading}>{`${detailHeading}`}</Text>
      <Text>{strings.colon}</Text>
      {isEditable ? (
        <TextInput
          defaultValue={detailEle}
          style={styles.textInput}
          onChangeText={onChangeText}
        />
      ) : (
        <Text style={styles.detailTxt}>{`  ${detailEle}`}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  detailView: {
    flexDirection: 'row',
    marginVertical: hp(10),
  },
  detailHeading: {
    fontSize: fontSize(20),
    width: wp(135),
  },
  detailTxt: {
    fontSize: fontSize(20),
    width: wp(175),
    paddingLeft: wp(15),
  },
  textInput: {
    width: wp(150),
    borderWidth: wp(1),
    borderRadius: hp(5),
    paddingLeft: wp(10),
    marginLeft: wp(15),
  },
});

export default ProfileDetail;
