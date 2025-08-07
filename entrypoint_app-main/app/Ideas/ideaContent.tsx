import { MontserratFonts } from "@/enums/montserrat";
import { getIdeaById } from "@/repositories/content/content";
import { Content } from "@/repositories/content/type";
import { formatToMarkdown } from "@/utils/formatToMarkdown";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text } from "react-native";
import Markdown from "react-native-markdown-display";

export default function IdeaContent() {
    const { id } = useLocalSearchParams();
    const [idea, setIdea] = useState<Content | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (typeof id === "string") {
            getIdeaById(id).then((data) => {
                setIdea(data);
                setLoading(false);
            });
        }
    }, [id]);

    if (loading) {
        return <ActivityIndicator size="large" />;
    }

    if (!idea) {
        return <Text>Idea not found.</Text>;
    }

    const formattedContent: string = formatToMarkdown(idea.content);

    return (
        <ScrollView contentContainerStyle={{ padding: 16 }}>
            <Text style={{ fontSize: 24, fontFamily: MontserratFonts.MONTSERRAT_700_BOLD, marginBottom: 16 }}>
                {idea.title}
            </Text>
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
        </ScrollView>
    );
}
