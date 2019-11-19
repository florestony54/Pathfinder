import React from 'react';

class Node extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            passable: true,
            color: 'white',
            id: "",
        }

        this.coordinates = this.props.id.split("-"); // 2 item array [x, y]

        this.togglePassable = () => {
            if (this.state.passable === false){
                this.setState({passable: true,
                                color: 'white'})
            } else {
                this.setState({passable: false,
                                color: 'black'})
            }
        }
        // Set START and END nodes
        this.initializeType = () => { 
            if (this.props.id === '4-4') {
                this.setState({ type: 'O'});
            } else if (this.props.id === '4-11'){
                this.setState({type: 'X'})
            }
        }
    }

    // static getDerivedStateFromProps(props, state){
    //     if (props.astar === true) {
    //         return {
    //             color: 'black'
    //         }
    //     }
    //     return null;
    // }

    toggleAStar() {
        if (this.props.astar === true){
            this.togglePassable();
        } else {
            ;
        }
    }

    componentDidMount() {
        this.initializeType();
    }


    render() {

        return (
            
         <td    onClick={this.togglePassable} 
                style={{ background: this.state.color }} 
                id={this.props.id}>
             <p style={{marginBottom: 0}}>{this.state.type}</p>
             {/* <p>{ this.coordinates[0] }</p> */}
         </td>

        )
    }

}

export default Node;