import React from 'react';
import '../components/homePage/home.css';
import Navbar from "../components/homePage/navbar";
// import ChampCard from "../components/championCard";
// import IdeaList from './idea_Page/ideaList';
// import ProgramCard from "../components/programCard";
// import ProgramDetails from '../components/programDetails';



export default function Home() {

    return (
        <>
            <Navbar />

            <div className="homeContainer">
                <h1 className='titleText'>Welcome to <br /><span className='span1'>BridgeStone<br /></span> <span className='span2'>Idea Submission Platform</span> </h1>
            </div>
        </>

    )
}