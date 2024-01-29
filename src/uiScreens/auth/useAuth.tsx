import {useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {firebase} from '@react-native-firebase/firestore';
import {validateEmail} from '../../../assets/helper/helper';
import {route} from '../../../assets/constant/route';
import {StackNavigationProp} from '@react-navigation/stack';

const useAuth = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [email, setEmail] = useState('');
  const [signIn, setSignIn] = useState(true);
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isValideEmail, setIsValideEmail] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailChangeText = (value: string) => {
    emailChangeValue(value);
    setIsValideEmail(validateEmail(value));
  };
  const setFirstNameValue = (value: string) => {
    setFirstName(value);
  };
  const setLastNameValue = (value: string) => {
    setLastName(value);
  };
  const setConfirmPasswordValue = (value: string) => {
    setConfirmPassword(value);
  };
  const setMobileNumberValue = (value: string) => {
    setMobileNumber(value);
  };

  const signUpTopac = () => {
    setSignIn(false);
    emailChangeValue('');
    passwordChangeValue('');
    setIsValideEmail(false);
  };

  const signInTopac = () => {
    setSignIn(true);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setMobileNumber('');
  };

  const signUpWithEmail = async () => {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async usr => {
        await firebase
          .firestore()
          .collection('data')
          .doc('alluser')
          .collection(`${usr?.user?.uid}`)
          .doc('personalDetail')
          .set({
            first_name: firstName,
            last_name: lastName,
            email: email,
            mobileNumber: mobileNumber,
            avatar: '',
          })
          .then(() => {
            clearSignupDetail();
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: route.dashboard,
                },
              ],
            });
          })
          .catch(() => {
            Alert.alert('Retry', 'something went wrong,Please try again');
          });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Retry', 'This email is already used');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Retry', 'Please enter valid email id');
        } else {
          Alert.alert('Retry', 'Error, please try again');
        }
      });
  };

  const clearSignupDetail = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setMobileNumber('');
  };

  const clearSignInDetail = () => {
    setEmail('');
    setPassword('');
  };

  const signInWithEmail = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        clearSignInDetail();
        navigation.reset({
          index: 0,
          routes: [
            {
              name: route.dashboard,
            },
          ],
        });
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email')
          Alert.alert('Retry', 'Please enter valid email id');
        else if (error.code === 'auth/user-not-found')
          Alert.alert('Retry', 'You are not having account');
        else {
          Alert.alert('Retry', 'Error, please try again');
        }
      });
  };

  const emailChangeValue = (value: string) => {
    setEmail(value);
  };
  const passwordChangeValue = (value: string) => {
    setPassword(value);
  };

  return {
    email,
    password,
    signInWithEmail,
    signUpWithEmail,
    emailChangeValue,
    passwordChangeValue,
    signIn,
    firstName,
    lastName,
    confirmPassword,
    mobileNumber,
    isValideEmail,
    emailChangeText,
    signUpTopac,
    signInTopac,
    setFirstNameValue,
    setLastNameValue,
    setConfirmPasswordValue,
    setMobileNumberValue,
    clearSignupDetail,
  };
};

export default useAuth;
