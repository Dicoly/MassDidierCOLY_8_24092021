import React from 'react';
import star from '../../assets/star.svg'
import starNotLight from '../../assets/starnotlight.svg'
import './Rating.css'



class Rating extends React.Component{

    render() {

        const range = [1,2,3,4,5]

        return (
            <div className="starContainer">
                {range.map((rangeElt)=>
                    this.props.rating >= rangeElt ? (
                        <img key={rangeElt} src={star} alt='star-rating-light' className='star'/>
                    ) : <img key={rangeElt} src={starNotLight} alt='star-rating-not-light'className='star'/>
                )}
            </div>
        )
    }
}

export default Rating