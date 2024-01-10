import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert } from 'react-native';

const useAuth = () => {
  const {navigate}:any=useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const signUpWithEmail = () => {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          navigate("Dashboard")
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }
          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is already in use!');
          }
          Alert.alert(error.toString());
        });
    };
  
    const signInWithEmail = () => {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          navigate("Dashboard")
        })
        .catch(error => {
          if (error.code === 'auth/invalid-email') Alert.alert(error.toString());
          else if (error.code === 'auth/user-not-found') Alert.alert(error.toString());
          else {
            Alert.alert(error.toString());
          }
        });
    };

    const emailChangeValue=(value:string)=>{
      setEmail(value)
    }
    const passwordChangeValue=(value:string)=>{
      setPassword(value)
    }

    return {signInWithEmail,signUpWithEmail,email,password,emailChangeValue,passwordChangeValue}
}

export default useAuth



