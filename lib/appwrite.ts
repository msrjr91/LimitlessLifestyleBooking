import { Client, Avatars, Account, OAuthProvider } from "react-native-appwrite";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

export const config = {
    platform: 'com.limitlesslifestylecommunity.LimitlessBookingSystem', 
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client = new Client();

console.log("Endpoint:", config.endpoint);
console.log("Project ID:", config.projectId);
console.log("Platform:", config.platform);


client
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    .setPlatform(config.platform!)

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login() {
    try {
        const redirectUri = Linking.createURL('/');
        
        console.log("Generated redirect URI:", redirectUri);

        const response = await account.createOAuth2Token(
            OAuthProvider.Google, 
            redirectUri
        );

        console.log("OAuth response:", response);

        if (!response) throw new Error('Failed to get OAuth token');

        const browserResult = await WebBrowser.openAuthSessionAsync(
            response.toString(),
            redirectUri,
        );

        console.log("Browser result:", browserResult);

        if (browserResult.type !== 'success') throw new Error('Failed to login');

        const url = new URL(browserResult.url);
        const secret = url.searchParams.get('secret')?.toString();
        const userId = url.searchParams.get('userId')?.toString();

        if (!secret || !userId) throw new Error('Missing secret or userId');

        const session = await account.createSession(userId, secret);

        console.log("Session created:", session);

        return true;

    } catch (error) {
        console.error("Login error:", error);
        return false;
    }
}

export async function logout() {
    try {
        await account.deleteSession('current');
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function getUser() {
    try {
        const response = await account.get();

        if(response.$id) {
            const userAvatar = avatar.getInitials(response.name);
            return {
                ...response,
                avatar: userAvatar.toString(),
            }
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}