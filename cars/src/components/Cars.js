import React from "react";


const Car = ({color, children, year}) => {
    const Couleurs = color ? (<p>Couleur: {color} </p>) : (<p>Couleur: Neant</p>);
    if (children) {
        return (
            <div className="Cars" style={{
                background:'pink',
                 width:'400px', 
                 padding:'10px', 
                 margin:'5px auto'
                 }}>
                <p>Marque: {children}</p>
                <p>Année: {year}</p>
                {Couleurs}
            </div>
        )
    } else{
        return null; 
    }
    
}
export default Car; 