import {useState} from 'react';
import firestore, {firebase} from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

const UseHome = () => {
  const user = firebase.auth().currentUser;

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [searchDataResult, setSearchDataResult] = useState([]);
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [email, setEmail] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [selectedId, setSelecetedId] = useState<any>('');
  const [isEditedData, setIsEditedData] = useState(false);
  const [editSelectedData, setEditSelectedData] = useState('');
  const [isEditData, setIsEditData] = useState(false);
  const [avatar, setAvatar] = useState('');
  const [id, setId] = useState('');
  const [isImagePickerModal, setIsImagePickerModal] = useState(false);
  const [imagePaths, setImagePath] = useState('');

  const updateUser = async () => {
    // paramData?.avatar?console.log("yesssss"):console.log("noo");
    // const imageUrl = await UpdateUploadImage();
    // const imageUrl =!imagePaths&& await UpdateUploadImage();
    const data = {
      avatar: avatar,
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
        .doc('JniI1dl0n1z81iOAyCJc')
        .update(data)
        .then(() => {
          // navigate(route.home);
          console.log('data update successfully');
        });
      // dispatch(editData(data))
    } catch {
      Alert.alert('Retry', "user do'nt update,Please try again");
    }
  };

  const cancelUser = () => {
    setFName(''), setLName(''), setEmail(''), setAvatar('');
  };

  // console.log(selectedId,"selectedId");

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
    selectedId,
    setSelecetedId,
    setIsEditedData,
    isEditedData,
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
    updateUser,
    cancelUser,
    isImagePickerModal,
    setIsImagePickerModal,
    imagePaths,
    setImagePath,
  };
};

export default UseHome;
