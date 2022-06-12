import { useEffect, useState } from 'react'

import './infoTech.css'


import launchLS from './../../../assets/technology/image-launch-vehicle-landscape.jpg'
import launchPT from './../../../assets/technology/image-launch-vehicle-portrait.jpg'

import spaceCapsLS from './../../../assets/technology/image-space-capsule-landscape.jpg'
import spaceCapsPT from './../../../assets/technology/image-space-capsule-portrait.jpg'

import spacePortLS from './../../../assets/technology/image-spaceport-landscape.jpg'
import spacePortPT from './../../../assets/technology/image-spaceport-portrait.jpg'


const InfoTech =  ({techSetada, setNameTech}) => {
    const [techImage, setImage] = useState('')

    useEffect(() => {

        const btns = document.querySelectorAll('.btns-tech button')

        btns.forEach(btn => {
            btn.classList.remove('btns-tech-active')
        })

        let w = window.innerWidth;

        if(techSetada.name === 'Launch vehicle'){
            setImage(w > 900 ? launchPT : launchLS)
            btns[0].classList.add('btns-tech-active')
        } else if(techSetada.name === 'Spaceport'){
            setImage(w > 900 ? spacePortPT : spacePortLS)
            btns[1].classList.add('btns-tech-active')
        } else{
            setImage(w > 900 ? spaceCapsPT : spaceCapsLS)
            btns[2].classList.add('btns-tech-active')
        }
    }, [techSetada])

    return (
        <div className='container-image-description-tech'>
            <div className='container-description-tech'>
                <div className='btns-tech'>
                    <button onClick={() => setNameTech('Launch vehicle')}>1</button>
                    <button onClick={() => setNameTech('Spaceport')} >2</button>
                    <button onClick={() => setNameTech('Space capsule')} >3</button>
                </div>

                <div className='info-tech'>
                    <p className='sub-tech'>THE TERMINOLOGY...</p>
                    <h1 className='title-name-tech'>
                        {techSetada.name}
                    </h1>
                    <p className='paragraph-tech'>
                        {techSetada.description}
                    </p>
                </div>
            </div>

            <div className='image-tech'>
                <img src={techImage} alt="img-nave" />
            </div>
        </div>
    )
}

export default InfoTech