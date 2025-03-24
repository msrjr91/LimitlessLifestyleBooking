import { Image, Text, View, Dimensions, TouchableOpacity, Pressable } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import images from "@/constants/images";
import icons from "@/constants/icons";
import BookedSessions from "@/app/pages/booked-sessions";

const { width } = Dimensions.get("window");

export default function Index() {
  const tabBarHeight = useBottomTabBarHeight();
  const [signedIn, setSignedIn] = useState(true);

  const BookedEvents = () => <Text>Booked Events</Text>;

  interface HomeItem {
    id: string;
    title: string;
  }

  const homeItems: HomeItem[] = [
    { id: "1", title: "My Sessions" },
    { id: "2", title: "My Events" },
  ];

  const [homeSelection, setHomeSelection] = useState<string>("1"); 

  const handlePress = (id: string) => {
    setHomeSelection(id);
  };

  const renderHomeContent = () => {
    switch (homeSelection) {
      case "1":
        return <BookedSessions />;
      case "2":
        return <BookedEvents />;
      default:
        return <Text>Select an option</Text>;
    }
  };

  return (
    <SafeAreaView className="bg-white">
      {signedIn ? (
        <View className="">
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

          {/* Navigation */}
          <View className="flex flex-row mt-2">
            {homeItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="py-2 w-1/2"
                onPress={() => handlePress(item.id)}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  className={`text-primary-200 ${
                    homeSelection === item.id
                      ? "font-rubik-bold"
                      : "font-rubik-light"
                  }`}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* Underline Indicator */}
          <View className="relative h-[2px] bg-primary-100 mt-2">
            <View
              className="absolute h-[2px] bg-orange-100 rounded-full"
              style={{
                width: width * 0.5, 
                left: homeItems.findIndex((item) => item.id === homeSelection) * (width * 0.5),
              }}
            />
          </View>

          {/* Content */}
          <View className="mt-2" style={{ paddingBottom: tabBarHeight }}>
            {renderHomeContent()}
          </View>
        </View>
      ) : (
        <Text>You are not signed in</Text>
      )}
    </SafeAreaView>
  );
}
