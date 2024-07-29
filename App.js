import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import Gender from './screens/Gender';
import Birthday from './screens/Birthday';
import Hobbies from './screens/Hobbies';

const Stack = createStackNavigator();

const CustomBackButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ marginLeft: 10 }}>
    <FontAwesomeIcon icon={faChevronLeft} size={20} color="black" />
  </TouchableOpacity>
);

const App = () => {
  const handleSkip = () => {
    Alert.alert("Skip", "Skip button clicked!");
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gender">
        <Stack.Screen
          name="Gender"
          component={Gender}
          options={({ navigation }) => ({})}
        />
        <Stack.Screen
          name="Hobbies"
          component={Hobbies}
          options={({ navigation }) => ({
            headerLeft: () => (
              <CustomBackButton onPress={() => navigation.goBack()} />
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={handleSkip}
                style={{ marginRight: 10 }}
              >
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity>
            ),
            
          })}
        />
        <Stack.Screen
          name="Birthday"
          component={Birthday}
          options={({ navigation }) => ({
            headerLeft: () => (
              <CustomBackButton onPress={() => navigation.goBack()} />
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={handleSkip}
                style={{ marginRight: 10 }}
              >
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  skipText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

export default App;
