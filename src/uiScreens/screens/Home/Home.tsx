import {ActivityIndicator, FlatList, SafeAreaView, Text} from 'react-native';
import {styles} from './HomeStyle';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Showdetail from '../../../component/Showdetail';
import {strings} from '../../../../assets/constant/strings';
import Textinput from '../../../component/Textinput';
import {imagePath} from '../../../../assets/icon/imagePath';
import useHome from './useHome';

const Home = () => {
  const users = useSelector((state: any) => state?.users?.user);
  const {
    searchValue,
    searchDataResult,
    showActivityIndicator,
    isEditable,
    searchData,
    getDataFormApi,
    onReachEndFlatlist,
  } = useHome();

  useEffect(
    ()=>{
    getDataFormApi()
  },
  [])

  return (
    <SafeAreaView style={styles.container}>
      <Textinput
        iconPath={imagePath.search}
        defaulValue={searchValue}
        onChangeTexts={(value: any) => searchData(value)}
        placeHolder={strings.searchdata}
      />
      {searchValue && (
        <FlatList
          data={searchDataResult ?? []}
          bounces={false}
          style={styles.flatListContainer}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.nodatafoundTxt}>{strings.nodatafound}</Text>
          }
          renderItem={({item}) => <Showdetail item={item} />}
        />
      )}
      {users && !searchValue && (
        <FlatList
          data={searchValue ? searchDataResult : users ?? []}
          bounces={false}
          style={styles.flatListContainer}
          showsVerticalScrollIndicator={false}
          onEndReached={onReachEndFlatlist}
          renderItem={({item}) => (
            <Showdetail item={item} editable={isEditable} />
          )}
        />
      )}
      {showActivityIndicator && (
        <ActivityIndicator size={strings.large as 'large'} />
      )}
    </SafeAreaView>
  );
};

export default Home;
