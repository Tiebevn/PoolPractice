import * as React from 'react'
import CompetitorComponent from './CompetitorComponent'

class PoolTableComponent extends React.Component<Competitors> {
    render() {
        return(
            <table> 
            <thead>
            <tr>
            <th>Name</th>
            {this.props.competitors.map(competitor => 
                <th>{this.props.competitors.indexOf(competitor) + 1}</th>
            )}
            </tr>
            </thead>
            <tbody>

                {this.props.competitors.map(competitor => {
                return (
                <tr><td>
                    <CompetitorComponent competitor={competitor} key={competitor.index}/>
                </td>
                
                {this.props.competitors.map(fencer => {
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
        );
    }
}


export default PoolTableComponent