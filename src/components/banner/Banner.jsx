import React from 'react';
import './Banner.css';

class Banner extends React.Component {
    render() {
        return (
            <figure className="bannerContainer">
                <img className="img" src={this.props.img} alt={this.props.img} />
                <figcaption className="text">{this.props.text}</figcaption>
            </figure>
        );
    }
}

export default Banner;