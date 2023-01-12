import React from 'react';
import Navbar from '../components/homePage/navbar';
import ChampCard from "../components/ideatorPage/championCard";
import ProgramCard from "../components/ideatorPage/programCard";

export default function Ideator() {

    return (
        <>
            <Navbar/>
            <div className="main_container" style={{backgroundColor:"#f0f0f0", height:"100%"}}>
            <ProgramCard />
            <ChampCard />
            </div>
        </>

    )
}