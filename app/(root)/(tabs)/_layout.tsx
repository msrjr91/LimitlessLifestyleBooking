import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from "expo-router";
import icons from '@/constants/icons';

const TabIcon = ({ focused, icon, title}: {focused: boolean; icon: any; title: string}) => (
    <View className='flex-1 mt-3 flex flex-col items-center'>
        <Image source={icon} tintColor={focused ? '#D69006' : '#8C8E98'} resizeMode='contain' className='size-6'/>
        <Text className={`${focused ? 'text-[#D69006] font-rubik-medium' : 'text-[#8C8E98] font-rubik'} text-xs w-full text-center mt-1`}>
            {title}
        </Text>
    </View>
)

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#080E13',
                // backgroundColor: '#0D2031',
                position: 'absolute',
                borderTopColor: '',
                borderTopWidth: 1,
                minHeight: 70,
            }
        }}
    >
      <Tabs.Screen 
        name='index'
        options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcon icon={icons.home} focused={focused} title='Home'/>
            )
        }}
      />
      <Tabs.Screen 
        name='booking'
        options={{
            title: 'Schedule',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcon icon={icons.booking} focused={focused} title='Booking'/>
            )
        }}
      />
      <Tabs.Screen 
        name='community'
        options={{
            title: 'Community',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <TabIcon icon={icons.people} focused={focused} title='Community'/>
            )
        }}
      />

    </Tabs>
  )
}

export default TabsLayout