"use client";

import { Flex, Button, Text, Link, TextField, Box, Tabs, Heading } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { JSX } from "react";


export default function Header(): JSX.Element {
    return (
        <header>
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
                    onChange={(e) => console.log(e.target.value)}
                    size="3"
                    style={{ width: "100%", maxWidth: 500 }}
                >
                    <TextField.Slot>
                        <MagnifyingGlassIcon />
                    </TextField.Slot>
                </TextField.Root>
                <Button variant="solid" style={{ width: "100%", maxWidth: 120 }}>
                    Sign Up
                </Button>
            </Flex>
        </header>
    );
}