import React, { useState, useRef,useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

function OTPInput({ length,inputValue }) {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputRefs = useRef(Array(length));
  useEffect(() => {
    inputValue(otp);
  },[otp])
  
  const handleChangeText = (text, index) => {
    otp[index] = text;
    setOtp([...otp]);

    // Automatically focus on the next input
    if (index < length - 1 && text) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          style={styles.input}
          value={digit}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          keyboardType="numeric"
          maxLength={1}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    fontFamily:'Prompt-Regular',
    width: 40,
    height: 'auto',
    borderBottomWidth: 1,
    borderColor: '#c9c9c9',
    textAlign: 'center',
    fontSize: 25,
    marginRight: 20,
  },
});

export default OTPInput;
