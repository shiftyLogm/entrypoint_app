import PageButton from '@/components/page-button';
import { getAllIdeas } from '@/repositories/content/content';
import { Content } from '@/repositories/content/type';
import DimensionsWindow from '@/utils/dimensions';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { colors } from '@/config/theme.json';
import MontserratText from '@/components/montserrat-text';
import { MontserratFonts } from '@/enums/montserrat';
import { useTranslation } from 'react-i18next';

export default function Ideas() {
    const [ideas, setIdeas] = useState<Content[]>([]);
    const { t } = useTranslation();

    useEffect(() => {
        getAllIdeas()
            .then((ideas) => setIdeas(ideas))
    }, []);

    return (
        <>
            <Image source={require('@/assets/images/customer-service.png')} style={styles.image} />
            <View style={styles.options}>
                <View style={styles.texts}>
                    <MontserratText
                        size={MontserratFonts.MONTSERRAT_700_BOLD}
                        style={styles.title}
                    >
                        {t('content:screens:ideas:title')}
                    </MontserratText>
                    <MontserratText
                        size={MontserratFonts.MONTSERRAT_500_MEDIUM}
                        style={styles.description}
                    >
                        {t('content:screens:ideas:description')}
                    </MontserratText>
                </View>
                {ideas.map((idea) => (
                    <PageButton
                        key={idea.id}
                        text={idea.title}
                        onPress={
                            () => router.push({
                                pathname: '/Ideas/ideaContent',
                                params: { id: idea.id }
                            })}
                    />
                ))}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    options: {
        marginTop: DimensionsWindow.heightScale(0.13),
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: DimensionsWindow.heightScale(0.05),
        gap: DimensionsWindow.heightScale(0.03),
        justifyContent: 'center',
        alignContent: 'flex-start',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 20,
        flex: 1,
        backgroundColor: colors.default_white
    },
    image: {
        width: DimensionsWindow.widthScale(0.5),
        height: DimensionsWindow.heightScale(0.12),
        resizeMode: 'center',
        position: 'absolute',
        zIndex: 1,
        right: 0,
        top: DimensionsWindow.heightScale(0.05)
    },
    title: {
        fontSize: DimensionsWindow.widthScale(0.045),
        textAlign: 'center'
    },
    description: {
        fontSize: DimensionsWindow.widthScale(0.035)
    },
    texts: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: DimensionsWindow.widthScale(0.05)
    }
})