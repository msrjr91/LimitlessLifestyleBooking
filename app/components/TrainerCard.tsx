import { View, Text, ImageSourcePropType, TouchableOpacity, Image, Modal, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';

interface Trainer {
  name: string;
  title: string;
  qualifications: string[];
  image: ImageSourcePropType;
  description: string;
}

const TrainerCard = ({ trainer }: { trainer: Trainer }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCardPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity onPress={handleCardPress} className="mt-2 mb-5 ">
        <View className="flex flex-col items-center bg-white shadow-sm rounded-xl mr-2 py-4 px-2">
          <Image
            source={trainer.image}
            style={{}}
            resizeMode="contain"
            className='rounded-full size-16'
          />
          <View className="mt-2 px-4 py-2 flex flex-col items-center justify-center">
            <Text className="text-xl font-rubik-bol text-orange-100">{trainer.name}</Text>
            <Text className="font-rubik-semibold text-gray-600">{trainer.title}</Text>
          </View>
          {/* <View className='flex flex-col px-4 pt-2'>
            {
                trainer.qualifications.map((qualification, index) => (
                    <Text key={index} className="mb-1">{qualification}</Text>
                ))
            }
          </View> */}
        </View>
      </TouchableOpacity>

      {/* Modal for Trainer Details */}
      {modalVisible && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={handleCloseModal}
        >
          <TouchableWithoutFeedback onPress={handleCloseModal}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Backdrop color
              }}
            >
              {/* Modal Content */}
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 20,
                  borderRadius: 8,
                  width: '80%',
                }}
              >
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    backgroundColor: 'transparent',
                  }}
                  onPress={handleCloseModal}
                >
                  <Text style={{ fontSize: 24, fontWeight: 'bold' }}>×</Text>
                </TouchableOpacity>

                <Image
                  source={trainer.image}
                  style={{
                    width: '100%',
                    height: 200,
                    borderRadius: 8,
                    marginBottom: 20,
                  }}
                  resizeMode="contain"
                />
                <Text className="font-rubik-bold text-center text-orange-100" style={{ fontSize: 22 }}>
                  {trainer.name}
                </Text>
                <Text className="text-center text-primary-100" style={{ fontSize: 18, marginBottom: 10 }}>
                  {trainer.title}
                </Text>
                <View className="px-4 py-2 mb-5">
                  {trainer.qualifications.map((qualification, index) => (
                    <Text key={index} className="text-gray-600" style={{ fontSize: 16 }}>
                    {qualification}
                    </Text>
                  ))}
                </View>
                <View className="text-sm font-rubik-light text-primary-100">
                    <Text>{trainer.description}</Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </>
  );
};

export default TrainerCard;
