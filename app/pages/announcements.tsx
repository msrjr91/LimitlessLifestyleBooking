import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import icons from '@/constants/icons';
import images from '@/constants/images';

// Define the Announcement type
interface Announcement {
  announcementId: string;
  dateTime: string;
  trainerId: string;
  trainerName: string;
  announcement: string;
}

// Correctly type the allAnnouncements object
const allAnnouncements: Record<string, Announcement> = {
    "1": {
      announcementId: "1",
      dateTime: "2025-04-01T10:00:00Z",
      trainerId: "101",
      trainerName: "John Doe",
      announcement: "Reminder: The gym will be closed for maintenance this Friday from 8 AM to 12 PM."
    },
    "2": {
      announcementId: "2",
      dateTime: "2025-04-02T15:30:00Z",
      trainerId: "102",
      trainerName: "Sarah Smith",
      announcement: "New yoga classes are starting next Monday at 7 AM. Sign up at the front desk!"
    },
    "3": {
      announcementId: "3",
      dateTime: "2025-04-03T12:00:00Z",
      trainerId: "103",
      trainerName: "Michael Johnson",
      announcement: "Don't forget to register for the upcoming boot camp challenge! Limited spots available."
    },
    "4": {
      announcementId: "4",
      dateTime: "2025-04-04T18:45:00Z",
      trainerId: "104",
      trainerName: "Emily Davis",
      announcement: "Join our nutrition workshop this Saturday at 10 AM to learn more about meal planning!"
    },
    "5": {
      announcementId: "5",
      dateTime: "2025-04-05T14:00:00Z",
      trainerId: "105",
      trainerName: "Daniel Lee",
      announcement: "Spinning class has been moved to Room B due to maintenance in the main hall."
    },
    "6": {
      announcementId: "6",
      dateTime: "2025-04-06T09:30:00Z",
      trainerId: "106",
      trainerName: "Jessica Taylor",
      announcement: "Early bird discounts for the summer fitness camp end this Friday! Sign up now!"
    },
    "7": {
      announcementId: "7",
      dateTime: "2025-04-07T16:00:00Z",
      trainerId: "107",
      trainerName: "David Brown",
      announcement: "New boxing classes are now available! Check the schedule for available slots."
    },
    "8": {
      announcementId: "8",
      dateTime: "2025-04-08T11:15:00Z",
      trainerId: "108",
      trainerName: "Sophia Martinez",
      announcement: "Reminder: Personal training slots are filling up quickly. Book your session soon!"
    },
    "9": {
      announcementId: "9",
      dateTime: "2025-04-09T17:45:00Z",
      trainerId: "109",
      trainerName: "Ethan Wilson",
      announcement: "The sauna will be closed for maintenance on Friday. Sorry for the inconvenience!"
    },
    "10": {
      announcementId: "10",
      dateTime: "2025-04-10T13:00:00Z",
      trainerId: "110",
      trainerName: "Olivia Anderson",
      announcement: "Special Zumba event this Saturday at 4 PM! Come dance and have fun!"
    },
    "11": {
      announcementId: "11",
      dateTime: "2025-04-11T08:30:00Z",
      trainerId: "111",
      trainerName: "Matthew Harris",
      announcement: "Weightlifting room will be reserved for a workshop from 1 PM to 3 PM tomorrow."
    },
    "12": {
      announcementId: "12",
      dateTime: "2025-04-12T19:20:00Z",
      trainerId: "112",
      trainerName: "Emma Scott",
      announcement: "Bring a friend for free this Sunday! Limited to one guest per member."
    },
    "13": {
      announcementId: "13",
      dateTime: "2025-04-13T10:00:00Z",
      trainerId: "113",
      trainerName: "Liam Johnson",
      announcement: "Join our new HIIT challenge! Burn calories and improve endurance in just 4 weeks."
    },
    "14": {
      announcementId: "14",
      dateTime: "2025-04-14T16:45:00Z",
      trainerId: "114",
      trainerName: "Ava White",
      announcement: "Reminder: Pool will be closed for cleaning on Monday from 6 AM to 9 AM."
    },
    "15": {
      announcementId: "15",
      dateTime: "2025-04-15T07:45:00Z",
      trainerId: "115",
      trainerName: "Noah Carter",
      announcement: "New cycling endurance challenge! Sign up at the front desk today."
    },
    "16": {
      announcementId: "16",
      dateTime: "2025-04-16T20:10:00Z",
      trainerId: "116",
      trainerName: "Isabella Rivera",
      announcement: "Pilates classes are now available on Wednesdays at 6 PM!"
    },
    "17": {
      announcementId: "17",
      dateTime: "2025-04-17T12:45:00Z",
      trainerId: "117",
      trainerName: "William Bennett",
      announcement: "Reminder: The gym will open one hour later this Saturday due to a private event."
    },
    "18": {
      announcementId: "18",
      dateTime: "2025-04-18T09:00:00Z",
      trainerId: "118",
      trainerName: "Charlotte Hughes",
      announcement: "Bootcamp session is scheduled for this Sunday at 8 AM. Get ready for an intense workout!"
    },
    "19": {
      announcementId: "19",
      dateTime: "2025-04-19T18:30:00Z",
      trainerId: "119",
      trainerName: "Mason Hall",
      announcement: "Reminder: Free nutrition consultation for members this Thursday from 2 PM to 5 PM."
    },
    "20": {
      announcementId: "20",
      dateTime: "2025-04-20T14:15:00Z",
      trainerId: "120",
      trainerName: "Amelia Clark",
      announcement: "Yoga and meditation workshop this Saturday at 10 AM. Reserve your spot now!"
    }
  };
  

const Announcements: React.FC = () => {
  return (
    <ScrollView className="bg-white h-[90%]">
      {Object.values(allAnnouncements)
        .sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()) // Ensure correct sorting
        .map((announcement) => (
          <View key={announcement.announcementId} className="flex-row p-4 border-b border-gray-300">
            {/* Avatar */}
            <Image source={images.avatar} className="w-10 h-10 rounded-full mr-3" />
            
            {/* Announcement Details */}
            <View className="flex-1">
              {/* Trainer Name & Date */}
              <View className="flex-row justify-between">
                <Text className="font-bold text-gray-900">{announcement.trainerName}</Text>
                <Text className="text-gray-500 text-xs">{new Date(announcement.dateTime).toDateString()}</Text>
              </View>

              {/* Announcement Text */}
              <Text className="text-gray-800 mt-1">{announcement.announcement}</Text>

              {/* Action Buttons */}
              <View className="flex-row justify-end mt-2 space-x-4">
                <TouchableOpacity>
                  <Image source={icons.heart} className="w-6 h-6" style={{ tintColor: '#0D2031' }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};

export default Announcements;
