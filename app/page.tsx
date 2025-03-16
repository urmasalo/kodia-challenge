'use client'

import { JSX, useState } from "react";
import Header from "./components/Header";
import HomeTabs from "./components/HomeTabs";
import { DataProvider } from "./components/DataContext";




export default function Home(): JSX.Element {

  const [searchCriteria, setSearchCriteria] = useState("");

  return (
    <>
      <DataProvider>
        <Header />
        <HomeTabs />
      </DataProvider>
    </>
  );
}