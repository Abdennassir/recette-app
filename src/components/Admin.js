import React, { Component } from 'react'

import Card from './Card'
import AddRecette from './AddRecette'

export default class Admin extends Component {

    render() {
        const  listRecettes = Object.keys(this.props.recettes)
        .map(key => ( 
        <Card 
        key={ key }
        detail={this.props.recettes[key]} />
          ))

        return (
            <div>
                { listRecettes }
                <AddRecette 
                
                addRecette={ this.props.addRecette } />
                <footer>
                <button 
                     onClick = {this.props.chargerRecette}
                    className=" btn btn-primary laod-recette">
                    Charger les recettes</button>
                </footer>
                
            </div>
        )
    }
}
