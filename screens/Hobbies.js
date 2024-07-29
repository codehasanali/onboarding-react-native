import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const HobbiesScreen = ({ navigation }) => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const hobbies = [
    'Zumba', 'Parkour', 'Soccer', 'Basketball', 'Yoga',
    'Surfing', 'Folk Dance', 'Handball', 'Tennis',
    'Volleyball', 'Cycling', 'Climbing'
  ];

  const toggleHobby = (hobby) => {
    setSelectedHobbies((prev) => 
      prev.includes(hobby) ? prev.filter(item => item !== hobby) : [...prev, hobby]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={styles.steps}>
          <View style={[styles.step, styles.completedStep]} />
          <View style={[styles.step, styles.completedStep]} />
          <View style={styles.step} />
        </View>
        <Text style={styles.stepText}>Step 2/3</Text>
      </View>

      <Text style={styles.title}>What's your hobbies?</Text>

      <ScrollView contentContainerStyle={styles.optionsContainer}>
        {hobbies.map((hobby) => (
          <TouchableOpacity
            key={hobby}
            style={[
              styles.option,
              selectedHobbies.includes(hobby) && styles.selectedOption
            ]}
            onPress={() => toggleHobby(hobby)}
          >
            <Text style={[
              styles.optionText,
              selectedHobbies.includes(hobby) && styles.selectedOptionText
            ]}>
              {hobby}
            </Text>
            {selectedHobbies.includes(hobby) && (
              <FontAwesomeIcon icon={faCheck} size={20} color="#FFFFFF" style={styles.checkIcon} />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('Birthday')}
      >
        <Text style={styles.buttonText}>Let's Start!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  progressContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  steps: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  step: {
    width: 40,
    height: 6,
    backgroundColor: '#d3d3d3',
    marginHorizontal: 4,
    borderRadius: 3,
  },
  completedStep: {
    backgroundColor: '#007AFF',
  },
  stepText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333333',
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  option: {
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 25,
    margin: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    elevation: 2, // Adds shadow effect
  },
  selectedOption: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  optionText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  selectedOptionText: {
    color: '#FFFFFF',
  },
  checkIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    elevation: 5, 
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HobbiesScreen;
