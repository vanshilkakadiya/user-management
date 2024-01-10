import React from 'react';
import {Image, Text, View} from 'react-native';
import {strings} from '../../assets/constant/strings';
import {styles} from '../uiScreens/screens/Home/HomeStyle';

const Showdetail = ({item}: any) => {
  return (
    <View style={styles.flatListMainView}>
      <Image source={{uri: item?.avatar}} style={styles.imageSty} />
      <View style={styles.detailView}>
        <View style={styles.flexDirectionRow}>
          <Text style={styles.detailHeadingTxt}>{strings.email}</Text>
          <Text style={styles.colon}>{strings.colon}</Text>
          <Text style={styles.detailTxt}>{`${item?.email}`}</Text>
        </View>
        <View style={styles.flexDirectionRow}>
          <Text style={styles.detailHeadingTxt}>{strings.fName}</Text>
          <Text style={styles.colon}>{strings.colon}</Text>
          <Text style={styles.detailTxt}>{`${item?.first_name}`}</Text>
        </View>
        <View style={styles.flexDirectionRow}>
          <Text style={styles.detailHeadingTxt}>{strings.lName}</Text>
          <Text style={styles.colon}>{strings.colon}</Text>
          <Text style={styles.detailTxt}>{`${item?.last_name}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(Showdetail);
