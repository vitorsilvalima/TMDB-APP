import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleProp,
  ViewStyle,
} from "react-native";
import styles from "./styles";

interface KeyboardAwareScrollViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const KeyboardAwareScrollView = ({
  children,
  style,
}: KeyboardAwareScrollViewProps) => (
  <KeyboardAvoidingView
    behavior="padding"
    style={styles.flex1}
    keyboardVerticalOffset={80}
  >
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={[styles.container, style]}
    >
      {children}
    </ScrollView>
  </KeyboardAvoidingView>
);
