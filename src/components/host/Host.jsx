import react from 'react'
import './Host.css'

class Host extends react.Component{

    render() {
        return(
            <div className='hostContainer'>
                <div className='hostName'>{this.props.name}</div>
                <img src={this.props.picture} alt='kasa-host-img' className='hostImg'/>
            </div>

        )
    }
}

export default Host