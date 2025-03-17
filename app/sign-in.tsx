import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images';
import icons from '@/constants/icons';
import { StatusBar } from 'expo-status-bar';
import { login } from '@/lib/appwrite';

const SignIn = () => {

  const handleLogin = async () => {
    const result = await login();
    if(result) {
      console.log('login successful')
    } else {
      Alert.alert('Error', 'Failed to login');
    }
  };

  return (
    <SafeAreaView className='bg-primary-400 h-full'>
      <ScrollView contentContainerClassName='h-full relative'>
        <Image source={images.logo} className='w-full h-4/6' resizeMode='contain'/>
        <View className='px-10'>
          <Text className='text-xl text-center uppercase font-rubik text-white'>Begin Your Fitness Journey</Text>
        </View>
        <View className='px-10 absolute bottom-5 w-full'>
          <TouchableOpacity onPress={handleLogin} className='bg-white rounded-full w-full py-4 shadow-md shadow-black-300 border border-orange-300'>
            <View className='flex flex-row items-center justify-center'>
              <Image 
                source={icons.google}
                className='w-5 h-5'
                resizeMode='contain'
              />
              <Text className='text-lg font-rubik-medium text-black-300 ml-2'>Continue with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style='light'/>
    </SafeAreaView>

  )
}

export default SignIn