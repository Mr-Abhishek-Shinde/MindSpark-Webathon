import { React , useState, useEffect } from 'react'
import IdeaList from './ideaList'

const ideas = [
    {
        title:"Web",
        email:"xyz@gmail.com",
        name:"shinde",
        program_name:"B.Tech",
        id:"12345"
    },
    {
        title:"COG",
        email:"abc@gmail.com",
        name:"arsh",
        program_name:"B.Tech",
        id:"12347"
    },
    {
        title:"Fiance",
        email:"pqr@gmail.com",
        name:"arsh",
        program_name:"B.Tech",
        id:"12360"
    },
]

function IdeaPage() {
    //const [ideas,setIdeas] = useState();

    // setIdeas(prev=>{
    //         return [...prev,]
    //     }
    // )
    return (
        <>
            <h1>Submitted Ideas</h1>
            <IdeaList ideas={ideas}/>
        </>
    )
}

export default IdeaPage