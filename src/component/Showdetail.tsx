import {Image, Text, View} from 'react-native';
import React from 'react';
import {styles} from '../uiScreens/screens/Home/HomeStyle';
import {strings} from '../../assets/constant/strings';

const Showdetail = ({item}: any) => {
  return (
    <View style={styles.flatListMainView}>
      <Image source={{uri: item?.avatar}} style={styles.imageSty} />
      <View style={styles.detailView}>
        <View style={styles.flexDirectionRow}>
          <Text style={styles.detailHeadingTxt}>{strings?.id} </Text>
          <Text style={styles.detailTxt}>{`: ${item?.id}`}</Text>
        </View>
        <View style={styles.flexDirectionRow}>
          <Text style={styles.detailHeadingTxt}>{strings?.email}</Text>
          <Text style={styles.detailTxt}>{`:${item?.email}`}</Text>
        </View>
        <View style={styles.flexDirectionRow}>
          <Text style={styles.detailHeadingTxt}>{strings?.fName}</Text>
          <Text style={styles.detailTxt}>{`:${item?.first_name}`}</Text>
        </View>
        <View style={styles.flexDirectionRow}>
          <Text style={styles.detailHeadingTxt}>{strings?.lName}</Text>
          <Text style={styles.detailTxt}>{`:${item?.last_name}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default Showdetail;
