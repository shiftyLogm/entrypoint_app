import { router } from "expo-router"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import { ColorValue } from "react-native";
import { colors } from '@/config/theme.json';

type ProfileOption = {
    title: string;
    onPress: () => void;
    icon: React.ReactNode;
    color?: ColorValue;
}

export const profileOptions: Record<string, ProfileOption> = {

    editProfile: {
        title: "content:screens:profile:profileOptions:editProfile",
        onPress: () => router.push('/Profile/editProfile'),
        icon: <MaterialCommunityIcons name="account-edit-outline" size={24} color="black" />
    },

    favorites: {
        title: "content:screens:profile:profileOptions:favorites",
        onPress: () => router.push('/'),
        icon: <MaterialCommunityIcons name="heart-outline" size={24} color="black" />
    },

    credits: {
        title: "content:screens:profile:profileOptions:credits",
        onPress: () => router.push('/Credits'),
        icon: <Feather name="info" size={24} color="black" />
    },

    logout: {
        title: "content:screens:profile:profileOptions:logout",
        onPress: () => router.push('/'),
        icon: <MaterialCommunityIcons name="logout" size={24} color="black" />
    },

    deleteAccount: {
        title: "content:screens:profile:profileOptions:deleteAccount",
        onPress: () => router.push('/'),
        icon: <MaterialCommunityIcons name="account-remove-outline" size={24} color={colors.default_red} />,
        color: colors.default_red
    }

}