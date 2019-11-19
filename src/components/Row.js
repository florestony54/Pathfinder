import React from 'react';
import Node from './Node';
import GridIdData from './GridIdData';

class Row extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }

        this.items = GridIdData.slice(this.props.id, this.props.id + 1);

    }


    render() {
        const aStar = this.props.astar;
        return (
           <tr id={this.props.id}>
               {this.items.map( function(row){
                        return row.map( function(item){
                                return <Node id={item} astar={aStar}/>
                                })
                            }
                        )
                    }
           </tr>
        )
    }

}

export default Row;