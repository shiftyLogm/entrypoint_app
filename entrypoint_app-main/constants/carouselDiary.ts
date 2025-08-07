import { ImageSourcePropType } from "react-native";

export type DiaryCardProps = {
  id: number;
  title: string,
  description: string,
  image: ImageSourcePropType
};

export type DiaryCarouselProps = {
  data: DiaryCardProps[];
};