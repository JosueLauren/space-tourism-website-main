import './Technology.css'

import TitlePages from '../../components/TitlePages'
import InfoTech from './components/InfoTech'
import { useEffect, useState } from 'react'


import data from './../../../data.json'

const Technology = () => {
    const [name, setName] = useState('Launch vehicle')
    const [tech, setTech] = useState({})
 
     useEffect(() => {
 
         let techSetada = data.technology.find(item => {
             return item.name === name
         })
         
         setTech(techSetada)
 
     }, [name])


    return (
        <div className='container-tech'>
            <TitlePages numberPage='03' descriptionPage='SPACE LAUNCH 101'/>
            <InfoTech techSetada={tech} setNameTech={(name) => setName(name)} />
        </div>
    )
}

export default Technology