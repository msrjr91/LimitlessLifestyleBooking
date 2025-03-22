
import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import images from "@/constants/images";
import { login } from "@/utils/auth";
import { saveToken } from "@/utils/authStorage";
import { API_BASE_URL } from "@/config";

const SignIn = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // if (!email || !password) {
    //   Alert.alert("Error", "Please enter both email and password.");
    //   return;
    // }

    // try {
    //   setLoading(true);
    //   const response = await login(email, password);
    //   await saveToken(response.token);
    //   Alert.alert("Success", "You are logged in!");
    //   navigation.replace("Home"); // Navigate to Home
    // } catch (error: any) {
    //   Alert.alert("Login Failed", error.message);
    // } finally {
    //   setLoading(false);
    // }

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/users/`, 
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      const data = await response.json();
      console.log("API Response:", data);
  
      if (response.ok) {
        Alert.alert("Success", "Connected to the API!");
      } else {
        Alert.alert("Error", "Failed to connect to the API.");
      }
    } catch (error) {
      console.error("Connection Error:", error);
      Alert.alert("Error", "Could not reach the server.");
    }

  };

  return (
    <SafeAreaView className="bg-primary-400 h-full">
      <ScrollView contentContainerClassName="h-full relative">
        <Image source={images.logo} className="w-full h-4/6" resizeMode="contain" />
        <View className="px-10">
          <Text className="text-xl text-center uppercase font-rubik text-white">
            Begin Your Fitness Journey
          </Text>
        </View>

        {/* Input Fields */}
        <View className="px-10 mt-5">
          <TextInput
            placeholder="Email"
            placeholderTextColor="#ccc"
            className="bg-white p-4 rounded-md mb-3"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry
            className="bg-white p-4 rounded-md"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View className="px-10 absolute bottom-5 w-full">
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white rounded-full w-full py-4 border-2 border-orange-400"
            disabled={loading}
          >
            <View className="flex flex-row items-center justify-center">
              <Text className="text-xl font-rubik-bold text-primary-100">
                {loading ? "Logging in..." : "Get Started"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default SignIn;

