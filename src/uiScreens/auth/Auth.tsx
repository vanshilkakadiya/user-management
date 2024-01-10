import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {strings} from '../../../assets/constant/strings';
import Textinput from '../../component/Textinput';
import {imagePath} from '../../../assets/icon/imagePath';
import useAuth from './useAuth';
import styles from './AuthStyles';
import {isIos} from '../../../assets/helper/helper';

const Auth = () => {
  const {
    email,
    password,
    signUpWithEmail,
    signInWithEmail,
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
  } = useAuth();

  return (
    <SafeAreaView style={styles.mainView}>
      <KeyboardAvoidingView
        behavior={
          isIos ? (strings.padding as 'padding') : (strings.height as 'height')
        }
        style={styles.container}>
        {signIn ? (
          <Text style={styles.signTxt}>{strings.signIn}</Text>
        ) : (
          <Text style={styles.signTxt}>{strings.signUp}</Text>
        )}
        {signIn ? (
          <>
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
          </>
        ) : (
          <>
            <Textinput
              value={firstName}
              iconPath={imagePath.user}
              placeHolder={strings.firstName}
              onChangeTexts={(value: string) => setFirstNameValue(value)}
            />
            <Textinput
              value={lastName}
              iconPath={imagePath.user}
              placeHolder={strings.lastName}
              onChangeTexts={(value: string) => setLastNameValue(value)}
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
              onChangeTexts={(value: string) => setConfirmPasswordValue(value)}
            />
            <Textinput
              value={mobileNumber}
              iconPath={imagePath.mobile}
              placeHolder={strings.mobileNumber}
              onChangeTexts={(value: string) => setMobileNumberValue(value)}
            />
            <View style={styles.switchAuthView}>
              <Text style={styles.dontTxt}>{strings.allReadyHave}</Text>
              <TouchableOpacity onPress={() => signInTopac()}>
                <Text style={styles.regestrationTxt}>{strings.signIn}</Text>
              </TouchableOpacity>
            </View>
          </>
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
          <Text style={styles.topacTxt}>
            {signIn ? strings.logIn : strings.signUp}
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Auth;
