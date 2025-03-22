import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className='font-bold my-10k font-rubik-extrabold text-3xl my-10'>My Schedule</Text>
      <Link href='/sign-in'>Sign In</Link>
    </View>
  );
}
