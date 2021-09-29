import React from 'react';
import Banner from '../../components/banner/Banner';
import banner from '../../assets/accueil_img.png'

const bannerText = "Chez vous, Partout et ailleurs"

class Accueil extends React.Component  {
    render() {
        return (
            <div>
                <Banner img={banner} text={bannerText}/>
            </div>
        )
    }
}

export default Accueil