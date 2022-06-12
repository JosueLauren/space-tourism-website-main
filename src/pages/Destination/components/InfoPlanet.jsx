import { useEffect, useState } from 'react'

import './infoplanet.css'


import Moon from './../../../assets/destination/image-moon.png'
import Mars from './../../../assets/destination/image-mars.png'
import Europa from './../../../assets/destination/image-europa.png'
import Titan from './../../../assets/destination/image-titan.png'


const InfoPlanet = (props) => {
   const [planetImage, setImage] = useState('')

    useEffect(() => {

        const btns = document.querySelectorAll('.btns-planets button')

        btns.forEach(btn => {
            btn.classList.remove('active')
        })

        if(props.planetaSetado.name === 'Moon'){
            setImage(Moon)
            btns[0].classList.add('active')
        } else if(props.planetaSetado.name === 'Mars'){
            setImage(Mars)
            btns[1].classList.add('active')
        } else if (props.planetaSetado.name === 'Europa'){
            setImage(Europa)
            btns[2].classList.add('active')
        } else {
            setImage(Titan)
            btns[3].classList.add('active')
        }
    }, [props.planetaSetado.name])


    return (
        <div className="container-infoPlanet">
            <div className="image">
                <img src={planetImage} alt="imagem-planeta" />
            </div>
            <div className="info-planet">
                <div className="btns-planets">
                    <button onClick={() => props.setPlanet('Moon')}>MOON</button>
                    <button onClick={() => props.setPlanet('Mars')}>MARS</button>
                    <button onClick={() => props.setPlanet('Europa')}>EUROPA</button>
                    <button onClick={() => props.setPlanet('Titan')}>TITAN</button>
                </div>
                <h3 className="title-planet">
                    {props.planetaSetado.name}
                </h3>
                <p className="paragraf-planet">
                    {props.planetaSetado.description}
                </p>
                <div className="distance-travel">
                    <div className="distance">
                        <span>avg. distance</span>
                        <p>
                            {props.planetaSetado.distance}
                        </p>
                    </div>

                    <div className="travel">
                    <span>est. travel time</span>
                        <p>
                            {props.planetaSetado.travel}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPlanet