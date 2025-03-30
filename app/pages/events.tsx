import { View, Text, ScrollView, Image, Linking, TouchableOpacity } from 'react-native';
import React from 'react';
import images from '@/constants/images';

const trainerMenu = {
  "2": {
    title: "Thor's Cave Circular Hike",
    image: images.event2,
    description: "Get ready for a new adventure as we take on the Thor’s Cave Circular on Saturday, 19th April! This 9km moderate hike features an elevation gain of 420m and offers stunning views of Staffordshire, making it perfect for all abilities, including families.",
    date: 'Sat, 19 Apr',
    location: 'Liverpool',
    link: 'https://www.limitlesslifestylecommunity.com/event-details/thors-cave-circular-hike'
  },
  "3": {
    title: "Limitless Parachute Jump",
    image: images.event3,
    description: "Do it for the kids👀 Let's raise a load of money and jump out a plane together at 15,000 feet! ",
    date: 'Sat, 26 Apr',
    location: 'Cockerham',
    link: 'https://www.limitlesslifestylecommunity.com/event-details/limitless-parachute-jump'
  },
  "4": {
    title: "Manchester Marathon",
    image: images.event4,
    description: "We would love your support on the day! Help us cross that finish line and join us in celebrating afterwards in Manchester.",
    date: 'Sun, 27 Apr',
    location: 'Liverpool',
    link: 'https://www.limitlesslifestylecommunity.com/event-details/manchester-marathon'
  },
  "5": {
    title: "Limitless Sports Day",
    image: images.event5,
    description: "Join us for the first-ever Limitless Sports Day on Saturday, 31st May! Get ready for an action-packed afternoon filled with team challenges, exciting competitions, and plenty of prizes to win.",
    date: 'Sat, 31 May',
    location: 'Liverpool',
    link: 'https://www.limitlesslifestylecommunity.com/event-details/limitless-sports-day'
  },
  "6": {
    title: "Limitless Retreat 2025",
    image: images.event6,
    description: "Due to the amazing response last year, we’re excited to announce two sessions separate retreats for the 2025! Double the intake, double the fun, and even more opportunities to grow as a community.",
    date: 'Thu, 12 Jun',
    location: 'Liverpool',
    link: 'https://www.limitlesslifestylecommunity.com/event-details/limitless-retreat-2025'
  },
  "7": {
    title: "Limitless Beach Day",
    image: images.event7,
    description: "Join us on Saturday, 28th June for a fun-filled day at Formby Beach! The day will be packed with activities and is perfect for everyone, friends and family are welcome too.",
    date: 'Sat, 28 Jun',
    location: 'Formby',
    link: 'https://www.limitlesslifestylecommunity.com/event-details/limitless-beach-day'
  },
};

const Events = () => {
  return (
    <ScrollView className="p-3 h-[90%]">
      {Object.values(trainerMenu).map((event, index) => (
        <View key={index} className="bg-white p-4 mb-4 rounded-xl shadow-lg">
          <Image source={event.image} className="w-full h-48 rounded-lg mb-4" />
          <Text className="text-lg font-bold">{event.title}</Text>
          <Text className="text-gray-500 mb-2">{event.date} - {event.location}</Text>
          <Text className="text-sm mb-4">{event.description}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(event.link)} className="bg-blue-500 py-2 rounded-md">
            <Text className="text-white text-center font-semibold">Learn More</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default Events;
