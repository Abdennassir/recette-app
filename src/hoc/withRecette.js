import React, { Component } from 'react'
import recettes from '../recettes'

import base from "../base";

const withRecette = WrappedComponent => {

        class HOC extends Component {

            state = {
                pseudo: this.props.match.params.pseudo,
                recettes: {}
              }

            componentDidMount () {

                base.syncState(`/${this.state.pseudo}/recettes`,{
                  context:this,
                  state: 'recettes'
                }
                )
              }
            chargerRecette = () => {
                this.setState({ recettes })
            }

            addRecette = recette => {
                const recettes =  this.state.recettes
                recettes[`recette-${Date.now()}`] = recette
                this.setState({recettes})
            
              }
            
              updateRecette = (key,newRecette) => {
                const recettes =  this.state.recettes
                recettes[key] = newRecette
                this.setState({recettes})
            
              }
            
              deleteRecette = (key) => {
                const recettes =  this.state.recettes
                recettes[key] = null
                this.setState({recettes})
            
              }

            render() {
                return (
                    <WrappedComponent

                    addRecette={ this.addRecette }
                    updateRecette={ this.updateRecette }
                    recettes={ this.state.recettes }
                    deleteRecette = {this.deleteRecette }

                    {...this.props}
                    />
                )
            }
        }

}

export default withRecette