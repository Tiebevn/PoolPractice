import * as React from 'react'
import {Bout} from './types'
import './Styles/BoutComponent.css'

class BoutComponent extends React.Component<Bout> {
    render() {
        if (this.props.bout.winner === this.props.bout.competitorA) {
            return(
            <tr>
                <td><b>{this.props.bout.competitorA.firstName} {this.props.bout.competitorA.lastName}</b></td>
                <td>{this.props.bout.scoreA}-{this.props.bout.scoreB}</td>
                <td>{this.props.bout.competitorB.firstName} {this.props.bout.competitorB.lastName}</td>
            </tr>
        )
        } else {
            return(
            <tr>
                <td>{this.props.bout.competitorA.firstName} {this.props.bout.competitorA.lastName}</td>
                <td>{this.props.bout.scoreA}-{this.props.bout.scoreB}</td>
                <td><b>{this.props.bout.competitorB.firstName} {this.props.bout.competitorB.lastName}</b></td>
            </tr>
        )
        }

        
    }
}

 export default BoutComponent