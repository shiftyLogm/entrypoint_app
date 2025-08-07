import AdvancedButton from "@/components/advanced-button";
import AdvancedInput from "@/components/advanced-input";
import MontserratText from "@/components/montserrat-text";
import { colors } from '@/config/theme.json';
import { editProfileOptions } from "@/constants/editProfileOptions";
import { MontserratFonts } from "@/enums/montserrat";
import DimensionsWindow from "@/utils/dimensions";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, View } from "react-native";

export default function EditProfile() {
    const { t } = useTranslation();

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.profileInfos}>
                <FontAwesome name="user-circle-o" size={120} color={colors.default_app_blue} />
                <View style={styles.editIcon}>
                    <FontAwesome6 name="edit" size={24} color={colors.default_app_blue} />
                </View>
            </View>
            <View style={styles.inputs}>
                {
                    Object.keys(editProfileOptions).map((key) => (
                        <View>
                            <MontserratText
                                size={MontserratFonts.MONTSERRAT_600_SEMI_BOLD}
                                style={styles.label}
                            >
                                {t(editProfileOptions[key].label ?? "")}
                            </MontserratText>
                            <AdvancedInput
                                value={editProfileOptions[key].value}
                                readOnly={editProfileOptions[key].readonly}
                                maskType={editProfileOptions[key].maskType}
                            />
                        </View>
                    ))
                }
            </View>
            <View style={styles.buttonWrapper}>
                <AdvancedButton
                    text={t('content:screens:profile:editProfile:save')}
                    color={colors.default_app_blue}
                    borderRadius={10}
                    textFontSize={18}
                    width={DimensionsWindow.widthScale(0.6)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    e:{
    marginLeft:15,
    marginTop:10,
  },
    profileInfos: {
        paddingTop: DimensionsWindow.heightScale(0.1),
        alignItems: 'center',
    },
    editIcon: {
        position: 'relative',
        top: -DimensionsWindow.heightScale(0.03),
        left: DimensionsWindow.widthScale(0.08),
        backgroundColor: colors.default_white,
        borderRadius: 50,
        padding: 5,
        elevation: 2,
    },
    label: {
        fontSize: 17,
    },
    inputs: {
        paddingHorizontal: DimensionsWindow.widthScale(0.05),
        gap: DimensionsWindow.heightScale(0.02),
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: DimensionsWindow.heightScale(0.1),
    },

});