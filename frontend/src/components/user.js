import React from 'react';
import ChampCard from "../components/championCard";
import ProgramCard from "../components/programCard";
import ProgramDetails from '../components/programDetails';


export default function User() {

    return (
        <>
            <ProgramCard/>
            <ProgramDetails/>            
            <ChampCard />
        </>
        
    )
}