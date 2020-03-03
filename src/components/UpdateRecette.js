import React, { Component } from 'react'

export default class UpdateRecette extends Component {

  
    state = {
        'nom':           this.props.recette.nom,
        'image':          this.props.recette.image,
        'ingredients':    this.props.recette.ingredients,
        'instructions':   this.props.recette.instructions
    }

    handleChange = event => {

        const { id, value } = event.target
        this.setState({ [id]: value } )

    }

    handleUpdateRecette = event => {

        event.preventDefault()
        this.props.updateRecette(this.props.id,this.state)

    }

    render() {
        return (
            
              <div className="col-sm-4">
                  <div className="thumbnails">
                    <form  onSubmit={this.handleUpdateRecette }>
                        <div className="form-group">
                        
                            <input type="nom" class="form-control" placeholder ='Nom' id="nom" onChange={ this.handleChange } value={  this.state.nom }  />
                        </div>
                        <div className="form-group">
                            
                            <input type="photo" class="form-control" placeholder ='Photo'  id="image" onChange={ this.handleChange } value={  this.state.image }   />
                        </div>
                        <div className="form-group">
                            
                            <input type="ingredients" class="form-control" placeholder ='ingredients'  id="ingredients" onChange={ this.handleChange } value={  this.state.ingredients }  />
                        </div>
                        <div className="form-group">
                            
                            <input type="instructions" class="form-control" placeholder ='Instructions'  id="instructions" onChange={ this.handleChange } value={  this.state.instructions }  />
                        </div>               
                        <div className="form-group">
                            <button type="submit" class="btn btn-warning">Update Recette</button>
                        </div>
                    </form>
                </div>
            </div>
           
        )
    }
}
