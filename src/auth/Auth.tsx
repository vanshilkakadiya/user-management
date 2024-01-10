import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {validateEmail} from '../../assets/helper/helper';
import {strings} from '../../assets/constant/strings';
import Textinput from '../component/Textinput';
import {imagePath} from '../../assets/icon/imagePath';
import useAuth from './useAuth';
import styles from './AuthStyles';

const Auth = () => {
  const {
    email,
    password,
    signUpWithEmail,
    signInWithEmail,
    emailChangeValue,
    passwordChangeValue,
  } = useAuth();

  const [signIn, setSignIn] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isValideEmail, setIsValideEmail] = useState(false);

  const emailChangeText = (value: string) => {
    emailChangeValue(value), setIsValideEmail(validateEmail(value));
  };

  const signUpTopac = () => {
    setSignIn(false),
      emailChangeValue(''),
      passwordChangeValue(''),
      setIsValideEmail(false);
  };

  const signInTopac = () => {
    setSignIn(true), emailChangeValue(''), passwordChangeValue('');
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        {signIn ? (
          <Text style={styles.signTxt}>{strings.signIn}</Text>
        ) : (
          <Text style={styles.signTxt}>{strings.signUp}</Text>
        )}
        {signIn ? (
          <View>
            <Textinput
              value={email}
              iconPath={imagePath.email}
              placeHolder={strings.email}
              onChangeTexts={(value: string) => emailChangeText(value)}
            />
            <Textinput
              value={password}
              iconPath={imagePath.password}
              placeHolder={strings.password}
              onChangeTexts={(value: string) => passwordChangeValue(value)}
            />
            <View style={styles.switchAuthView}>
              <Text style={styles.dontTxt}>{strings.donthaveanaccount}</Text>
              <TouchableOpacity onPress={() => signUpTopac()}>
                <Text style={styles.regestrationTxt}>{strings.signUp}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <Textinput
              value={firstName}
              iconPath={imagePath.user}
              placeHolder={strings.firstName}
              onChangeTexts={(value: string) => setFirstName(value)}
            />
            <Textinput
              value={lastName}
              iconPath={imagePath.user}
              placeHolder={strings.lastName}
              onChangeTexts={(value: string) => setLastName(value)}
            />
            <Textinput
              value={email}
              iconPath={imagePath.email}
              placeHolder={strings.email}
              onChangeTexts={(value: string) => emailChangeValue(value)}
            />
            <Textinput
              value={password}
              iconPath={imagePath.password}
              placeHolder={strings.password}
              onChangeTexts={(value: string) => passwordChangeValue(value)}
            />
            <Textinput
              value={confirmPassword}
              iconPath={imagePath.password}
              placeHolder={strings.confirmPassword}
              onChangeTexts={(value: string) => setConfirmPassword(value)}
            />
            <Textinput
              value={mobileNumber}
              iconPath={imagePath.mobile}
              placeHolder={strings.mobileNumber}
              onChangeTexts={(value: string) => setMobileNumber(value)}
            />
            <View style={styles.switchAuthView}>
              <Text style={styles.dontTxt}>{strings.allReadyHave}</Text>
              <TouchableOpacity onPress={() => signInTopac()}>
                <Text style={styles.regestrationTxt}>{strings.signIn}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <TouchableOpacity
          disabled={
            signIn
              ? !isValideEmail || password.length < 6
                ? true
                : false
              : isValideEmail ||
                password.length < 6 ||
                firstName.length < 1 ||
                lastName.length < 1 ||
                password !== confirmPassword ||
                mobileNumber.length < 10
              ? true
              : false
          }
          style={styles.loginTopac}
          onPress={() => (!signIn ? signUpWithEmail() : signInWithEmail())}>
          <Text style={styles.topacTxt}>{strings.logIn}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Auth;
