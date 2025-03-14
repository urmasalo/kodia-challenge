import { JSX } from "react";
import Header from "./components/Header";
import { Flex, Tabs, Box, } from "@radix-ui/themes";

import { homeTabs } from "./data/home-tabs";


export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Flex justify="between" align="center" direction={{ initial: "column", sm: "row" }}>
        <Tabs.Root defaultValue="home" style={{ width: "100%" }}>
          <Tabs.List size="2" mx="9">
            {homeTabs.map((tab) => (
              <Tabs.Trigger key={tab.value} value={tab.value}>
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <Box>
            {homeTabs.map((tab) => (
              <Tabs.Content key={tab.value} value={tab.value} style={{ background: "var(--gray-2)" }}>
                {tab.content}
              </Tabs.Content>
            ))}
          </Box>
        </Tabs.Root>
      </Flex>
    </>
  );
}