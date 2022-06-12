import './crew.css'

import TitlePages from '../../components/TitlePages'
import InfoCrew from './components/InfoCrew'
import { useEffect, useState } from 'react'

import data from './../../../data.json'

const Crew = () => {
    const [name, setName] = useState('Douglas Hurley')
    const [crew, setCrew] = useState({})
 
     useEffect(() => {
 
         let crewSetado = data.crew.filter(item => {
             return item.name === name
         })
 
         setCrew(crewSetado[0])
 
     }, [name])

    return (
    <div className="container-crew">
        <TitlePages numberPage='02' descriptionPage='MEET YOUR CREW'/>
        <InfoCrew  crewSetado={crew} setNameCrew={(name) => setName(name)}/>
    </div>
    )
}

export default Crew