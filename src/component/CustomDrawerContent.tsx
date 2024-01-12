import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {strings} from '../../assets/constant/strings';
import {hp} from '../../assets/helper/helper';
import {colors} from '../../assets/constant/colors';
import {route} from '../../assets/constant/route';

const CustomDrawerContent = ({navigation}: {navigation: any}) => {
  const jumpToEvent = (value: string) => {
    navigation.jumpTo(value);
  };
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => jumpToEvent(route.home)}
        style={styles.topacView}>
        <Text>{strings.home}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => jumpToEvent(route.adduser)}
        style={styles.topacView}>
        <Text>{strings.adduser}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => jumpToEvent(route.profile)}
        style={styles.topacView}>
        <Text>{strings.profile}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topacView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(1),
    height: hp(50),
    backgroundColor: colors.aliceblue,
  },
});

export default CustomDrawerContent;
