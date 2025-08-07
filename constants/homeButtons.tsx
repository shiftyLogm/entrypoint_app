import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { colors } from '@/config/theme.json'
import { ImageSourcePropType } from 'react-native';
import IdeaImage from '@/assets/images/ideas.jpg'

type HomeButtons = {
    title: string,
    icon: React.ReactNode,
    onPress: () => void,
    image?: ImageSourcePropType
}

export const homeButtons: Record<string, HomeButtons> = {
    ideas: {
        title: 'content:screens:home:ideas',
        icon: <FontAwesome5 name="lightbulb" size={50} color={colors.default_white}/>,
        onPress: () => router.push('/'),
        image: IdeaImage
    },
    resume: {
        title: 'content:screens:home:resume',
        icon: <MaterialCommunityIcons name="newspaper-variant-outline" size={50} color={colors.default_white} />,
        onPress: () => router.push('/')
    },
}