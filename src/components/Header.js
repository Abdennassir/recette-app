import React from 'react'

const Header = ({pseudo}) => {

    const  headerFormated = pseudo => {

        return /^[aeoiuy]/i.test(pseudo) ? `d'${pseudo}` :  `de ${pseudo}`
    }

    return (
    <header>
       <h1>Bienvenus sur le resto  {headerFormated(pseudo)}</h1> 
    </header>
    )
}

export default Header