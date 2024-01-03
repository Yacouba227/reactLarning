import React, { Component } from 'react'; 
import Car from './Cars';

class Mycars extends Component {
     noCopy = () => {
        alert('no copy');
    }
    render() {
        return <div>
            <h1>{this.props.titre}</h1>
            <p onCopy={this.noCopy}>lorem ipsum lorem ipsum lorem ipsum</p>
            <Car color = 'red'></Car>
            <Car>Mercedese</Car>
            <Car color = 'green'>Peugeot</Car>
        </div>
    }
}

export default Mycars;