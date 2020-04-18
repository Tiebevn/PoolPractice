import * as React from 'react'
import {Bout} from './types'
import './Styles/BoutComponent.css'

class BoutComponent extends React.Component<Bout> {
    render() {
        return(
            <tr>
                <td>{this.props.competitorA.firstName} {this.props.competitorA.lastName}</td>
                <td>{this.props.scoreA}-{this.props.scoreB}</td>
                <td>{this.props.competitorB.firstName} {this.props.competitorB.lastName}</td>
            </tr>
        )
    }
}

 export default BoutComponent