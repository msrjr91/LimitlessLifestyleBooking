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
      <Text className='font-bold my-10k font-rubik text-3xl my-10'>Welcome to Limitless</Text>
      <Link href='/sign-in'>Sign In</Link>
      <Link href='/booking'>Book Session</Link>
      <Link href='/sessions'>My Sessions</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/properties/1'>Properties</Link>
    </View>
  );
}
