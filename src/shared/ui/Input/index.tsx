import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

interface InputProps {
  onChange(text: string): void;
  value: string;
  iconName: string;
  IconLeft: React.FC<{ name: string; size: number; color: string }>;
}

const InputWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: white;
  padding-bottom: 12px;
`;

const TextInput = styled.TextInput`
  flex: 1;
  color: white;
  font-size: 18px;
  margin-left: 12px;
  margin-right: 12px;
`;

export const Input = ({ onChange, value, iconName, IconLeft }: InputProps) => {
  return (
    <InputWrapper>
      <IconLeft name={iconName} size={20} color="white" />
      <TextInput
        value={value}
        onChangeText={onChange}
        underlineColorAndroid="transparent"
      />
      {/* <Ionicons name="md-checkmark-circle" size={24} color="white" /> */}
    </InputWrapper>
  );
};
