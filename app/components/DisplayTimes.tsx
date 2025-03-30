import { View, Text, TouchableOpacity, ScrollView, Modal, Button } from "react-native";
import React, { useState } from "react";

// Types for props
interface DisplayTimesProps {
selectedDate: string | null;
bookingId: string;
sessionTitle: string;
}

interface TimeSlots {
am: string[];
pm: string[];
waitlist: string[];
}

interface AvailableTimes {
[date: string]: {
    [trainerId: string]: TimeSlots;
};
}

const availableTimes: AvailableTimes = {
    "2025-03-29": {
        "1": {
        am: ["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"],
        pm: ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"],
        waitlist: ["12:00 PM"],
        },
        "2": {
        am: ["9:00 AM", "10:00 AM"],
        pm: ["2:00 PM", "3:00 PM", "4:00 PM"],
        waitlist: [],
        },
        "3": {
        am: ["7:00 AM", "8:00 AM"],
        pm: ["3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"],
        waitlist: ["1:00 PM"],
        },
        "4": {
        am: ["7:00 AM", "10:00 AM", "11:00 AM"],
        pm: ["1:00 PM", "2:00 PM", "3:00 PM", "5:00 PM", "6:00 PM"],
        waitlist: [],
        },
    },
    "2025-03-30": {
        "1": {
        am: ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM"],
        pm: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"],
        waitlist: ["10:00 AM"],
        },
        "2": {
        am: ["7:00 AM", "8:00 AM"],
        pm: ["4:00 PM", "5:00 PM"],
        waitlist: [],
        },
    },
    "2025-03-31": {
        "3": {
        am: ["6:30 AM", "7:30 AM", "8:30 AM"],
        pm: ["12:30 PM", "1:30 PM", "3:30 PM"],
        waitlist: ["10:30 AM"],
        },
    },
    "2025-04-01": {
        "1": {
        am: ["6:00 AM", "7:00 AM", "9:00 AM"],
        pm: ["2:00 PM", "3:00 PM", "5:00 PM"],
        waitlist: ["11:00 AM"],
        },
        "4": {
        am: ["8:00 AM", "10:00 AM"],
        pm: ["3:00 PM", "4:00 PM", "6:00 PM"],
        waitlist: ["12:00 PM"],
        },
    },
    "2025-04-02": {
        "2": {
        am: ["7:00 AM", "8:00 AM", "10:00 AM"],
        pm: ["1:00 PM", "3:00 PM", "5:00 PM"],
        waitlist: ["9:00 AM"],
        },
    },
    "2025-04-03": {
        "3": {
        am: ["6:30 AM", "7:30 AM", "9:30 AM"],
        pm: ["12:30 PM", "2:30 PM", "4:30 PM"],
        waitlist: ["11:30 AM"],
        },
        "4": {
        am: ["7:00 AM", "8:30 AM"],
        pm: ["1:30 PM", "3:30 PM", "5:30 PM"],
        waitlist: ["9:00 AM"],
        },
    },
};

const DisplayTimes: React.FC<DisplayTimesProps> = ({ selectedDate, bookingId, sessionTitle }) => {
const [modalVisible, setModalVisible] = useState(false);
const [selectedTime, setSelectedTime] = useState<string | null>(null);

// Get available times for the selected date and bookingId (trainerId)
const times = selectedDate && availableTimes[selectedDate] ? availableTimes[selectedDate][bookingId] : null;

// Handle time selection
const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setModalVisible(true); // Open modal
};

return (
    <View className="px-5">
    <Text className="text-lg font-semibold mt-4">{selectedDate ? 'Available Times' : ''}</Text>

    {/* Render available times */}
    {times ? (
        <>
        {/* Morning */}
        <Text className="text-md mt-2 font-medium">Morning:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2">
            {times.am.map((time, index) => (
            <TouchableOpacity
                key={index}
                className="bg-blue-500 px-4 py-2 rounded-full mr-3"
                onPress={() => handleTimeSelect(time)} // Open modal with selected time
            >
                <Text className="text-white">{time}</Text>
            </TouchableOpacity>
            ))}
        </ScrollView>

        {/* Afternoon */}
        <Text className="text-md mt-4 font-medium">Afternoon:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2">
            {times.pm.map((time, index) => (
            <TouchableOpacity
                key={index}
                className="bg-blue-500 px-4 py-2 rounded-full mr-3"
                onPress={() => handleTimeSelect(time)} // Open modal with selected time
            >
                <Text className="text-white">{time}</Text>
            </TouchableOpacity>
            ))}
        </ScrollView>

        {/* Waitlist */}
        {times.waitlist.length > 0 && (
            <>
            <Text className="text-md mt-4 font-medium">Waitlist:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2">
                {times.waitlist.map((time, index) => (
                <TouchableOpacity
                    key={index}
                    className="bg-blue-500 px-4 py-2 rounded-full mr-3"
                    onPress={() => handleTimeSelect(time)} // Open modal with selected time
                >
                    <Text className="text-white">{time}</Text>
                </TouchableOpacity>
                ))}
            </ScrollView>
            </>
        )}
        </>
    ) : (
        <Text className="text-md text-gray-500 mt-2">{selectedDate ? 'No available times for this date.' : ''}</Text>
    )}

    {/* Modal for session details */}
    <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
    >
        <View className="flex-1 justify-center items-center bg-gray-500 bg-opacity-50">
        <View className="bg-white p-6 rounded-lg w-80">
            <Text className="text-lg font-semibold">Session Details</Text>
            <Text className="mt-4">Session: {sessionTitle}</Text>
            <Text className="mt-2">Date: {selectedDate}</Text>
            <Text className="mt-2">Time: {selectedTime}</Text>

            <View className="flex flex-row justify-between mt-6">
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
            <Button title="Book" onPress={() => {
                // Handle booking logic here
                console.log("Booking the session...");
                setModalVisible(false); // Close modal after booking
            }} />
            </View>
        </View>
        </View>
    </Modal>
    </View>
);
};

export default DisplayTimes;
