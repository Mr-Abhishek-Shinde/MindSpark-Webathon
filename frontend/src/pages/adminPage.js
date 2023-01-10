import React from 'react';
import Navbar from '../components/homePage/navbar';
import ChampCard from "../components/ideatorPage/championCard";
import ProgramCard from "../components/ideatorPage/programCard";
import AddCard from "../components/addCard"

export default function adminPage() {


    return (
        <>
            <Navbar/>
            <ProgramCard />
            <AddCard/>
            <ChampCard />
        </>

    )
}