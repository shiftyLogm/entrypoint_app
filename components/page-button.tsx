import DimensionsWindow from "@/utils/dimensions";
import {
    ColorValue,
    TouchableOpacity,
    StyleSheet,
    TouchableOpacityProps,
    ImageSourcePropType
} from "react-native";
import MontserratText from "./montserrat-text";
import { MontserratFonts } from "@/enums/montserrat";
import { colors } from '@/config/theme.json'

interface IPageButton extends TouchableOpacityProps {
    color?: ColorValue,
    text?: string,
    image?: ImageSourcePropType,
    onPress: () => void
}

const PageButton = ({
    color,
    text,
    image,
    ...props
}: IPageButton) => {
    return (
        <TouchableOpacity
            style={styles.button}
            {...props}
        >
            <MontserratText
                size={MontserratFonts.MONTSERRAT_600_SEMI_BOLD}
                style={styles.text}
            >
                {text}
            </MontserratText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        paddingHorizontal: DimensionsWindow.widthScale(0.05),
        paddingVertical: DimensionsWindow.heightScale(0.01),
        backgroundColor: colors.default_app_blue,
        width: DimensionsWindow.widthScale(0.43),
        elevation: 10,
    },
    text: {
        fontSize: DimensionsWindow.widthScale(0.04),
        color: colors.default_white,
    }
})

export default PageButton;