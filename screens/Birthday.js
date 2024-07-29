import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const BirthdayScreen = ({ navigation }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 50 }, (_, i) => (2023 - i).toString());

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={styles.steps}>
          <View style={[styles.step, styles.completedStep]} />
          <View style={[styles.step, styles.completedStep]} />
          <View style={[styles.step, styles.completedStep]} />
        </View>
        <Text style={styles.stepText}>Step 3/3</Text>
      </View>

      <Image
        source={{ uri: 'https://example.com/birthday.png' }}
        style={styles.image}
      />

      <Text style={styles.title}>What's your birthday?</Text>

      <ScrollView contentContainerStyle={styles.pickerContainer}>
        <Picker
          selectedValue={day}
          onValueChange={(itemValue) => setDay(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Day" value="" />
          {days.map(d => (
            <Picker.Item key={d} label={d} value={d} />
          ))}
        </Picker>
        <Picker
          selectedValue={month}
          onValueChange={(itemValue) => setMonth(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Month" value="" />
          {months.map((m, index) => (
            <Picker.Item key={m} label={m} value={(index + 1).toString().padStart(2, '0')} />
          ))}
        </Picker>
        <Picker
          selectedValue={year}
          onValueChange={(itemValue) => setYear(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Year" value="" />
          {years.map(y => (
            <Picker.Item key={y} label={y} value={y} />
          ))}
        </Picker>
      </ScrollView>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => alert('Onboarding Complete!')}
        disabled={!day || !month || !year}
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
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picker: {
    flex: 1,
    height: 50,
    marginHorizontal: 5,
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

export default BirthdayScreen;
