import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }
    constructor(props) {
        super(props)
        this.state = {
            chamber: null, 
            spinningTheChamber: false,
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleButtonClick = () => {
        this.setState( {spinningTheChamber: true} )
        this.timeout = setTimeout( () => {
            const num = Math.ceil(Math.random() * 8)
            this.setState({ 
                chamber: num,
                spinningTheChamber: false
             })
        }, 2000)
    }

    renderDisplay() {
        if (this.state.spinningTheChamber === true) {
            return 'spinning the chamber and pulling the trigger!'
        }
        if (this.state.chamber === this.props.bulletInChamber) {
            return 'BANG!!!!'
        } else {
            return `you're safe!!`
        }
    }

    render () {
        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button 
                    onClick={this.handleButtonClick} 
                >
                Pull The trigger!
                </button>
            </div>
        )
    }
}


export default RouletteGun;