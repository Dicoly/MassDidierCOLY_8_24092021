import react from 'react'
import {Link} from 'react-router-dom'
import './Card.css'



class Card extends react.Component{
    
    render (){
        return (
                <Link className='cardLink' key={this.props.logement.id}  to={{
                    pathname : `/logement/${this.props.logement.id}`
                    }}>
                    <article className="cardContainer">
                        <img src={this.props.logement.cover} alt='card_img' className='cardImg'/>
                        <p className='cardText'>{this.props.logement.title}</p>
                    </article>
                </Link>
        )
    }
}
export default Card;