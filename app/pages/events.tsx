import { View, Text } from 'react-native'
import React from 'react'
import images from '@/constants/images';

const trainerMenu = {
  "1": {
    title: "Cardair Berwyn Circular",
    image: images.event1,
    description: "Join us for this exciting circular route taking just under 4 hours with a 600m elevation gain.",
    date: 'Sat, 29 Mar',
    location: 'Llanrhaeadr-ym-Mochnant'
  },
  "2": {
    title: "Thor's Cave Circular Hike",
    image: images.event2,
    description: "Get ready for a new adventure as we take on the Thor’s Cave Circular on Saturday, 19th April! This 9km moderate hike features an elevation gain of 420m and offers stunning views of Staffordshire, making it perfect for all abilities, including families.",
    date: 'Sat, 19 Apr',
    location: 'Liverpool'
  },
  "3": {
    title: "Limitless Parachute Jump",
    image: images.event3,
    description: "Do it for the kids👀 Let's raise a load of money and jump out a plane together at 15,000 feet! ",
    date: 'Sat, 26 Apr',
    location: 'Cockerham'
  },
  "4": {
    title: "Manchester Marathon",
    image: images.event4,
    description: "We would love your support on the day! Help us cross that finish line and join us in celebrating afterwards in Manchester.",
    date: 'Sun, 27 Apr',
    location: 'Liverpool'
  },
  "5": {
    title: "Limitless Sports Day",
    image: images.event5,
    description: "Join us for the first-ever Limitless Sports Day on Saturday, 31st May! Get ready for an action-packed afternoon filled with team challenges, exciting competitions, and plenty of prizes to win.",
    date: 'Sat, 31 May',
    location: 'Liverpool'
  },
  "6": {
    title: "Limitless Retreat 2025",
    image: images.event6,
    description: "Due to the amazing response last year, we’re excited to announce two sessions separate retreats for the 2025! Double the intake, double the fun, and even more opportunities to grow as a community.",
    date: 'Thu, 12 Jun',
    location: 'Liverpool'
  },
  "7": {
    title: "Limitless Beach Day",
    image: images.event7,
    description: "Join us on Saturday, 28th June for a fun-filled day at Formby Beach! The day will be packed with activities and is perfect for everyone, friends and family are welcome too.",
    date: 'Sat, 28 Jun',
    location: 'Formby'
  },
};

const Events = () => {
  return (
    <View>
      <Text>Events</Text>
    </View>
  )
}

export default Events