import { useEffect, useState } from 'react'

import './infoCrew.css'


import DouglasHurley from './../../../assets/crew/image-douglas-hurley.png'
import MarkShuttleworth from './../../../assets/crew/image-mark-shuttleworth.png'
import VictorGlover from './../../../assets/crew/image-victor-glover.png'
import AnoushehAnsari from './../../../assets/crew/image-anousheh-ansari.png'


const InfoCrew = ({crewSetado, setNameCrew}) => {
    const [crewImage, setImage] = useState('')

    useEffect(() => {

        const btns = document.querySelectorAll('.btns-nav-crew button')

        btns.forEach(btn => {
            btn.classList.remove('btn-active')
        })

        if(crewSetado.name === 'Douglas Hurley'){
            setImage(DouglasHurley)
            btns[0].classList.add('btn-active')
        } else if(crewSetado.name === 'Mark Shuttleworth'){
            setImage(MarkShuttleworth)
            btns[1].classList.add('btn-active')
        } else if (crewSetado.name === 'Victor Glover'){
            setImage(VictorGlover)
            btns[2].classList.add('btn-active')
        } else {
            setImage(AnoushehAnsari)
            btns[3].classList.add('btn-active')
        }
    }, [crewSetado])


    return (
        <div className="container-image-description">
            <div className='container-description-crew'>
                <h3 className='sub-title-crew'>
                    {crewSetado.role}
                </h3>
                <h1 className='title-crew'>
                    {crewSetado.name}
                </h1>
                <p className='paragraph-crew'>
                    {crewSetado.bio}
                </p>
                <div className='btns-nav-crew'>
                    <button onClick={() => setNameCrew('Douglas Hurley')} className='btn-active'></button>
                    <button onClick={() => setNameCrew('Mark Shuttleworth')} ></button>
                    <button onClick={() => setNameCrew('Victor Glover')}></button>
                    <button onClick={() => setNameCrew('Anousheh Ansari')}></button>
                </div>
            </div>

            <div className='container-image-crew'>
                <img src={crewImage} alt="" />
            </div>
        </div>
    )
}

export default InfoCrew