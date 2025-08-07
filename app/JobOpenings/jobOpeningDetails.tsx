import MontserratText from '@/components/montserrat-text';
import { MontserratFonts } from '@/enums/montserrat';
import { getJobOpeningById } from '@/repositories/jobOpenings/jobOpenings';
import { JobOpening } from '@/repositories/jobOpenings/type';
import DimensionsWindow from "@/utils/dimensions";
import { formatToMarkdown } from '@/utils/formatToMarkdown';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Markdown from 'react-native-markdown-display';

export default function JobOpeningDetails() {

    const { id } = useLocalSearchParams();
    const [jobOpeningDetails, setJobOpeningDetails] = useState<JobOpening | null>(null)
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        if (typeof id === 'string') {
            getJobOpeningById(id).then((jobOpeningsDetails) => {
                setJobOpeningDetails(jobOpeningsDetails);
                setLoading(false);
            })
        }
    }, [JobOpeningDetails])

    if (loading) {
        return <ActivityIndicator size="large" />;
    }

    const formattedContent: string = formatToMarkdown(jobOpeningDetails?.content!);

    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={{ alignItems: 'center'}}
        >
            <Image source={{ uri: jobOpeningDetails?.image }} style={styles.image} />
            <MontserratText style={styles.companyName}>{jobOpeningDetails?.company_name}</MontserratText>
            <View style={styles.content}>
                <MontserratText 
                    style={styles.jobTitle}
                    size={MontserratFonts.MONTSERRAT_700_BOLD}
                >
                    {jobOpeningDetails?.job_title}
                </MontserratText>
                <Markdown
                    style={{
                        text: {
                            fontFamily: MontserratFonts.MONTSERRAT_400_REGULAR,
                            fontSize: 16,
                            color: '#333',
                        },
                        heading1: {
                            fontFamily: MontserratFonts.MONTSERRAT_700_BOLD,
                            fontSize: 24,
                            marginBottom: 8,
                        },
                        bullet_list: {
                            marginLeft: 12,
                        },
                        list_item: {
                            fontFamily: MontserratFonts.MONTSERRAT_400_REGULAR,
                            fontSize: 16,
                        },
                    }}
                >
                    {formattedContent}
                </Markdown>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => alert('Inscrito!')}>
                <MontserratText 
                    style={styles.textButton}
                    size={MontserratFonts.MONTSERRAT_700_BOLD}
                >
                    Inscrever-se
                </MontserratText>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    companyName: {
        fontSize: DimensionsWindow.widthScale(0.08),
        marginTop: 20,
    },
    image: {
        width: 150,
        height: 150,
        marginRight: 15,
        resizeMode: 'contain',
        marginTop: 60,
    },
    content: {
        paddingHorizontal: DimensionsWindow.widthScale(0.05)
    },
    informacao: {
        marginRight: 150,
        marginTop: 10,
    },
    jobTitle: {
        fontSize: DimensionsWindow.widthScale(0.065),
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#7BE68B',
        marginTop: DimensionsWindow.heightScale(0.05),
        marginBottom: DimensionsWindow.heightScale(0.1),
        paddingVertical: DimensionsWindow.heightScale(0.03),
        paddingHorizontal: 32,
        borderRadius: 10,
        alignItems: 'center',
    },
    textButton: {
        fontSize: DimensionsWindow.widthScale(0.05),
    },

});
