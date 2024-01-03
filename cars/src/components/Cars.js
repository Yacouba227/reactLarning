import React from "react";


const Car = ({children, color}) => {
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
                {Couleurs}
            </div>
        )
    } else{
        return (
            <div className="Cars" style={{
                background:'pink',
                 width:'400px', 
                 padding:'10px', 
                 margin:'5px auto'
                 }}>
                <p>Pas de data</p>
            </div>
        )
    }
    
}
export default Car; 