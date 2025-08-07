import { useState } from "react"
import { 
    ColorValue, 
    DimensionValue, 
    StyleSheet, 
    TextInput, 
    TextInputProps, 
    TextStyle, 
    TouchableOpacity, 
    View
} from "react-native"
import { colors } from '@/config/theme.json'
import { MontserratFonts } from "@/enums/montserrat"
import { FontAwesome } from '@expo/vector-icons'
import { TextInputMask, TextInputMaskTypeProp } from 'react-native-masked-text'

interface IAdvancedInput extends TextInputProps {
    width?: DimensionValue,
    height?: DimensionValue,
    password?: boolean,
    passwordIconColor?: ColorValue,
    inputFontFamily?: MontserratFonts | string,
    maskType?: TextInputMaskTypeProp
}

const AdvancedInput = ({
    width,
    height,
    value,
    password,
    passwordIconColor,
    placeholder,
    inputFontFamily,
    placeholderTextColor,
    onChangeText,
    maskType,
    ...props
}: IAdvancedInput) => {

    const [showPassword, setShowPassowrd] = useState<boolean>(password ? false : true)

    // ...existing code...
    return (
        <View style={[styles.inputContainer, { width, height }]}>
            {maskType ? (
                <TextInputMask
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor || colors.default_placeholder_color}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    onChangeText={onChangeText}
                    style={[textInput(inputFontFamily), props.style]}
                    {...props}
                    type={maskType}
                />
            ) : (
                <TextInput
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor || colors.default_placeholder_color}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    onChangeText={onChangeText}
                    style={[textInput(inputFontFamily), props.style]}
                    {...props}
                />
            )}
            {password &&
                <TouchableOpacity
                    onPress={() => setShowPassowrd(!showPassword)}
                >
                    <FontAwesome
                        name={!showPassword ? 'eye' : 'eye-slash'}
                        size={20}
                        color={passwordIconColor || colors.default_app_blue}
                    />
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.default_white,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    iconContainer: {
        paddingHorizontal: 8,
    },
});

const textInput = (
    placeholderFontFamily?: MontserratFonts | any,
): TextStyle => ({
    flex: 1,
    backgroundColor: colors.default_white,
    fontFamily: placeholderFontFamily || MontserratFonts.MONTSERRAT_600_SEMI_BOLD
})

export default AdvancedInput;