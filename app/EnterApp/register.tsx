import AdvancedButton from "@/components/advanced-button";
import AdvancedInput from "@/components/advanced-input";
import MainLogoFull from "@/components/main-logo-full";
import MontserratText from "@/components/montserrat-text";
import { colors } from '@/config/theme.json';
import { MontserratFonts } from "@/enums/montserrat";
import DimensionsWindow from "@/utils/dimensions";
import { router } from "expo-router";
import React from 'react';
import { useTranslation } from "react-i18next";
import {
  Image,
  StyleSheet,
  View
} from "react-native";

export default function Register() {
  const { t } = useTranslation();

  return (
    <>
      <View style={styles.contentWrapper}>
        <MainLogoFull />
        <View style={styles.cadastroWrapper}>
          <View style={styles.inputWrapper}>
            <MontserratText
              size={MontserratFonts.MONTSERRAT_600_SEMI_BOLD}
              style={styles.inputsLabel}
            >
              {t('content:screens:register:registerNameLabel')}
            </MontserratText>
            <AdvancedInput
              width={DimensionsWindow.widthScale(0.75)}
              placeholder={t('content:screens:register:placeholders:name')}
            />
          </View>

          <View style={styles.inputWrapper}>
            <MontserratText
              style={styles.inputsLabel}
              size={MontserratFonts.MONTSERRAT_600_SEMI_BOLD}
            >
              {t('content:screens:register:registerEmailLabel')}
            </MontserratText>
            <AdvancedInput
              width={DimensionsWindow.widthScale(0.75)}
              placeholder={t('content:screens:register:placeholders:email')}
            />
          </View>

          <View style={styles.inputWrapper}>
            <MontserratText
              style={styles.inputsLabel}
              size={MontserratFonts.MONTSERRAT_600_SEMI_BOLD}
            >
              {t('content:screens:register:registerPasswordLabel')}
            </MontserratText>
            <AdvancedInput
              width={DimensionsWindow.widthScale(0.75)}
              placeholder={t('content:screens:register:placeholders:password')}
              password
            />
          </View>

          <View style={styles.inputWrapper}>
            <MontserratText
              style={styles.inputsLabel}
              size={MontserratFonts.MONTSERRAT_600_SEMI_BOLD}
            >
              {t('content:screens:register:registerRepeatPasswordLabel')}
            </MontserratText>
            <AdvancedInput
              width={DimensionsWindow.widthScale(0.75)}
              placeholder={t('content:screens:register:placeholders:repeatPassword')}
              password
            />
          </View>
          
        </View>
        <AdvancedButton 
          text={t('content:screens:register:buttonRegister')} 
          style={styles.cadastroButton} 
          onPress={() => router.push('/Home')} 
          color={colors.default_app_blue}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    transform: [{ scale: 0.6 }],
    position: 'absolute',
    top: 60,
    alignSelf: 'center'
  },
  cadastroWrapper: {
    backgroundColor: colors.default_gray,
    width: DimensionsWindow.widthScale(0.85),
    paddingVertical: DimensionsWindow.heightScale(0.07),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: DimensionsWindow.heightScale(0.02)
  },
  inputsLabel: {
    fontSize: 20
  },
  cadastroButton: {
    marginTop: DimensionsWindow.heightScale(0.02)
  },
  inputWrapper: {
    gap: DimensionsWindow.heightScale(0.01)
  }
});
