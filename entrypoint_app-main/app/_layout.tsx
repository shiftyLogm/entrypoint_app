import i18n from "@/lang/config";
import { Montserrat_100Thin } from '@expo-google-fonts/montserrat/100Thin';
import { Montserrat_100Thin_Italic } from '@expo-google-fonts/montserrat/100Thin_Italic';
import { Montserrat_200ExtraLight } from '@expo-google-fonts/montserrat/200ExtraLight';
import { Montserrat_200ExtraLight_Italic } from '@expo-google-fonts/montserrat/200ExtraLight_Italic';
import { Montserrat_300Light } from '@expo-google-fonts/montserrat/300Light';
import { Montserrat_300Light_Italic } from '@expo-google-fonts/montserrat/300Light_Italic';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat/400Regular';
import { Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat/400Regular_Italic';
import { Montserrat_500Medium } from '@expo-google-fonts/montserrat/500Medium';
import { Montserrat_500Medium_Italic } from '@expo-google-fonts/montserrat/500Medium_Italic';
import { Montserrat_600SemiBold } from '@expo-google-fonts/montserrat/600SemiBold';
import { Montserrat_600SemiBold_Italic } from '@expo-google-fonts/montserrat/600SemiBold_Italic';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat/700Bold';
import { Montserrat_700Bold_Italic } from '@expo-google-fonts/montserrat/700Bold_Italic';
import { Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat/800ExtraBold';
import { Montserrat_800ExtraBold_Italic } from '@expo-google-fonts/montserrat/800ExtraBold_Italic';
import { Montserrat_900Black } from '@expo-google-fonts/montserrat/900Black';
import { Montserrat_900Black_Italic } from '@expo-google-fonts/montserrat/900Black_Italic';
import { useFonts } from '@expo-google-fonts/montserrat/useFonts';
import { Stack, usePathname } from "expo-router";
import React, { useCallback } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from '@/config/theme.json';
import * as SplashScreen from 'expo-splash-screen';

// Necessário a atribuição para o funcionamento do i18n
const initI18n = i18n

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return <></>

  return (
    <SafeAreaView
      onLayout={onLayoutRootView}
      style={{ flex: 1, backgroundColor: colors.default_app_blue }}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaView>
  )

}
