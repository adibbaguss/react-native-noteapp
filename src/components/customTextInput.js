import React from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';

const CustomTextInput = ({ text, onChange, label, multiline, numberOfLines, textAlignVertical, borderRadius = 5 }) => {
  const styles = StyleSheet.create({
    textInputWrapper: {
      marginTop: 20,
    },
    input: {
      borderWidth: 2,
      borederColor: '#DDD',
      padding: 10,
      textAlignVertical,
      borderRadius,
    },
  });

  return (
    <View style={styles.textInputWrapper}>
      <Text>{label}</Text>
      <TextInput multiline={multiline} numberOfLines={numberOfLines} style={styles.input} placeholder={label} onChangeText={onChange} defaultValue={text} />
    </View>
  );
};

export default CustomTextInput;
