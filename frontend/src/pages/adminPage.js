import React from 'react';
import ChampCard from "../components/ideatorPage/championCard";
import ProgramCard from "../components/ideatorPage/programCard";
import Navbar3 from '../components/homePage/navbar3';

export default function adminPage() {


    return (
        <>
            <Navbar3/>
            <ProgramCard />
            <ChampCard />
        </>

    )
}