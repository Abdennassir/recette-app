import React, { Component } from 'react'
// CSS
import './App.css'

import Header from  './components/Header'
import Admin from './components/Admin'

import base from './base'
import 'bootstrap/dist/css/bootstrap.min.css'
import withRecette from "./hoc/withRecette";


const  App =  (props) =>  {
  return (
    <div className='container'>
      <Header
        pseudo = {props.match.params.pseudo}
      />
      <div className='cards'>
      <Admin 

      pseudo = { props.pseudo }
      addRecette={ props.addRecette }
      updateRecette={ props.updateRecette }
      recettes={ props.recettes }
      deleteRecette = {props.deleteRecette }
        chargerRecette={ props.chargerRecette }/>
      </div>
   </div>
  )
}


const WrappedComponent = withRecette(App)
export default  WrappedComponent
