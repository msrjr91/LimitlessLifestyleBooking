import { View, Text, TouchableOpacity, Image, Modal, TouchableWithoutFeedback } from 'react-native';
import { X } from 'lucide-react-native';
import React, { useState } from 'react';
import images from '@/constants/images'; // Assuming images are located in this folder

interface Props {
  onPress?: () => void;
  sessionType: string;
  date: string;
  time: string;
  textStyle: string;
}

const SessionCard = ({ onPress, sessionType, date, time, textStyle }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const sessionMenu: { [key: string]: { title: string, image: any } } = {
    "1": { title: "One-to-One", image: images.solo },  
    "2": { title: "One-to-Two", image: images.groupSession },  
    "3": { title: "Massage", image: images.massage }, 
    "4": { title: "Nutrition Planning", image: images.nutrition },  
  };

  const sessionDetails = sessionMenu[sessionType];  

  const handleCancel = () => {
    console.log("Cancel button pressed");
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="mt-2 mb-5 relative" 
      >
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
          <View className='px-4 pt-2 pb-10 flex flex-row justify-between'>
            <Text className="text-sm font-rubik-semibold text-white rounded-xl bg-primary-100 p-1">{sessionDetails.title}</Text>
          </View>
          <View className='pt-10 pb-2 px-4 flex flex-row justify-between'>
            <Text className={`${textStyle} font-rubik-medium text-white rounded-xl bg-primary-100 p-1`}>{date}</Text>
            <Text className={`${textStyle} font-rubik-medium text-white ml-2 rounded-xl bg-primary-100 p-1`}>{time}</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View className="flex-1 justify-center items-center bg-black/50">
            <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
              <View className="w-4/5 bg-white p-5 rounded-lg">
                {/* Close Button (X) */}
                <TouchableOpacity
                  className="absolute top-2 right-2"
                  onPress={() => setModalVisible(false)}
                >
                  <X size={24} color="black" />
                </TouchableOpacity>

                <Text className="text-lg font-bold mb-2">{sessionDetails.title}</Text>
                <Text className="text-gray-600">Date: {date}</Text>
                <Text className="text-gray-600">Time: {time}</Text>

                {/* Cancel Button */}
                <TouchableOpacity
                  className="mt-4 bg-gray-300 p-2 rounded-lg items-center"
                  onPress={handleCancel}
                >
                  <Text className="text-black">Cancel</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default SessionCard;
