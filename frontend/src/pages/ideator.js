import React from 'react';
import Navbar from '../components/homePage/navbar';
import ChampCard from "../components/ideatorPage/championCard";
import ProgramCard from "../components/ideatorPage/programCard";


export default function Ideator() {


    return (
        <>
            <Navbar/>
            <ProgramCard />
            <ChampCard />
        </>

    )
}