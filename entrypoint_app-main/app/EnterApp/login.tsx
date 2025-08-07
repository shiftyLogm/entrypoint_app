import AdvancedButton from "@/components/advanced-button";
import AdvancedInput from "@/components/advanced-input";
import BackButton from "@/components/back-button";
import MainLogoFull from "@/components/main-logo-full";
import MontserratText from "@/components/montserrat-text";
import { colors } from '@/config/theme.json';
import { MontserratFonts } from "@/enums/montserrat";
import DimensionsWindow from "@/utils/dimensions";
import { router } from "expo-router";
import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";

export default function Login() {
  const { t } = useTranslation();

  return (
    <>
      <View style={styles.contentWrapper}>
        <MainLogoFull />
        <View style={styles.loginWrapper}>
          <View style={styles.inputWrapper}>
            <MontserratText
              style={styles.inputsLabel}
              size={MontserratFonts.MONTSERRAT_700_BOLD}
            >
              {t('content:screens:login:loginEmailLabel')}
            </MontserratText>
            <AdvancedInput
              width={DimensionsWindow.widthScale(0.75)}
              placeholder={t('content:screens:login:placeholders:email')}
            />
          </View>

          <View style={styles.inputWrapper}>
            <MontserratText
              style={styles.inputsLabel}
              size={MontserratFonts.MONTSERRAT_600_SEMI_BOLD}
            >
              {t('content:screens:login:loginPasswordLabel')}
            </MontserratText>
            <AdvancedInput
              width={DimensionsWindow.widthScale(0.75)}
              placeholder={t('content:screens:login:placeholders:password')}
              password
            />
            <TouchableOpacity>
              <MontserratText
                size={MontserratFonts.MONTSERRAT_700_BOLD}
                style={styles.forgotPassword}
              >
                {t('content:screens:login:forgotPassword')}
              </MontserratText>
            </TouchableOpacity>
          </View>
        </View>
        <AdvancedButton 
          text={t('content:screens:login:buttonLogin')} 
          style={styles.loginButton} 
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
  loginWrapper: {
    backgroundColor: colors.default_gray,
    width: DimensionsWindow.widthScale(0.85),
    paddingVertical: DimensionsWindow.heightScale(0.07),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: DimensionsWindow.heightScale(0.02)
  },
  forgotPassword: {
    textDecorationLine: 'underline',
    color: colors.default_app_blue,
    textAlign: 'right',
    marginTop: DimensionsWindow.heightScale(0.01)
  },
  inputsLabel: {
    fontSize: 20
  },
  loginButton: {
    marginTop: DimensionsWindow.heightScale(0.02)
  },
  inputWrapper: {
    gap: DimensionsWindow.heightScale(0.01)
  }
});

