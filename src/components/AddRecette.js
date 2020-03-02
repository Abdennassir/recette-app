import React, { Component } from 'react'

export default class AddRecette extends Component {

    state = {
        'nom':            '',
        'photo':          '',
        'ingredients':    '',
        'instructions':   ''
    }

    handleChange = event => {

        const { id, value } = event.target
        this.setState({ [id]: value } )

    }

    handleAddRecette = event => {

        event.preventDefault()
        const recette = this.state
        this.props.addRecette(recette)

    }

    render() {
        return (
            
                <form action="/action_page.php" onSubmit={ this.handleAddRecette }>
                    <div className="form-group">
                        <label for="nom">Nom:</label>
                        <input type="nom" class="form-control" id="nom" onChange={ this.handleChange } value={  this.state.nom }  />
                    </div>
                    <div className="form-group">
                        <label for="photo">Photo:</label>
                        <input type="photo" class="form-control" id="photo" onChange={ this.handleChange } value={  this.state.photo }   />
                    </div>
                    <div className="form-group">
                        <label for="ingredients">Ingredients:</label>
                        <input type="ingredients" class="form-control" id="ingredients" onChange={ this.handleChange } value={  this.state.ingredients }  />
                    </div>
                    <div className="form-group">
                        <label for="instructions">Instructions:</label>
                        <input type="instructions" class="form-control" id="instructions" onChange={ this.handleChange } value={  this.state.instructions }  />
                    </div>               
                    <div className="form-group">
                        <button type="submit" class="btn btn-success">Submit</button>
                    </div>
                </form>
            
        )
    }
}
