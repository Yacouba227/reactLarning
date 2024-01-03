import React, { Component } from 'react'; 
import Car from './Cars';

class Mycars extends Component {

        state ={
            voiture:[
                {name: 'Toyota', color:'red', year: 2000},
                {name: 'Mercedese', color:'black', year: 1998},
                {name: 'Peugeot', color:'green ', year: 2020},
            ]
        }
        addTenYears = () => {
            console.log('activé');
        }
    render() {
        return <div>
            <h1 onMouseOver={this.addStyled}>{this.props.titre}</h1>

            <button onClick={this.addTenYears}> + 10 ans</button>

            <Car color={this.state.voiture[0].color} year={this.state.voiture[0].year}>{this.state.voiture[0].name}</Car>
            <Car color={this.state.voiture[1].color} year={this.state.voiture[1].year}>{this.state.voiture[1].name}</Car>
            <Car color={this.state.voiture[2].color} year={this.state.voiture[2].year}>{this.state.voiture[2].name}</Car>
        </div>
    }
}

export default Mycars;