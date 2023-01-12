import React from 'react';
import Navbar from '../components/homePage/navbar';
import ChampCard from "../components/ideatorPage/championCard";
import ProgramCard from "../components/ideatorPage/programCard";
import { useParams } from 'react-router-dom';

export default function Ideator() {

    const params = useParams();

    console.log(params);

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