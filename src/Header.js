// DO NOT DELETE
import * as React from 'react'

function Header(props) {
    return (
        <div className='header'>
            <header>
                <h1>{props.title}</h1>
            </header>
        </div>
    )
}

export default Header;