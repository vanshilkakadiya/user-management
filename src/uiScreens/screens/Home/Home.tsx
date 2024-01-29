import {ActivityIndicator, Alert, FlatList, SafeAreaView} from 'react-native';
import axios from 'axios';
import {styles} from './HomeStyle';
import {setUser} from '../../../redux/userSlice';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Showdetail from '../../../component/Showdetail';
import {firebase} from '@react-native-firebase/firestore';
import {strings} from '../../../../assets/constant/strings';

const Home = () => {
  const user = firebase.auth().currentUser;
  const users = useSelector((state: any) => state?.users?.user);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(1);
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);
  const baseUrl = `https://reqres.in/api`;

  useEffect(() => {
    getDataFormApi();
  }, []);

  const getDataFormApi = async () => {
    page < 2 && (await getDataFirestore());
    await axios.get(`${baseUrl}/users?page=${page}`).then((response: any) => {
      setPageSize(response?.data?.total_pages);
      dispatch(setUser(response?.data));
      setPage(page + 1);
    }).catch(()=>{
      Alert.alert("Oops","data not fetch from the server!!!")
    })
    page <= pageSize && setPage(page + 1);
  };

  const getDataFirestore = async () => {
    await firebase
      .firestore()
      .collection('data')
      .doc('alluser')
      .collection(`${user?.uid}`)
      .doc('detail').collection('addedDetail')
      .get()
      .then(querySnapshot => {
        const temp: any = [];
        querySnapshot.forEach(documentSnapshot => {
          temp.push(documentSnapshot.data());
        });
        dispatch(setUser({data: temp}));
      })
      .catch(() => {
        Alert.alert('Retry', 'data not get from server');
      });
  };

  const onReachEndFlatlist = () => {
    setShowActivityIndicator(true);
    page <= pageSize && getDataFormApi();
    setShowActivityIndicator(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      {users && (
        <FlatList
          data={users ?? []}
          showsVerticalScrollIndicator={false}
          onEndReached={() => onReachEndFlatlist()}
          renderItem={({item}) => <Showdetail item={item} />}
        />
      )}
      {showActivityIndicator && (
        <ActivityIndicator size={strings.large as 'large'} />
      )}
    </SafeAreaView>
  );
};

export default Home;
