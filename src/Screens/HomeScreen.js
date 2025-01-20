import React, { useContext, useState, useCallback, useEffect } from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { ThemeContext, UserContext } from '../Context';
import { ThemeInput, CustomButton, CustomPicker } from '../Components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker'; // Import Picker component
import { languages } from '../languages'
import { useTranslation } from 'react-i18next'

const BackgroundImage = require('../../assets/background_4_home.jpg');
const MapOfInvalidStates = new Map([
  //['first_and_last_name', false],
  ['language', false]
])

const HomeScreen = ({ navigation }) => {
  const {
    user: { userName: userID, language }, setUser
  } = useContext(UserContext);
  console.log('languages', languages)
  const { t, i18n } = useTranslation();
  //const { setUser } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const [userName, setUserName] = useState('');
  const [forceUpdate, setForceUpdate] = useState(true)
  const selectedLanguageCode = language ? language : i18n.language
  const [selectedLanguage, setSelectedLanguage] = useState(languages.find(obj => obj.code === selectedLanguageCode))

  // Clear the TextInput when the screen is focused
  useFocusEffect(
    useCallback(() => {
      setUserName(''); // Clear the userName input
    }, [])
  );

  useEffect(() => {
    console.log('selectedLanguage', selectedLanguage)
    i18n.changeLanguage(selectedLanguage.code)
    //getUser()
  }, [selectedLanguage])

  return (
    <ImageBackground 
      source={BackgroundImage} 
      style={styles.backgroundImage} 
      resizeMode="stretch"
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10, marginTop: '15%' }}>
        <ThemeInput
          style={{ marginVertical: 7 }}
          label="Tvoje ime in priimek"
          required={true}
          returnKeyType="done"
          blurOnSubmit={false}
          clearButtonMode="always"
          multiline={false}
          value={userName}
          placeholder={t('common:first_and_last_name')}
          onChangeText={(text) => setUserName(text)}
        />

        {/* Language Dropdown */}
        <View style={styles.pickerContainer}>
          <CustomPicker
            style={{ marginVertical: 10 }}
            label={t('common:choose_language')}
            sort={false}
            selectedValue={selectedLanguage}
            onValueChange={(value, index) => {
              console.log('index --------------->', index)
              if (index != 0) {
                setSelectedLanguage(value)
                console.log('value', value)
                setUser((prevUser) => ({ ...prevUser, language: value.code }));
              } else {
                if (Platform.OS === 'android') MapOfInvalidStates.set(state, true)
              }
            }}
            options={languages}
          />
        </View>

        <CustomButton
          text={t('common:start_quiz')}
          type="primary"
          //style={{ backgroundColor: theme.primaryColor, color: theme.secondaryColor }}
          onButtonPress={() => {
            if (userName) {
              setUser((prevUser) => ({ ...prevUser, userName }));
              navigation.navigate('Quiz'); // Navigate to the quiz screen
              console.log('Button pressed!');
            } else {
              Toast.show({
                type: 'info',
                text1: 'Najprej vnesi svoje ime in priimek',
                visibilityTime: 2500,
              });
            }
          }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default HomeScreen;
