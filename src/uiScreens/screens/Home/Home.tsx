import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../../redux/userSlice';
import {styles} from './HomeStyle';
import Showdetail from '../../../component/Showdetail';
import { strings } from '../../../../assets/constant/strings';

const Home = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(1);
  
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);
  const baseUrl = `https://reqres.in/api`;
  const dispatch = useDispatch();

  useEffect(() => {
    getDataFormApi();
  }, []);

  const getDataFormApi = () => {
    axios.get(`${baseUrl}/users?page=${page}`).then((response: any) => {
      setPageSize(response?.data?.total_pages)
      dispatch(setUser(response?.data));
    });
    page <= pageSize && setPage(page + 1);
  };

  const users = useSelector((state: any) => state?.users?.user);

  const onReachEndFlatlist = () => {
    setShowActivityIndicator(true);
    page <= pageSize && getDataFormApi();
    setShowActivityIndicator(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {users && 
        <FlatList
          data={users ?? []}
          showsVerticalScrollIndicator={false}
          onEndReached={() => onReachEndFlatlist()}
          renderItem={({item}) => <Showdetail item={item} />}
        />
      }
      {showActivityIndicator && <ActivityIndicator size={strings.large as "large"} />}
    </SafeAreaView>
  );
};

export default Home;
