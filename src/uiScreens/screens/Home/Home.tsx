import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import {styles} from './HomeStyle';
import {setUser} from '../../../redux/userSlice';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Showdetail from '../../../component/Showdetail';
import {firebase} from '@react-native-firebase/firestore';
import {strings} from '../../../../assets/constant/strings';
import Textinput from '../../../component/Textinput';
import {imagePath} from '../../../../assets/icon/imagePath';
import Topac from '../../../component/Topac';
import {colors} from '../../../../assets/constant/colors';
import UseHome from './useHome';
import {fontSize} from '../../../../assets/helper/helper';

const Home = () => {
  const user = firebase.auth().currentUser;
  const users = useSelector((state: any) => state?.users?.user);
  const dispatch = useDispatch();
  const {
    page,
    pageSize,
    searchValue,
    searchDataResult,
    showActivityIndicator,
    isEditable,
    setPage,
    setPageSize,
    setSearchValue,
    setSearchDataResult,
    setShowActivityIndicator,
    setIsEditable,
    isEditedData,
  } = UseHome();
  const baseUrl = `https://reqres.in/api`;

  useEffect(() => {
    getDataFormApi();
  }, []);

  const getDataFormApi = async () => {
    page < 2 && (await getDataFirestore());
    await axios
      .get(`${baseUrl}/users?page=${page}`)
      .then((response: any) => {
        setPageSize(response?.data?.total_pages);
        dispatch(setUser(response?.data));
        setPage(page + 1);
      })
      .catch(() => {
        Alert.alert('Oops', 'data not fetch from the server!!!');
      });
    page <= pageSize && setPage(page + 1);
  };

  const getDataFirestore = async () => {
    await firebase
      .firestore()
      .collection('data')
      .doc('alluser')
      .collection(`${user?.uid}`)
      .doc('detail')
      .collection('addedDetail')
      .get()
      .then(querySnapshot => {
        const temp: any = [];
        querySnapshot.forEach(documentSnapshot => {
          temp.push({...documentSnapshot.data(), docId: documentSnapshot.id});
        });
        dispatch(setUser({data: temp}));
      })
      .catch(() => {
        Alert.alert('Retry', 'data not get from server');
      });
  };

  const searchData = (value: any) => {
    setSearchValue(value);
    const searchData = users.filter((item: any) => {
      return (item?.first_name + item?.last_name)
        .toLowerCase()
        .includes(value?.trim().toLowerCase());
    });
    setSearchDataResult(searchData);
  };

  const onReachEndFlatlist = () => {
    setShowActivityIndicator(true);
    page <= pageSize && getDataFormApi();
    setShowActivityIndicator(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Textinput
        iconPath={imagePath.search}
        value={searchValue}
        onChangeTexts={(value: any) => searchData(value)}
        placeHolder={strings.searchdata}
      />
      {/* <Topac
            topacName={isEditable ? strings.done : strings.edit}
            backColor={isEditable ? colors.blue : colors.green}
            disable={false}
            onPressEvent={() => setIsEditable(!isEditable)}
          /> */}
      {searchValue &&
        (searchDataResult.length < 1 ? (
          <View style={styles.centerDetail}>
            <Text style={styles.nodatafoundTxt}>{strings.nodatafound}</Text>
          </View>
        ) : (
          <FlatList
            data={searchDataResult ?? []}
            bounces={false}
            style={styles.flatListContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <Showdetail item={item} />}
          />
        ))}
      {users && !searchValue && (
        <FlatList
          data={searchValue ? searchDataResult : users ?? []}
          bounces={false}
          style={styles.flatListContainer}
          showsVerticalScrollIndicator={false}
          onEndReached={() => onReachEndFlatlist()}
          renderItem={({item}) => (
            <Showdetail item={item} editable={isEditable} />
          )}
        />
      )}
      {showActivityIndicator && (
        <ActivityIndicator size={strings.large as 'large'} />
      )}
      {isEditedData && <Modal style={{backgroundColor:'red',flex:1}}>
          <Text>aaaa</Text>
        </Modal>}
    </SafeAreaView>
  );
};

export default Home;
