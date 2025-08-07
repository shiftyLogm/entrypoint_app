import { MontserratFonts } from "@/enums/montserrat"
import { Text, TextProps } from "react-native"

interface IMontserratText extends TextProps {
    size?: MontserratFonts,
}


const MontserratText = ({ size, ...props }: IMontserratText) => {
    return (
        <Text
            {...props}
            style={[{ fontFamily: size || MontserratFonts.MONTSERRAT_400_REGULAR }, props.style]}
        >
            {props.children}
        </Text>
    )
}

export default MontserratText;