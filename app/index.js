import {
  Image,
  StyleSheet,
  Platform,
  View,
  SafeAreaView,
  Text,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { Link } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="flex flex-1 justify-around items-center">
      <ActivityIndicator size={"large"} color={"gray"} />
    </SafeAreaView>
  );
}
