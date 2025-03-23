import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import images from '@/constants/images'; // Assuming images are located in this folder

interface Props {
  onPress?: () => void;
  sessionType: string;
  date: string;
  time: string;
}

const SessionCard = ({ onPress, sessionType, date, time }: Props) => {
  // Mapping of session types to corresponding images
  const sessionMenu: { [key: string]: { title: string, image: any } } = {
    "1": { title: "One-to-One", image: images.solo },  // session type 1 -> One-to-One
    "2": { title: "One-to-Two", image: images.groupSession },  // session type 2 -> One-to-Two
    "3": { title: "Massage", image: images.massage },  // session type 3 -> Massage
    "4": { title: "Nutrition Planning", image: images.nutrition },  // session type 4 -> Nutrition Planning
  };

  const sessionDetails = sessionMenu[sessionType];  // Fallback for invalid session type

  return (
    <TouchableOpacity
      onPress={onPress}
      className="mt-2 mb-5 relative w-[50%]" // added margin-bottom for spacing between cards
    >
      {/* Conditionally render the image based on sessionType */}
      <Image 
        source={sessionDetails.image}
        className="size-full absolute bottom-0 rounded-xl"
        resizeMode='cover'
      />
      <Image 
        source={images.cardGradient} 
        className='size-full absolute bottom-0 rounded-xl'
        resizeMode='cover'
      />
      <View className='py-2'>
        <View className='px-5 pt-2 pb-10'>
          <Text className="font-rubik-bold text-white">{sessionDetails.title}</Text>
        </View>
        <View className='pt-10 pb-2 px-5 flex flex-row justify-between'>
          <Text className="font-rubik-semibold text-white">{date}</Text>
          <Text className="font-rubik-semibold text-white">{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SessionCard;
