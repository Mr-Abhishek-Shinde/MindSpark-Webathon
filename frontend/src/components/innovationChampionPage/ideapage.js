import { React, useState, useEffect } from 'react'
import Navbar from '../homePage/navbar'
import IdeaList from './ideaList'

function IdeaPage() {
    const [ideas, setIdeas] = useState([])
    const getIdeas = () => {
        fetch("https://bridgestone-backend-production-acbf.up.railway.app/api/ideas/")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setIdeas(data)
            })

    }
    useEffect(() => {
        getIdeas()
    }, [])
    //const [ideas,setIdeas] = useState();

    // setIdeas(prev=>{
    //         return [...prev,]
    //     }
    // )
    return (
        <>
            <Navbar />
            <IdeaList ideas={ideas} />
        </>
    )
}

export default IdeaPage