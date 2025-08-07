import { Image, ImageProps } from "react-native";

interface IMainLogoFull extends ImageProps {
    size?: 'small' | 'medium' | 'big',
}

const MainLogoSizeValues: Record<string, number> = {
    'small' : 0.3,
    'medium' : 0.6,
    'big' : 0.9
}

const MainLogoFull = ({ size, ...props }: IMainLogoFull) => {

    const logoImage = require('@/assets/images/main_logo_full.png')

    return (
        <Image 
            source={logoImage} 
            style={{
                transform: [{ scale: MainLogoSizeValues[size || 'medium'] }],
            }}
        />
    )

}

export default MainLogoFull;