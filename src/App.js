import React, { Component } from 'react'
// CSS
import './App.css'

import Header from  './components/Header'
import recettes from './recettes'
import Admin from './components/Admin'

import base from './base'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }
  
  chargerRecette = () => {
    this.setState({ recettes })
  }

  componentDidMount () {

    base.syncState(`/${this.state.pseudo}/recettes`,{
      context:this,
      state: 'recettes'
    }
    )
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

  render () { 
    return (
      <div className='container'>
        <Header
          pseudo = {this.state.pseudo}
        />
        <div className='cards'>
         <Admin 

         addRecette={ this.addRecette }
         updateRecette={ this.updateRecette }
         recettes={ this.state.recettes }
         deleteRecette = {this.deleteRecette }
          chargerRecette={ this.chargerRecette }/>
        </div>
       </div>
    )
  }
}

export default App
