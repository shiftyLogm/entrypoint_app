import DiaryCarousel from "./components/diary-carousel";
import MontserratText from "@/components/montserrat-text";
import { colors } from '@/config/theme.json';
import { DiaryCardProps } from "@/constants/carouselDiary";
import { MontserratFonts } from "@/enums/montserrat";
import DimensionsWindow from "@/utils/dimensions";
import { getGreetingByTime } from "@/utils/getGreetingByTime";
import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { getAllJobOpenings } from "@/repositories/jobOpenings/jobOpenings";
import { JobOpening } from "@/repositories/jobOpenings/type";

export default function Home() {

  const { t } = useTranslation();
  const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([]);

  // Essa requisição deve ter um limite de 3 valores -> Colocar no Query Param
  useEffect(() => {
    getAllJobOpenings()
      .then((jobOpening) => setJobOpenings(jobOpening))
  }, []);

  const diaryData: DiaryCardProps[] = [
    {
      id: 1,
      title: t('content:screens:home:diary:hint'),
      description: 'Evite apelidos ou nomes engraçados. Use seu nome real. Isso já te destaca em uma seleção e passa mais seriedade.',
      image: require('@/assets/images/idea.png')
    },
    {
      id: 2,
      title: t('content:screens:home:diary:quote'),
      description: '"Você não precisa ser perfeito para começar, mas precisa começar para se tornar excelente." — Zig Ziglar',
      image: require('@/assets/images/thinking.png')
    },
    {
      id: 3,
      title: t('content:screens:home:diary:challenge'),
      description: 'Escolha uma vaga de emprego ou estágio da sua área de interesse e escreva uma mensagem de apresentação (pitch pessoal) de no máximo 3 linhas, destacando seus pontos fortes.',
      image: require('@/assets/images/fast-working.png')
    },
  ]

  const [greeting, setGreeting] = useState<string>('Hello');

  useEffect(() => {
    const hours: number = new Date().getHours();
    const currentGreeting = getGreetingByTime(hours);
    setGreeting(currentGreeting!);
  }, []);

  return (
    <View style={{ flex: 1 }}>

      <View style={styles.header}>
        <FontAwesome name="heart" size={27} color={colors.default_app_blue} />
        <TouchableOpacity onPress={() => router.push('/Profile')}>
          <FontAwesome name="user-circle-o" size={27} color={colors.default_app_blue} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.container}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: DimensionsWindow.heightScale(0.1) }}
      >
        <View style={styles.headerContent}>
          <View>
            <MontserratText
              style={styles.greeting}
              size={MontserratFonts.MONTSERRAT_700_BOLD}
            >
              {t(greeting)}, Lucas!
            </MontserratText>
            <MontserratText
              style={styles.greetingDescription}
              size={MontserratFonts.MONTSERRAT_500_MEDIUM}
            >
              O que vamos ver hoje?
            </MontserratText>
          </View>
          <Image
            source={require('@/assets/images/social-media.png')}
            style={styles.greetingImage}
          />
        </View>

        <View style={styles.mainContent}>
          <DiaryCarousel data={diaryData} />

          <View>
            <Image
              source={require('@/assets/images/job-interview.png')}
              style={styles.ideaImage}
            />
            <TouchableOpacity
              onPress={() => router.push('/Ideas')}
            >
              <LinearGradient
                colors={[colors.default_app_blue, colors.final_gradient]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.ideaButton}
              >
                <MontserratText
                  size={MontserratFonts.MONTSERRAT_500_MEDIUM}
                  style={styles.ideaText}
                >
                  {t('content:screens:home:ideas')}
                </MontserratText>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <FontAwesome5 name="lightbulb" size={30} color={colors.default_white} />
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => router.push('/Resume')}
          >
            <LinearGradient
              colors={[colors.default_white, colors.final_gradient]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.resumeButton}
            >
              <MontserratText
                size={MontserratFonts.MONTSERRAT_500_MEDIUM}
                style={styles.resumeText}
              >
                {t('content:screens:home:resume')}
              </MontserratText>
              <Image
                source={require('@/assets/images/note-taking.png')}
                style={styles.resumeImage}
              />
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.jobs}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
              <MontserratText style={styles.sectionTitle}>
                {t('content:screens:home:jobOpenings')}
              </MontserratText>
              <Image
                source={require('@/assets/images/boss.png')}
                style={styles.jobOpeningsImage}
              />
            </View>

          <View style={{ gap: DimensionsWindow.heightScale(0.02) }}>
            {jobOpenings.map((jobOpening) => (
              <TouchableOpacity style={styles.jobCard}
                onPress={() => {
                  router.push({
                    pathname: '/JobOpenings/jobOpeningDetails',
                    params: { id: jobOpening.id }
                  })
                }}
              >
                <Image
                  source={{ uri: jobOpening.image }}
                  style={styles.companyPhoto}
                />
                <View style={styles.jobInfo}>
                  <MontserratText
                    size={MontserratFonts.MONTSERRAT_600_SEMI_BOLD}
                    style={styles.jobTitle}
                    numberOfLines={2}
                  >
                    {jobOpening.job_title}
                  </MontserratText>

                  <View style={styles.companyContainer}>
                    <MaterialIcons
                      name="business"
                      size={16}
                      style={styles.companyIcon}
                    />
                    <MontserratText
                      size={MontserratFonts.MONTSERRAT_500_MEDIUM}
                      style={styles.companyName}
                    >
                      {jobOpening.company_name}
                    </MontserratText>
                  </View>

                  <View style={styles.locationContainer}>
                    <FontAwesome name="map-marker" size={14} />
                    <MontserratText style={styles.locationText}>
                      {jobOpening.city} - {jobOpening.uf}
                    </MontserratText>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
            </View>

            <TouchableOpacity
              style={styles.seeMoreButton}
              onPress={() => router.push('/JobOpenings')}
            >
              <MontserratText
                size={MontserratFonts.MONTSERRAT_700_BOLD}
                style={
                  {
                    color: colors.default_app_blue,
                    textDecorationLine: 'underline'
                  }
                }
              >
                {t('content:screens:home:seeMoreJobOpenings')}
              </MontserratText>
              <AntDesign name="arrowright" size={18} color={colors.default_app_blue} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.default_white,
  },
  header: {
    paddingRight: DimensionsWindow.widthScale(0.05),
    height: DimensionsWindow.heightScale(0.1),
    width: DimensionsWindow.widthScale(1),
    backgroundColor: colors.default_white,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    gap: DimensionsWindow.widthScale(0.03),
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: DimensionsWindow.widthScale(1)
  },
  mainContent: {
    backgroundColor: colors.default_white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 20,
  },
  greetingImage: {
    width: DimensionsWindow.widthScale(0.3),
    height: DimensionsWindow.heightScale(0.15)
  },

  diary: {
    marginHorizontal: DimensionsWindow.widthScale(0.05),
    height: DimensionsWindow.heightScale(0.4),
    backgroundColor: colors.default_app_blue,
    borderRadius: 10,
    paddingHorizontal: DimensionsWindow.widthScale(0.1),
    paddingVertical: DimensionsWindow.heightScale(0.03)
  },
  diaryTitle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: DimensionsWindow.widthScale(0.03),
  },
  greeting: {
    fontSize: DimensionsWindow.heightScale(0.03),
    paddingHorizontal: DimensionsWindow.widthScale(0.05),
    paddingTop: DimensionsWindow.heightScale(0.01),
  },

  greetingDescription: {
    fontSize: DimensionsWindow.heightScale(0.02),
    paddingHorizontal: DimensionsWindow.widthScale(0.05),
    marginBottom: DimensionsWindow.heightScale(0.01),
  },
  jobs: {
    paddingHorizontal: DimensionsWindow.widthScale(0.05),
    marginTop: DimensionsWindow.heightScale(0.01),
  },
  sectionTitle: {
    fontSize: DimensionsWindow.heightScale(0.022),
    marginBottom: DimensionsWindow.heightScale(0.01),
    width: '60%'
  },
  jobCard: {
    width: '100%',
    height: DimensionsWindow.heightScale(0.12),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1
  },
  companyPhoto: {
    width: DimensionsWindow.heightScale(0.1),
    height: '70%',
    resizeMode: 'contain',
    marginLeft: DimensionsWindow.widthScale(0.02)
  },
  jobInfo: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: '2%'
  },
  jobTitle: {
    fontSize: DimensionsWindow.heightScale(0.017),
    marginBottom: DimensionsWindow.heightScale(0.001),
  },
  companyName: {
    fontSize: DimensionsWindow.heightScale(0.015),
    marginBottom: DimensionsWindow.heightScale(0.001),
  },
  companyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resumeButton: {
    borderColor: colors.default_app_blue,
    borderWidth: 2,
    marginHorizontal: DimensionsWindow.widthScale(0.05),
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: DimensionsWindow.widthScale(0.05),
    marginTop: DimensionsWindow.heightScale(0.05),
    alignItems: 'center',
    elevation: 8,
  },
  companyIcon: {
    marginRight: '2%',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: DimensionsWindow.heightScale(0.014),
    marginLeft: DimensionsWindow.heightScale(0.009),
  },
  ideaButton: {
    backgroundColor: colors.default_app_blue,
    marginHorizontal: DimensionsWindow.widthScale(0.05),
    paddingVertical: DimensionsWindow.heightScale(0.01),
    paddingHorizontal: DimensionsWindow.widthScale(0.06),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.default_app_blue,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 8,
  },

  resumeText: {
    fontSize: DimensionsWindow.widthScale(0.05),
    color: colors.default_app_blue,
    width: '60%'
  },
  ideaText: {
    fontSize: DimensionsWindow.widthScale(0.05),
    color: colors.default_white,
    width: '90%',
    textAlign: 'left'
  },
  ideaImage: {
    width: DimensionsWindow.widthScale(0.7),
    height: DimensionsWindow.heightScale(0.12),
    resizeMode: 'contain',
    marginTop: DimensionsWindow.heightScale(0.02),
  },
  jobOpeningsImage: {
    width: '40%',
    height: DimensionsWindow.heightScale(0.10),
    resizeMode: 'contain',
    marginTop: DimensionsWindow.heightScale(0.02),
  },
  resumeImage: {
    width: '40%',
    height: DimensionsWindow.heightScale(0.20),
    resizeMode: 'contain',
    marginTop: DimensionsWindow.heightScale(0.02),
  },
  seeMoreButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: DimensionsWindow.widthScale(0.01),
    alignItems: 'center',
    paddingTop: DimensionsWindow.heightScale(0.01)
  }
});