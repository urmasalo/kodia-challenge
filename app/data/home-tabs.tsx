import { Flex, Heading, Text } from "@radix-ui/themes";
import TopStories from "../components/TopStories";
import { ReactNode } from "react";

interface Tab {
    value: string;
    label: string;
    content: ReactNode;
}

export const homeTabs: Tab[] = [
    {
        value: "home",
        label: "Home",
        content: (
            <Flex direction={'column'} pt={'5'} gap={'2'}>
                <Heading ml={'9'} size="7">
                    Your briefing
                </Heading>
                <TopStories />
            </Flex>
        ),
    },
    {
        value: "forYou",
        label: "For You",
        content: (
            <Text m="9" size="7">
                For you
            </Text>
        ),
    },
    {
        value: "following",
        label: "Following",
        content: (
            <Text m="9" size="7">
                Following
            </Text>
        ),
    },
    {
        value: "newsShowcase",
        label: "News Showcase",
        content: (
            <Text m="9" size="7">
                News Showcase
            </Text>
        ),
    },
];