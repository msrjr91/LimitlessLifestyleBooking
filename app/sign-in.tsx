
import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/utils/auth";
import { saveToken } from "@/utils/authStorage";
import { API_BASE_URL } from "@/config";

const SignIn = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); 

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

    // try {
    //   const response = await fetch(
    //     `${API_BASE_URL}/api/users/`, 
    //     {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
  
    //   const data = await response.json();
    //   console.log("API Response:", data);
  
    //   if (response.ok) {
    //     Alert.alert("Success", "Connected to the API!");
    //   } else {
    //     Alert.alert("Error", "Failed to connect to the API.");
    //   }
    // } catch (error) {
    //   console.error("Connection Error:", error);
    //   Alert.alert("Error", "Could not reach the server.");
    // }

  };

  return (
    <SafeAreaView className="bg-primary-100 h-full">
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
          <View className="relative">
            <TextInput
              placeholder="Password"
              placeholderTextColor="#ccc"
              secureTextEntry={!isPasswordVisible} 
              className="bg-white p-4 rounded-md"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)} 
              style={{ position: "absolute", right: 10, top: 12 }} 
            >
              <Image
                source={isPasswordVisible ? icons.eyeClosed : icons.eye} 
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-10 absolute bottom-5 w-full">
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white rounded-full w-full py-4"
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

