import React from 'react';
import { Redirect } from 'react-router';
import Carousel from '../../components/carousel/Carousel';
import './Logement.css'
import Tag from '../../components/tag/Tag';
import Host from '../../components/host/Host';
import Rating from '../../components/rating/Rating';


const logementList = require('../../datas/dataLogements.json')

class Logement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            logement: null
        };
    }

    componentDidMount() {
        this.setState({
            logement: logementList.find((logement) => logement.id === this.props.match.params.id),
            isLoading: false
        });
    }

    render() {
        let template = this.state.isLoading ? (
            <div>Chargement en cours</div>
        ) : this.state.logement ? (
            <main>
                <Carousel pictures={this.state.logement.pictures} />
                <section className="logementHeader">
                    <section className="logementInfo">
                        <h1 className='logementTitre'>{this.state.logement.title}</h1>
                        <h3 className='logementLocation'>{this.state.logement.location}</h3>
                        <Tag list={this.state.logement.tags} />
                    </section>
                    <div className="kasa-host-rating-container mr-top-1r">
                        <Host name={this.state.logement.host.name} picture={this.state.logement.host.picture}/>
                        <Rating rating={this.state.logement.rating}/>
                    </div>
                </section>
            </main>
        ) : (
            this.state.logement === undefined && <Redirect to="/error" />
        );
        return template;
    }
}

export default Logement