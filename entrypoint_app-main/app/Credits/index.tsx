import MontserratText from "@/components/montserrat-text";
import { Collaborators } from "@/constants/collaborators";
import { MontserratFonts } from "@/enums/montserrat";
import DimensionsWindow from "@/utils/dimensions";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, View } from "react-native";

export default function Credits() {

    const { t } = useTranslation();

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.content}>
                <MontserratText
                    size={MontserratFonts.MONTSERRAT_700_BOLD}
                    style={styles.title}
                >
                    {t('content:screens:credits:extensionProject')}
                </MontserratText>
                <MontserratText
                    size={MontserratFonts.MONTSERRAT_500_MEDIUM}
                    style={styles.description}
                >
                    {t('content:screens:credits:extensionProjectName')}
                </MontserratText>
                <MontserratText
                    size={MontserratFonts.MONTSERRAT_700_BOLD}
                    style={styles.title}
                >
                    {t('content:screens:credits:labelTeacher')}
                </MontserratText>
                <MontserratText
                    size={MontserratFonts.MONTSERRAT_500_MEDIUM}
                    style={styles.description}
                >
                    {t('content:screens:credits:teacherName')}
                </MontserratText>
                <MontserratText
                    size={MontserratFonts.MONTSERRAT_700_BOLD}
                    style={styles.title}
                >
                    {t('content:screens:credits:collaboratorsLabel')}
                </MontserratText>
                <View style={{ marginBottom: DimensionsWindow.heightScale(0.04) }}>
                {
                    Collaborators.map((name) => (
                        <MontserratText
                            key={name}
                            size={MontserratFonts.MONTSERRAT_500_MEDIUM}
                            style={styles.collaborators}
                        >
                            {name}
                        </MontserratText>
                    ))
                }
                </View>

                <MontserratText
                    size={MontserratFonts.MONTSERRAT_700_BOLD}
                    style={styles.title}
                >
                    {t('content:screens:credits:support')}
                </MontserratText>
            </View>
            <Image
                source={require('@/assets/images/extension.jpg')}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: DimensionsWindow.widthScale(0.05),
    },
    image: {
        width: DimensionsWindow.widthScale(0.9),
        height: DimensionsWindow.heightScale(0.1),
        marginHorizontal: DimensionsWindow.widthScale(0.05)
    },
    title: {
        fontSize: DimensionsWindow.widthScale(0.05),
        textAlign: 'center'
    },

    description: {
        fontSize: DimensionsWindow.widthScale(0.04),
        textAlign: 'center',
        marginBottom: DimensionsWindow.heightScale(0.04)
    },
    collaborators: {
        fontSize: DimensionsWindow.widthScale(0.04),
        textAlign: 'center',
    },

})