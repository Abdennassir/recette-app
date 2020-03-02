import React from 'react'

const Card  = ({detail: details}) => {

    const  ingredients = details.ingredients
                                .split(',')
                                .map((data,key)=> <li key={key} >{data}</li>)
    const  instructions = details.instructions
                                .split('\n')
                                .map((data,key)=> <li key={key}>{data}</li>)
    const requiredImage = src => {

        try {
            return require(`../img/${src}`)
        }catch(e){
            return require(`../img/default.jpeg`)
        }

    }
    return (
        <div className='card'>
            <div className='image'>
                <img src={requiredImage(details.image)} alt={details.nom} />
            </div>
            <div className='recette'>
                <h2>{details.nom}</h2>
                <ul className='liste-ingredients'>
                     {ingredients}
                </ul>
                <ol className='liste-instructions'>
                  {instructions}
                </ol>
            </div>
            <p>{details.antho}</p>
        </div>
    )
}

export default Card