import React from 'react';
import './home.css';
import ChampCard from "../components/championCard";
import IdeaList from './idea_Page/ideaList';


export default function Home() {

    return (
        <>
            <div className="homeContainer">
                <h1 className='titleText'>Welcome to <br/><span className='span1'>BridgeStone<br/></span> <span className='span2'>Idea Submission Platform</span> </h1>
            </div>
            <ChampCard/>
            <IdeaList/>
        </>
    )
}