import react from 'react'
import './Tag.css';

class Tag extends react.Component{

    render(){
        return(
            <div className="tagContainer">
                {this.props.list.map((name =>
                    <span key={name} className="tags">{name}</span>
                    ))}
            </div>
        )
    }
}


export default Tag