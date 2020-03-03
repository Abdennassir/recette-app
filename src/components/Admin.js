import React, { Component } from 'react'

import Card from './Card'
import AddRecette from './AddRecette'
import UpdateRecette from "./UpdateRecette";

export default class Admin extends Component {

    render() {
        const  listRecettes = Object.keys(this.props.recettes)
                                    .map(key => ( <Card 
                                                        key={ key }
                                                        id = { key }
                                                        deleteRecette = { this.props.deleteRecette }
                                                        detail={this.props.recettes[key]} />))

        const updateRecetteList = Object.keys(this.props.recettes)
                                        .map(key => (
                                            <UpdateRecette 
                                                key = { key }
                                                id = { key }
                                                recette = { this.props.recettes[key] }
                                                updateRecette = { this.props.updateRecette }

                                            />
                                        ))

        return (
            <div>
                <div className="row">
                    { listRecettes }
                </div>
                
                <AddRecette 
                addRecette={ this.props.addRecette } />
                <div className="row">
                    { updateRecetteList }
                </div>
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
