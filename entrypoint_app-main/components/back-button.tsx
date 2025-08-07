import DimensionsWindow from '@/utils/dimensions';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Href, router } from 'expo-router';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { colors } from '@/config/theme.json';

export default function BackButton(route?: Href) {
    return (
            <TouchableOpacity
                onPress={() => route ? router.push(route) : router.back()}
            >
                <Ionicons 
                    name="arrow-back-circle-sharp" 
                    size={24} 
                    color={colors.default_app_blue} 
                />
            </TouchableOpacity>
    )
}