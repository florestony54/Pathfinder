import React from 'react';
import Row from './Row';
import GridIdData from './GridIdData';
import Button from  './Button';


class Grid extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            coordinates: [],
            algorithm: ''
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);

    }

    handleButtonClick = () => {
        this.setState({algorithm: 'astar'})
        console.log(this.state.algorithm)
    }

    componentDidMount(){

    }

    render() {
        const algorithm = this.state.algorithm;
        let toggleAStar;

        if (algorithm == 'astar') {
            toggleAStar = true;
        } else {
            toggleAStar = false;
        }

        return (
            <div>
                <Button name='AStar' onClick={this.handleButtonClick} />
                <table id="grid">
                    {GridIdData.map( function(row, idx) {
                        return <Row id={idx} astar={toggleAStar} />
                    })}
                    {/* {console.log(GridIdData)}  */}
                </table>
            </div>
        )
    }
}

export default Grid