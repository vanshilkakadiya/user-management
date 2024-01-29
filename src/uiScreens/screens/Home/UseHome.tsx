import {useState} from 'react';
import {firebase} from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import {updateUploadImage} from '../../../hooks/usePickerOptions';
import {editData, setUser} from '../../../redux/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {baseUrl} from '../../../../assets/constant/constantData';

const useHome = () => {
  const user = firebase.auth().currentUser;
  const users = useSelector((state: any) => state?.users?.user);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [searchDataResult, setSearchDataResult] = useState([]);
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [email, setEmail] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [editSelectedData, setEditSelectedData] = useState('');
  const [isEditData, setIsEditData] = useState(false);
  const [avatar, setAvatar] = useState('');
  const [id, setId] = useState('');
  const [docId, setDocId] = useState('');
  const [isImagePickerModal, setIsImagePickerModal] = useState(false);
  const [imagePaths, setImagePath] = useState('');
  const [imageSource, setImageSource] = useState('');

  const searchData = (value: any) => {
    setSearchValue(value);
    const searchData = users.filter((item: any) => {
      return (item?.first_name + item?.last_name)
        .toLowerCase()
        .includes(value?.trim().toLowerCase());
    });
    setSearchDataResult(searchData);
  };

  const updateUser = async () => {
    const imageUrl = imageSource && (await updateUploadImage(imageSource));
    const data = {
      avatar: imageUrl ? imageUrl : avatar,
      email: email,
      first_name: fName,
      last_name: lName,
      id: id,
    };
    try {
      firebase
        .firestore()
        .collection('data')
        .doc('alluser')
        .collection(`${user?.uid}`)
        .doc('detail')
        .collection('addedDetail')
        .doc(docId)
        .update(data)
        .then(() => {
          setIsEditData(false);
          setImageSource('');
        })
        .then(() => dispatch(editData(data)));
    } catch {
      Alert.alert('Retry', "user do'nt update,Please try again");
    }
  };

  const onReachEndFlatlist = () => {
    setShowActivityIndicator(true);
    page <= pageSize && getDataFormApi();
    setShowActivityIndicator(false);
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
          temp.push({...documentSnapshot?.data(), docId: documentSnapshot?.id});
        });
        dispatch(setUser({data: temp}));
      })
      .catch(() => {
        Alert.alert('Retry', 'data not get from server');
      });
  };

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

  const cancelUser = () => {
    setFName('');
    setLName('');
    setEmail('');
    setAvatar('');
    setImageSource('');
  };

  return {
    page,
    pageSize,
    searchValue,
    searchDataResult,
    showActivityIndicator,
    isEditable,
    setFName,
    setEmail,
    setLName,
    setPage,
    setPageSize,
    setSearchValue,
    setSearchDataResult,
    setShowActivityIndicator,
    setIsEditable,
    editSelectedData,
    setEditSelectedData,
    isEditData,
    setIsEditData,
    email,
    fName,
    lName,
    avatar,
    setAvatar,
    id,
    setId,
    cancelUser,
    isImagePickerModal,
    setIsImagePickerModal,
    imagePaths,
    setImagePath,
    setDocId,
    imageSource,
    setImageSource,
    updateUser,
    searchData,
    getDataFirestore,
    getDataFormApi,
    onReachEndFlatlist,
  };
};

export default useHome;
