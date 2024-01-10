import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../assets/constant/colors';
import {fontSize, hp, validateEmail, wp} from '../../assets/helper/helper';
import {strings} from '../../assets/constant/strings';
import Textinput from '../component/Textinput';
import {imagePath} from '../../assets/icon/imagePath';
import auth from '@react-native-firebase/auth';

const Auth = ({navigation}: {navigation: any}) => {
  const [signIn, setSignIn] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isValideEmail, setIsValideEmail] = useState(false);

  const signUpWithEmail = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Dashboard');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is already in use!');
        }
        Alert.alert(error);
      });
  };

  const signInWithEmail = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        navigation.navigate('Dashboard');
        console.log(user);
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') Alert.alert(error);
        else if (error.code === 'auth/user-not-found') Alert.alert(error);
        else {
          Alert.alert(error);
        }
      });
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
              onChangeTexts={(value: string) => {
                setEmail(value), setIsValideEmail(validateEmail(value));
              }}
            />
            <Textinput
              value={password}
              iconPath={imagePath.password}
              placeHolder={strings.password}
              onChangeTexts={(value: string) => {
                setPassword(value);
              }}
            />
            <View style={styles.switchAuthView}>
              <Text style={styles.dontTxt}>{strings.donthaveanaccount}</Text>
              <TouchableOpacity
                onPress={() => {
                  setSignIn(false),
                    setEmail(''),
                    setPassword(''),
                    setIsValideEmail(false);
                }}>
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
              onChangeTexts={(value: string) => {
                setFirstName(value);
              }}
            />
            <Textinput
              value={lastName}
              iconPath={imagePath.user}
              placeHolder={strings.lastName}
              onChangeTexts={(value: string) => {
                setLastName(value);
              }}
            />
            <Textinput
              value={email}
              iconPath={imagePath.email}
              placeHolder={strings.email}
              onChangeTexts={(value: string) => {
                setEmail(value);
              }}
            />
            <Textinput
              value={password}
              iconPath={imagePath.password}
              placeHolder={strings.password}
              onChangeTexts={(value: string) => {
                setPassword(value);
              }}
            />
            <Textinput
              value={confirmPassword}
              iconPath={imagePath.password}
              placeHolder={strings.confirmPassword}
              onChangeTexts={(value: string) => {
                setConfirmPassword(value);
              }}
            />
            <Textinput
              value={mobileNumber}
              iconPath={imagePath.mobile}
              placeHolder={strings.mobileNumber}
              onChangeTexts={(value: string) => {
                setMobileNumber(value);
              }}
            />
            <View style={styles.switchAuthView}>
              <Text style={styles.dontTxt}>{strings.allReadyHave}</Text>
              <TouchableOpacity
                onPress={() => {
                  setSignIn(true), setEmail(''), setPassword('');
                }}>
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
          onPress={() => {
            {
              !signIn ? signUpWithEmail() : signInWithEmail();
            }
          }}>
          <Text style={styles.topacTxt}>{strings.logIn}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  textInputView: {
    borderWidth: 1,
    borderColor: colors.black,
    marginHorizontal: wp(50),
    flexDirection: 'row',
    marginTop: hp(10),
  },
  textInput: {
    height: hp(50),
    width: wp(225),
  },
  signTxt: {
    fontSize: fontSize(35),
    color: colors.black,
    alignSelf: 'center',
    marginBottom: hp(50),
    fontWeight: '500',
  },
  txtInputIcon: {
    height: hp(25),
    width: wp(25),
    alignSelf: 'center',
    marginHorizontal: wp(11),
  },
  rightIconTopac: {
    alignSelf: 'center',
  },
  dontTxt: {
    fontSize: fontSize(15),
    alignSelf: 'center',
  },
  regestrationTxt: {
    color: colors.blue,
    marginLeft: wp(10),
  },
  switchAuthView: {
    flexDirection: 'row',
    marginTop: hp(10),
    justifyContent: 'center',
  },
  loginTopac: {
    backgroundColor: colors.black,
    height: hp(50),
    width: wp(150),
    alignSelf: 'center',
    marginTop: hp(25),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(15),
  },
  topacTxt: {
    color: colors.white,
    fontSize: fontSize(25),
    fontWeight: '500',
  },
});

export default Auth;
