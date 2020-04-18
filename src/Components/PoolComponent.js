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
            data.results.map(fencer => list.push({firstName: fencer.name.first, lastName: fencer.name.last}))
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
            <tr>
            <th>Name</th>
            {this.state.competitors.map(competitor => 
                <th>{this.state.competitors.indexOf(competitor) + 1}</th>
            )}
            </tr>
            {this.state.competitors.map(competitor => {
                return (
                <tr><td>
                    <CompetitorComponent competitor={competitor}/>
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

            </table>
            <br />

            <table>
                {this.state.bouts.map((bout) => 
                    <BoutComponent competitorA={bout.competitorA} competitorB={bout.competitorB} scoreA={bout.scoreA} scoreB={bout.scoreB}/>
                )}
            </table>

            <table>
            

            
            </table>
            </div>
        );
    }
}

export default PoolComponent