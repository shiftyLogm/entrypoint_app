import DimensionsWindow from "@/utils/dimensions";
import { 
    ColorValue, 
    DimensionValue, 
    TouchableOpacity, 
    StyleSheet,
    Text,
    ViewStyle,
    TouchableOpacityProps,
    TextStyle
} from "react-native";
import { colors } from '@/config/theme.json'
import MontserratText from "./montserrat-text";
import { MontserratFonts } from "@/enums/montserrat";

interface IAdvancedButton extends TouchableOpacityProps {
    color?: ColorValue,
    width?: DimensionValue,
    height?: DimensionValue
    disableOpacity?: boolean,
    opacityValue?: number,
    text?: string,
    textButtonFontFamily?: MontserratFonts,
    textColor?: ColorValue,
    textFontSize?: number,
    borderColor?: ColorValue,
    borderRadius?: number,
    borderWidth?: number,
    icon?: React.ReactNode,
}

const AdvancedButton = ({
    color,
    width,
    height,
    disableOpacity,
    opacityValue,
    onPress,
    text,
    textButtonFontFamily,
    textColor,
    textFontSize,
    borderColor,
    borderRadius,
    borderWidth,
    icon,
    ...props
}: IAdvancedButton) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={disableOpacity ? 0 : opacityValue}
            style={[button(color, width, height, borderColor, borderRadius, borderWidth), props.style]}
        >
            <MontserratText 
                size={textButtonFontFamily ||  MontserratFonts.MONTSERRAT_600_SEMI_BOLD}
                style={textStyle(textColor, textFontSize)}
            >
                {text}
            </MontserratText>
            {icon}
        </TouchableOpacity>
    )
}

const button = (
    color?: ColorValue,
    width?: DimensionValue,
    height?: DimensionValue,
    borderColor?: ColorValue,
    borderRadius?: number,
    borderWidth?: number
): ViewStyle => ({
    width: width || DimensionsWindow.widthScale(0.45),
    height: height || DimensionsWindow.heightScale(0.07),
    backgroundColor: color || colors.default_app_blue_secondary,
    borderRadius: borderRadius || 15,
    justifyContent: 'center',
    alignItems: 'center',
    ...(borderColor ? { borderColor } : {}),
    ...(borderWidth ? { borderWidth } : {}),
    flexDirection: 'row',
    gap: DimensionsWindow.widthScale(0.02),
})

const textStyle = (
    color?: ColorValue,
    fontSize?: number,
): TextStyle => ({
    color: color || colors.default_white,
    fontSize: fontSize || 20,
})

export default AdvancedButton;