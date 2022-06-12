import './destination.css'

import TitlePages from '../../components/TitlePages'
import InfoPlanet from "./components/InfoPlanet"
import { useEffect, useState } from 'react'


import data from './../../../data.json'

const Destination = () => {
   const [planet, setPlanet] = useState('Moon')
   const [planetaSetado, setPlanetaSetado] = useState({})

    useEffect(() => {

        let planetSetadofilter = data.destinations.filter(dest => {
            return dest.name === planet
        })

        setPlanetaSetado(planetSetadofilter[0])

    }, [planet])

    return (
        <div className="container-destination">
            <TitlePages numberPage='01' descriptionPage='PICK YOUR DESTINATION ' />
            <InfoPlanet planetaSetado={planetaSetado} setPlanet={(name) => setPlanet(name)}/>
        </div>
    )
}

export default Destination