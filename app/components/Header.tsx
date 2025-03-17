"use client";

import { Flex, Button, Text, Link, TextField, Select } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { JSX } from "react";

import { useDataContext } from './DataContext';

export default function Header(): JSX.Element {

    const { setSearchCriteria, setPerformSearch, setLanguageChange } = useDataContext();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchCriteria(event.target.value);
    };

    const handleLanguajeChange = (value: string) => {
        setLanguageChange(value);
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            setPerformSearch(true)
        }
    };

    const languageOptions = [
        { code: "ar", name: "Arabic" },
        { code: "de", name: "German" },
        { code: "en", name: "English" },
        { code: "es", name: "Spanish" },
        { code: "fr", name: "French" },
        { code: "he", name: "Hebrew" },
        { code: "it", name: "Italian" },
        { code: "nl", name: "Dutch" },
        { code: "no", name: "Norwegian" },
        { code: "pt", name: "Portuguese" },
        { code: "ru", name: "Russian" },
        { code: "sv", name: "Swedish" },
        { code: "ud", name: "Urdu" },
        { code: "zh", name: "Chinese" },
    ];

    return (
        <Flex
            p="4"
            justify="between"
            align="center"
            px="9"
            direction={{ initial: "column", sm: "row" }}
            gap="4"
        >
            <Flex align="center" asChild>
                <Link href="/">
                    <Text size="5" weight="bold" ml="2">
                        Kodia News
                    </Text>
                </Link>
            </Flex>
            <TextField.Root
                variant="soft"
                placeholder="Search for topics, locations & sources"
                onChange={(e) => handleSearchChange(e)}
                onKeyDown={handleKeyDown}
                size="3"
                style={{ width: "100%", maxWidth: 500 }}
            >
                <TextField.Slot>
                    <MagnifyingGlassIcon />
                </TextField.Slot>
            </TextField.Root>
            <Select.Root size={'2'} onValueChange={(e) => handleLanguajeChange(e)}>
                <Select.Trigger style={{ width: "100%", maxWidth: 160 }} placeholder="Select a language" />
                <Select.Content >
                    {languageOptions.map((language) => (
                        <Select.Item key={language.code} value={language.code}>
                            {language.name}
                        </Select.Item>
                    ))}
                </Select.Content>
            </Select.Root>
            <Button variant="solid" style={{ width: "100%", maxWidth: 120 }}>
                Sign Up
            </Button>
        </Flex>
    );
}