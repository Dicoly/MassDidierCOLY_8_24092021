import React from 'react';
import './Dropdown.css';
import arrowDown from '../../assets/arrowDown.svg';
import arrowUp from '../../assets//arrowUp.svg';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { open: false };
    }

    handleClick() {
        this.setState((prevState) => ({
            open: !prevState.open
        }));
    }
    render() {
        const arrowPath = this.state.open ? arrowUp : arrowDown;

        return (
            <div className="dropdownBody">
                <div className="dropdownTitle" onClick={this.handleClick}>
                    <div>{this.props.title}</div>
                    <img src={arrowPath} alt={arrowPath} />
                </div>
                <div
                    className="dropdownContent"
                    style={{ display: this.state.open ? 'block' : 'none' }}>
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default Dropdown;