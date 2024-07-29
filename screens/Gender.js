import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const GenderScreen = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={styles.steps}>
          <View style={[styles.step, styles.completedStep]} />
          <View style={styles.step} />
          <View style={styles.step} />
        </View>
        <Text style={styles.stepText}>Step 1/3</Text>
      </View>

      <Image
        source={{ uri: 'https://example.com/gender.png' }}
        style={styles.image}
      />

      <Text style={styles.title}>What's your gender?</Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedGender === 'Male' && styles.selectedOption
          ]}
          onPress={() => setSelectedGender('Male')}
        >
          <Text style={[
            styles.optionText,
            selectedGender === 'Male' && styles.selectedOptionText
          ]}>
            Male
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            selectedGender === 'Female' && styles.selectedOption
          ]}
          onPress={() => setSelectedGender('Female')}
        >
          <Text style={[
            styles.optionText,
            selectedGender === 'Female' && styles.selectedOptionText
          ]}>
            Female
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('Hobbies')}
        disabled={!selectedGender}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  progressContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  steps: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  step: {
    width: 50,
    height: 5,
    backgroundColor: '#d3d3d3',
    marginHorizontal: 5,
  },
  completedStep: {
    backgroundColor: '#007AFF',
  },
  stepText: {
    fontSize: 18,
    color: '#007AFF',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  option: {
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
  },
  selectedOption: {
    backgroundColor: '#007AFF',
  },
  optionText: {
    fontSize: 16,
    color: '#007AFF',
  },
  selectedOptionText: {
    color: '#FFFFFF',
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default GenderScreen;
