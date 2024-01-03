import React, { Component } from 'react'; 
import Car from './Cars';

class Mycars extends Component {
    render() {
        return <div>
            <h1>{this.props.titre}</h1>
            <Car color = 'red'></Car>
            <Car>Mercedese</Car>
            <Car color = 'green'>Peugeot</Car>
        </div>
    }
}

export default Mycars;