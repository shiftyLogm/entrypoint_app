import { colors } from '@/config/theme.json';
import { MontserratFonts } from '@/enums/montserrat';
import DimensionsWindow from '@/utils/dimensions';
import React from 'react';
import { FlatList, StyleSheet, View, Image } from 'react-native';
import MontserratText from '@/components/montserrat-text';
import { DiaryCardProps, DiaryCarouselProps } from '@/constants/carouselDiary';

const DiaryCard = ({ title, description, image }: DiaryCardProps) => (
  
  <View style={{ alignItems: 'center' }}>
    <Image
      source={image}
      style={styles.illustrativeImage}
    />
    <View style={styles.diary}>
      <View style={styles.diaryTitle}>
        <MontserratText
          size={MontserratFonts.MONTSERRAT_700_BOLD}
          style={styles.diaryText}
        >
          {title}
        </MontserratText>
        <MontserratText
          style={styles.diaryDescription}
          size={MontserratFonts.MONTSERRAT_500_MEDIUM}
        >
          {description}
        </MontserratText>
      </View>
    </View>
  </View>
);

export default function DiaryCarousel({ data }: DiaryCarouselProps) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <DiaryCard title={item.title} description={item.description} id={0} image={item.image} />}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      snapToAlignment="center"
      decelerationRate="fast"
    />
  );
}

const styles = StyleSheet.create({
  diary: {
    backgroundColor: colors.default_gray,
    width: DimensionsWindow.widthScale(0.9),
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.default_app_blue,
    justifyContent: 'flex-start',
    elevation: 8
  },

  illustrativeImage: {
    width: DimensionsWindow.widthScale(0.9),
    height: DimensionsWindow.heightScale(0.15),
    resizeMode: 'contain',
    marginTop: DimensionsWindow.heightScale(0.03),
  },
  diaryTitle: {
    alignItems: 'flex-start',
  },
  diaryText: {
    color: colors.default_app_blue,
    fontSize: DimensionsWindow.widthScale(0.06),
  },
  diaryDescription: {
    color: colors.default_app_blue,
    fontSize: DimensionsWindow.widthScale(0.04),
  }
});
