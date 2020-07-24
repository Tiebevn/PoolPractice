import * as React from 'react'
import setAnwerScore from '../api/setAnswerScore'
import CompetitorComponent from './CompetitorComponent'
import { connect } from "react-redux"


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
                
                {this.props.competitors.map(opponent => {
                    if(opponent === competitor) {
                        return (
                            <td style={{width: 50, background: 'black', height: 50}}></td> 
                        )
                    } else {
                        return(                      
                            <td style={{width: 50, height: 50}}>
                                <input 
                                type="text" 
                                style={{width: 50, height: 50, outline: 0, border: "none"}}
                                onChange={e => setAnwerScore({competitorA: competitor, competitorB: opponent, score: e.target.value})}
                                />
                            </td>                 
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

const mapStateToProps = state => {
    return {competitors: state.competitors.list}
}
export default connect(mapStateToProps)(PoolTableComponent)