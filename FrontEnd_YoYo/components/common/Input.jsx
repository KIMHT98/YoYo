import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { MainStyle } from '../../constants/style';

export default function Input({ placeholder, onChange, isError }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const borderColor = isError
    ? MainStyle.colors.error // 에러가 있을 때의 색상
    : isFocused
      ? MainStyle.colors.main // 포커스될 때의 색상
      : MainStyle.colors.lightGray; // 기본 색상

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, { borderBottomColor: borderColor }]}
        placeholder={placeholder}
        placeholderTextColor={MainStyle.colors.lightGray}
        onChangeText={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isError && <Text style={styles.error}>※ error Message</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 24,
    paddingVertical: 4,
  },
  input: {
    borderBottomWidth: 1,
    fontSize: MainStyle.fontSize.md,
    paddingHorizontal: 4,
    paddingTop: 8,
  },
  error: {
    color: MainStyle.colors.error,
    fontSize: MainStyle.fontSize.subContent
  }
});
