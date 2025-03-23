import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SessionCard from '../components/SessionCard'

const BookedSessions = () => {
  return (
    <View className="px-5 py-5">
        <View>
            <Text className="text-primary-200 font-rubik-semibold">Next Session</Text>
            <SessionCard 
              sessionType='1'
              date='3/24/2025'
              time='14:30'
            />
            <Text className="text-primary-200 font-rubik-semibold">Upcoming Sessions</Text>
            <SessionCard 
              sessionType='3'
              date='3/26/2025'
              time='14:00'
            />
        </View>
    </View>
  )
}

export default BookedSessions