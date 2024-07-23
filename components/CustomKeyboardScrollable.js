import { ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";

const isIOS = Platform.OS === "ios";
export default function CustomKeyboardScrollable({ children }) {
  return (
    <KeyboardAvoidingView
      behavior={isIOS ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
