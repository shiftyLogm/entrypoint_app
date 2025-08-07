import MontserratText from "@/components/montserrat-text";
import { colors } from '@/config/theme.json';
import { profileOptions } from "@/constants/profileOptions";
import { MontserratFonts } from "@/enums/montserrat";
import DimensionsWindow from "@/utils/dimensions";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useTranslation } from "react-i18next";
import { ColorValue, StyleSheet, TextStyle, TouchableOpacity, View } from "react-native";


export default function Profile() {
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.profileInfos}>
        <FontAwesome name="user-circle-o" size={120} color={colors.default_app_blue} />
        <View>
          <MontserratText size={MontserratFonts.MONTSERRAT_700_BOLD} style={{ fontSize: DimensionsWindow.widthScale(0.05) }}>
            Lucas Gabriel Queiroz
          </MontserratText>
          <MontserratText size={MontserratFonts.MONTSERRAT_500_MEDIUM} style={{ fontSize: DimensionsWindow.widthScale(0.04) }}>
            lucasqz7553@gmail.com
          </MontserratText>
          <MontserratText size={MontserratFonts.MONTSERRAT_500_MEDIUM} style={{ fontSize: DimensionsWindow.widthScale(0.04) }}>
            (+55) 11 99999-9999
          </MontserratText>
        </View>
      </View>
      <View style={styles.optionContainer}>
        {
          Object.keys(profileOptions).map((key) => (
            <TouchableOpacity
              key={key}
              onPress={profileOptions[key].onPress}
              style={styles.optionWrapper}
            >
              {profileOptions[key].icon}
              <MontserratText
                size={MontserratFonts.MONTSERRAT_600_SEMI_BOLD}
                style={textOption(profileOptions[key].color)}
              >
                {t(profileOptions[key].title)}
              </MontserratText>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileInfos: {
    flexDirection: 'row',
    paddingTop: DimensionsWindow.heightScale(0.1),
    paddingHorizontal: DimensionsWindow.widthScale(0.05),
    alignItems: 'center',
    gap: DimensionsWindow.widthScale(0.04),
  },
  optionContainer: {
    flex: 1,
    paddingHorizontal: DimensionsWindow.widthScale(0.05),
    paddingVertical: DimensionsWindow.heightScale(0.02),
  },
  optionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: DimensionsWindow.heightScale(0.02),
    paddingHorizontal: DimensionsWindow.widthScale(0.06),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.default_gray,
    gap: DimensionsWindow.widthScale(0.03),
  },
});

const textOption = (color?: ColorValue): TextStyle => ({
  ...(color ? { color } : {}),
  fontSize: DimensionsWindow.widthScale(0.05),
  flex: 1,
});