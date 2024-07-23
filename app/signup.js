import { View, Text, Image, Alert, TextInput, Pressable } from "react-native";
import React, { useRef, useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Feather, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import CustomKeyboardScrollable from "../components/CustomKeyboardScrollable";

export default function SignIn() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");
  const profileRef = useRef("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleRegistration() {
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !usernameRef.current ||
      !profileRef.current
    )
      Alert.alert(
        "Form validation",
        "Please fill in email and password inputs.",
      );
  }
  return (
    <CustomKeyboardScrollable>
      <View
        style={{ paddingHorizontal: wp(5) }}
        className="flex flex-col gap-5"
      >
        <View className="flex justify-center flex-row">
          <Image
            source={require("../assets/images/react-logo.png")}
            resizeMode="contain"
            style={{ height: hp(40), width: hp(40) }}
          />
        </View>
        <View className="my-4">
          <Text className="text-center text-3xl font-bold text-purple-600">
            Sign Up
          </Text>
        </View>
        <View className="flex flex-col gap-3">
          <View className="rounded bg-gray-200 p-2 flex flex-row items-center space-x-3">
            <Feather name="user" size={hp(3)} />
            <TextInput
              placeholder="Username"
              placeholderTextColor={"gray"}
              onChangeText={(value) => (usernameRef.current = value)}
              className="text-xl w-full"
            />
          </View>
          <View className="rounded bg-gray-200 p-2 flex flex-row items-center space-x-3">
            <Octicons name="mail" size={hp(3)} />
            <TextInput
              placeholder="Email"
              placeholderTextColor={"gray"}
              onChangeText={(value) => (emailRef.current = value)}
              className="text-xl w-full"
            />
          </View>
          <View className="rounded bg-gray-200 p-2 flex flex-row items-center space-x-3">
            <Octicons name="lock" size={hp(3)} />
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              onChangeText={(value) => (passwordRef.current = value)}
              className="text-xl w-full"
              secureTextEntry={true}
            />
          </View>
          <View className="rounded bg-gray-200 p-2 flex flex-row items-center space-x-3">
            <Feather name="image" size={hp(3)} />
            <TextInput
              placeholder="Profile URL"
              placeholderTextColor={"gray"}
              onChangeText={(value) => (profileRef.current = value)}
              className="text-xl w-full"
            />
          </View>
        </View>
        <View className="mt-10">
          {loading ? (
            <View>
              <Text
                style={{ fontSize: hp(3) }}
                className="text-purple-600 text-center font-semibold"
              >
                registering...
              </Text>
            </View>
          ) : (
            <View>
              <Pressable
                className="rounded bg-purple-600 p-2 px-8 w-fit mx-auto"
                onPress={handleRegistration}
              >
                <Text
                  style={{ fontSize: hp(3) }}
                  className="text-white font-semibold text-center"
                >
                  register
                </Text>
              </Pressable>
              <View className="flex flex-row justify-end items-center gap-2">
                <Text
                  style={{ fontSize: hp(2) }}
                  className="text-gray-600 font-semibold"
                >
                  Already have an account?
                </Text>
                <Pressable onPress={() => router.push("signin")}>
                  <Text
                    style={{ fontSize: hp(2) }}
                    className="text-purple-600 font-semibold"
                  >
                    Sign In
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
        </View>
      </View>
    </CustomKeyboardScrollable>
  );
}
