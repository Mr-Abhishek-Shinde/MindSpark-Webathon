import React from 'react';
import AddProgram from "../components/addProgram";
import Navbar from '../components/homePage/navbar';



export default function Ideator() {


    return (
        <>
        <Navbar/>
        <div className="ideapage-container">
            <AddProgram/>
        </div>
        </>

    )
}