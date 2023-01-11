import React from 'react';
import Navbar from '../components/homePage/navbar';
import ChampCard from "../components/ideatorPage/championCard";
import ProgramCard from "../components/ideatorPage/programCard";
import { Route, Link, Routes, useParams } from 'react-router-dom';

export default function Ideator() {

    const params = useParams();

    console.log(params);

    return (
        <>
            {/* <Navbar2 /> */}
            <ProgramCard />
            <ChampCard />
        </>

    )
}