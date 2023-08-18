import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button, ToastAndroid} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const FormComponent = () => {
  const [Gender, setGender] = useState('Male');
  return (
    <View>
      <View>
        <Text style = {{fontSize: 15, color: 'black', marginTop: 10, fontWeight: 'bold',color:'#009688',}}>Select Gender:</Text>
        <Picker
          selectedValue={Gender}
          onValueChange={currentGender => setGender(currentGender)}>
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Not to specify" value="nts" />
        </Picker>
      </View>
    </View>
  );
};
export default FormComponent;