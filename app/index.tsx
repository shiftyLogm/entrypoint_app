import { router } from "expo-router";
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from "react-i18next";
import MontserratText from "@/components/montserrat-text";
import { View, StyleSheet, Image } from "react-native";
import { colors } from '@/config/theme.json';
import AdvancedButton from "@/components/advanced-button";
import DimensionsWindow from "@/utils/dimensions";
import MainLogoFull from "@/components/main-logo-full";
import { MontserratFonts } from "@/enums/montserrat";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Index() {
  const { t } = useTranslation();
  const buttonsWidth: number = DimensionsWindow.widthScale(0.75);

  const loginIcon: React.JSX.Element = useMemo(
    () => <Ionicons name="log-in-outline" size={24} color={colors.default_white} />, []
  );

  const registerIcon: React.JSX.Element = useMemo(
    () => <FontAwesome name="user-circle-o" size={24} color={colors.default_app_blue} />, []
  );

  return (
    <>

      {/* Background Image */}
      <Image source={require('@/assets/images/backgroundOnBoarding.png')} style={styles.background} />

      <View style={styles.buttons}>

        <MainLogoFull />

      <View>
        <MontserratText size={MontserratFonts.MONTSERRAT_700_BOLD} style={{ fontSize: 22, textAlign: 'center' }}>
          {t('content:screens:onBoarding:title')}
        </MontserratText>
        <MontserratText size={MontserratFonts.MONTSERRAT_500_MEDIUM} style={{ fontSize: 16, textAlign: 'center' }}>
          {t('content:screens:onBoarding:subTitle')}
        </MontserratText>
      </View>

        <AdvancedButton
          width={buttonsWidth}
          text={t('content:screens:onBoarding:login')}
          color={colors.default_app_blue}
          borderRadius={10}
          onPress={() => router.push('/EnterApp/login')}
          icon={loginIcon}
        />

        <AdvancedButton
          width={buttonsWidth}
          text={t('content:screens:onBoarding:register')}
          color={colors.default_register_button_color}
          borderRadius={10}
          borderColor={colors.default_app_blue}
          borderWidth={2}
          textColor={colors.default_app_blue}
          onPress={() => router.push('/EnterApp/register')}
          icon={registerIcon}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: DimensionsWindow.widthScale(1),
    height: DimensionsWindow.heightScale(1),
    resizeMode: 'cover'
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: DimensionsWindow.heightScale(0.2),
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: DimensionsWindow.heightScale(0.02)
  },
});