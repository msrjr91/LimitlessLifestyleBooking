import { View, Text, Pressable, Image, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { router } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import { Calendar } from 'react-native-calendars';

const Booking = () => {

  interface BookingItem {
    id: string;
    title: string;
  }

  const bookingItems: BookingItem[] = [
    { id: "1", title: "One to One"},
    { id: "2", title: "One to Two"},
    { id: "3", title: "Nutrition"},
    { id: "4", title: "Massage"}
  ]

  const [bookingSelection, setBookingSelection] = useState<string>("1");

  const handlePress = (id: string) => {
    setBookingSelection(id);
  };

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const today = new Date();
  const formattedToday: string =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");
  
  interface Day {
    dateString: string;
  }
  
  const handleDateSelect = (day: Day): void => {
    setSelectedDate(day.dateString);
    setSelectedTime(null); // Reset time selection when date changes
  };
  

  return (
    <SafeAreaView className="bg-white">
      <>
        {/* Header */}
        <View className="flex flex-row items-center justify-between mt-2 px-5">
            <Pressable onPress={() => router.push('/pages/profile')}>
                <Image
                source={images.avatar}
                className="size-12 rounded-full border border-black-100"
                />
            </Pressable>
            <Image source={images.logoSmall} resizeMode="contain" />
            <Image source={icons.bell} className="size-12 p-2" />
        </View>

        {/* Booking Menu */}
        <View className="flex flex-row justify-around mt-5 px-2">
          {bookingItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              className={`px-4 py-2 rounded-full ${
                bookingSelection === item.id
                  ? "bg-blue-500"
                  : "bg-gray-200"
              }`}
              onPress={() => handlePress(item.id)}
            >
              <Text
                className={`text-sm ${
                  bookingSelection === item.id
                    ? "text-white font-rubik-bold"
                    : "text-primary-100 font-rubik-light"
                }`}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Calendar */}
        <Calendar
          style={{
              height: 350,
              width: '100%',
              marginBottom: 5,
          }}
          minDate={formattedToday}
          markedDates={{
              [formattedToday]: { selected: selectedDate === formattedToday, selectedColor: 'red' },
              ...(selectedDate ? { [selectedDate]: { selected: true, marked: true, selectedColor: '#2563EB' } } : {})
          }}
          onDayPress={handleDateSelect}
          theme={{
              todayTextColor: 'red',
              arrowColor: 'blue',
          }}
      />



      </>
    </SafeAreaView>
  );
};

export default Booking;
