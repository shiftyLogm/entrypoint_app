import MontserratText from "@/components/montserrat-text";
import { MontserratFonts } from "@/enums/montserrat";
import { getAllJobOpenings } from "@/repositories/jobOpenings/jobOpenings";
import { JobOpening } from "@/repositories/jobOpenings/type";
import DimensionsWindow from "@/utils/dimensions";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function JobOpenings() {

    const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([]);
    useEffect(() => {
        getAllJobOpenings()
            .then((jobOpening) => setJobOpenings(jobOpening))
    }, []);

    const { t } = useTranslation();

    return (
        <ScrollView style={styles.content}>
                <MontserratText
                    style={styles.title}
                    size={MontserratFonts.MONTSERRAT_700_BOLD}
                >
                    {t('content:screens:jobOpenings:title')}    
                </MontserratText>    
                <View style={styles.jobs}>
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
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    content: {
        backgroundColor: '#F3F3F3',
        flex: 1,
    },
    title: {
        textAlign: 'center',
        fontSize: DimensionsWindow.widthScale(0.05)
    },
    jobs: {
        marginHorizontal: DimensionsWindow.widthScale(0.05),
        gap: DimensionsWindow.heightScale(0.02)
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
});
