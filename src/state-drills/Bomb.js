import React from 'react';

class Bomb extends React.Component {
    static defaultProps = {
        count: 0
    }
    constructor(props) {
        super(props)
        this.state = {count: 0}
    }
    componentDidMount() {         
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            }) 
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    renderDisplay() {
        console.log(this.state)
        if(this.state.count >= 8) {            
            clearInterval(this.interval);
            return 'BOOM!!!!'
        }
        if (this.state.count % 2 === 0) {
            return 'tick'
        } else {
            return 'tock'
        }        
    }
    render() {
        return (
            <div>
                {this.renderDisplay()}
            </div>
        )
    }
}

export default Bomb;