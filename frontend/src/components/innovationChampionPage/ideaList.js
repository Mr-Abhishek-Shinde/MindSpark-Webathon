import { React } from 'react'
import Idea from './idea'

function IdeaList({ ideas }) {
  return (
        ideas.map((idea) => {
            return <Idea key={idea.id} idea={idea}/>
        })      
  )
}

export default IdeaList