import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Alert} from 'react-native';
import { route } from '../../../assets/constant/route';

const useAuth = () => {
  const {navigate}: any = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpWithEmail = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigate(route.dashboard))
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Retry', 'This email is already used');
        }
        else if (error.code === 'auth/invalid-email') {
          Alert.alert('Retry', 'Please enter valid email id');
        } else {
          Alert.alert('Retry', 'Error, please try again');
        }
      });
  };

  const signInWithEmail = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate(route.dashboard))
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
  };
};

export default useAuth;
