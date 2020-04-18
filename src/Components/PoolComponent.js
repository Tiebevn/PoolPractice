import React from 'react'
import {Pool} from './types'
import CompetitorComponent from './CompetitorComponent'
import createBouts from './CreateBouts'
import BoutComponent from './BoutComponent'



class PoolComponent extends React.Component<Pool> {
    constructor(props) {
        super(props)

        this.state = {
            competitors: [],
            bouts: [],
        }

    }
    
    componentDidMount() {
        
        fetch("https://randomuser.me/api/?results=8&nat=nl")
        .then(res => res.json())
        .then(data => {
            var list = [];
            data.results.map(fencer => list.push({firstName: fencer.name.first, lastName: fencer.name.last, index: data.results.indexOf(fencer)+1}))
            return list
        })
        .then(list => {
            this.setState({competitors: list})
            return list
        })
        .then(list => {
            this.setState({bouts: createBouts(list)})
        })

    }



    render() {
        return(
            <div>
            <table> 
            <thead>
            <tr>
            <th>Name</th>
            {this.state.competitors.map(competitor => 
                <th>{this.state.competitors.indexOf(competitor) + 1}</th>
            )}
            </tr>
            </thead>
            <tbody>

                {this.state.competitors.map(competitor => {
                return (
                <tr><td>
                    <CompetitorComponent competitor={competitor} key={competitor.index}/>
                </td>
                
                {this.state.competitors.map(fencer => {
                    if(fencer === competitor) {
                        return (
                            <td style={{width: 50, background: 'black'}}></td> 
                        )
                    } else {
                        return(                      
                            <td style={{width: 50}}></td>                 
                    )
                    }
                })}

                </tr>
                )
            })}

            </tbody>
            

            </table>
            <br />

            <table>
            <thead>
            </thead>
            <tbody>
                {this.state.bouts.map((bout) => 
                    <BoutComponent bout={bout} index={this.state.bouts.indexOf(bout)} key={this.state.bouts.indexOf(bout)}/>
                )}
            </tbody>
                
            </table>

            <table>
            

            
            </table>
            </div>
        );
    }
}

export default PoolComponent