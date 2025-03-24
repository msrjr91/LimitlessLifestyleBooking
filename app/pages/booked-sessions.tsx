import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import SessionCard from '../components/SessionCard';
import TrainerCard from '../components/TrainerCard';
import images from '@/constants/images'; // Assuming your images are imported here

const dummySessions = [
  { sessionId: '1', sessionType: '2', date: '3/27/2025', time: '13:00' },
  { sessionId: '2', sessionType: '1', date: '3/28/2025', time: '12:00' },
  { sessionId: '3', sessionType: '4', date: '3/29/2025', time: '14:00' },
  { sessionId: '4', sessionType: '3', date: '3/30/2025', time: '13:30' },
  { sessionId: '5', sessionType: '1', date: '3/31/2025', time: '13:00' },
  { sessionId: '6', sessionType: '1', date: '4/01/2025', time: '15:00' },
];

const trainerMenu = {
  "1": {
    name: "Alex",
    title: "Managing Director",
    qualifications: ['Level 3 Personal Trainer', 'Level 3 Nutrition', 'Level 3 Sports Massage',],
    image: images.Alex,
    description: "Alex specialises in the holistic side of health and wellness. His passion comes from longevity and sustainability and has made it his life’s mission to help and educate as many people as possible to create a lifestyle that lasts!"
  },
  "2": {
    name: "Levi",
    title: "Managing Director",
    qualifications: ['Level 3 Personal Trainer', 'Level 4 Nutrition', 'BSc Sports & Exercise Science', 'MSc Strength & Conditioning'],
    image: images.Levi,
    description: "My main areas of interest include improving performance and physical appearance. Also, helping members break their unhealthy habits by working out a plan that best suits them. The daily check ins allow for constant accountability and a trust to be built like no other where members can be honest knowing we will do everything we possibly can to support them."
  },
  "3": {
    name: "Seamus",
    title: "General Manager",
    qualifications: ['Level 3 Personal Trainer', 'Level 1 PFCA Functional Fitness Coach', 'Level 3 Sports Massage', 'BA(Hons) Sports Development with Business', 'Ma Sports Business Management'],
    image: images.Seamus,
    description: "Affectionately known as 'The Sherriff', Seamus has 10 years of experience working in and around the fitness industry, private healthcare and corporate wellbeing. He is a regular competitor in fitness events such as HYROX, ATHX and he enjoys a Half Marathon from time to time. With a keen interest in performance focused training and nutrition, he adds a different dynamic to the Limitless team."
  },
  "4": {
    name: "Sam",
    title: "Personal Trainer",
    qualifications: ['Level 3 Personal Trainer'],
    image: images.Sam,
    description: "Sam's goal when training members is to make sure that they leave with a smile on their face. There's nothing worse than seeing Personal Trainers unmotivated and the unwillingness to care about their 'clients'. Sam is known as the 'motivator' for a reason. He makes sure to get the most out of your session."
  },
};

const BookedSessions = () => {
  return (
    <View className="px-5">
      <View className="mb-5 mt-5">
        <Text className="text-primary-200 font-rubik-semibold">Next Session</Text>
        <View key={`22`}>
          <SessionCard sessionType="1" date="3/24/2025" time="14:30" textStyle="text-sm" />
        </View>
      </View>
      <View className="mb-5">
        <Text className="text-primary-200 font-rubik-semibold">Upcoming Sessions</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dummySessions.map((item) => (
            <View key={item.sessionId} style={{ marginRight: 5 }}>
              <SessionCard sessionType={item.sessionType} date={item.date} time={item.time} textStyle="text-sm" />
            </View>
          ))}
        </ScrollView>
      </View>
      <View className="">
        <Text className="text-primary-200 font-rubik-semibold">Limitless Staff</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Object.values(trainerMenu).map((trainer) => (
            <TrainerCard key={trainer.name} trainer={trainer} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default BookedSessions;
