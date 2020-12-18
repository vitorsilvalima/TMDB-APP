import React, { useState } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { TextInputProps, TouchableOpacity } from "react-native";
interface InputProps {
  onChange(text: string): void;
  value: string;
  iconLeftName: string;
  IconLeft: React.FC<{ name: string; size: number; color: string }>;
  iconRightName?: string;
  IconRight?: React.FC<{ name: string; size: number; color: string }>;
  placeholder: string;
  onRightIconPress?(): void;
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

export const Input = ({
  onChange,
  value,
  iconLeftName,
  IconLeft,
  placeholder,
  IconRight,
  iconRightName,
  onRightIconPress,
  ...others
}: InputProps & Omit<TextInputProps, "onChange">) => {
  return (
    <InputWrapper>
      <IconLeft name={iconLeftName} size={20} color="white" />
      <TextInput
        value={value}
        onChangeText={onChange}
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        placeholderTextColor="#fff"
        {...(others as any)}
      />

      {IconRight && iconRightName && (
        <TouchableOpacity
          onPress={onRightIconPress}
          hitSlop={{ bottom: 20, top: 20, left: 20, right: 20 }}
        >
          <IconRight name={iconRightName} size={20} color="white" />
        </TouchableOpacity>
      )}
    </InputWrapper>
  );
};

export const PasswordInput = ({ onChange, value }: Partial<InputProps>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      IconLeft={Ionicons as any}
      iconLeftName="lock-closed-outline"
      value={value as string}
      onChange={onChange as InputProps["onChange"]}
      placeholder="senha"
      IconRight={Ionicons as any}
      onRightIconPress={() => setShowPassword((previous) => !previous)}
      iconRightName={showPassword ? "eye-off-outline" : "eye-outline"}
      secureTextEntry={!showPassword}
    />
  );
};
