import { React, useState, useEffect } from 'react'
import Navbar from '../homePage/navbar'
import IdeaList from './ideaList'

function IdeaPage() {
    const [ideas, setIdeas] = useState([])
    const getIdeas = () => {
        fetch("http://127.0.0.1:8000/api/ideas/")
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