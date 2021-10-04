import React from 'react';
import Banner from '../../components/banner/Banner';
import banner from '../../assets/accueil_img.png'
import Card from '../../components/card/Card'
import './Accueil.css';


const logementList = require('../../datas/dataLogements.json')
const bannerText = "Chez vous, Partout et ailleurs"

class Accueil extends React.Component  {
    render() {
        return (
            <div>
                <Banner img={banner} text={bannerText}/>
                <ul className='kasa-card-container'>
                    {logementList.map((logement)=>
                    <li key={logement.id} className='kasa-card-list'>
                        <Card logement={logement} />
                    </li>
                )}
               </ul>
            </div>
        )
    }
}

export default Accueil