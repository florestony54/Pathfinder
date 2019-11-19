import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div className='navbar navbar-dark bg-dark'>
                <nav className='navbar-brand'>Pathfinder</nav>
            </div>
        )
    }
}

export default Navbar;