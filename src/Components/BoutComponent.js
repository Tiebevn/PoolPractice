import * as React from 'react'
import {Bout} from './types'
import './Styles/BoutComponent.css'
import CompetitorComponent from './CompetitorComponent'

class BoutComponent extends React.Component<Bout> {
    render() {
        if (this.props.bout.winner === this.props.bout.competitorA) {
            return(
            <tr>
                <td>{this.props.index}</td>
                <td><b><CompetitorComponent competitor={this.props.bout.competitorA}/></b></td>
                <td>{this.props.bout.scoreA}-{this.props.bout.scoreB}</td>
                <td><CompetitorComponent competitor={this.props.bout.competitorB}/></td>
            </tr>
        )
        } else {
            return(
            <tr>
                <td>{this.props.index}</td>
                <td><CompetitorComponent competitor={this.props.bout.competitorA}/></td>
                <td>{this.props.bout.scoreA}-{this.props.bout.scoreB}</td>
                <td><b><CompetitorComponent competitor={this.props.bout.competitorB}/></b></td>
            </tr>
        )
        }

        
    }
}

 export default BoutComponent