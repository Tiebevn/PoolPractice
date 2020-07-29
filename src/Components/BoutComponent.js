import * as React from 'react'
import { connect } from "react-redux"
import './../Styles/BoutComponent.css'
import CompetitorComponent from './CompetitorComponent'

class BoutComponent extends React.Component {
    render() {
        let bout = this.props.bouts[this.props.index -1]
        if (bout.winner === bout.competitorA) {
            return(
            <tr>
                <td>{bout.id}</td>
                <td><b><CompetitorComponent competitor={bout.competitorA}/></b></td>
                <td>{bout.scoreA}-{bout.scoreB}</td>
                <td><CompetitorComponent competitor={bout.competitorB}/></td>
                <td>{bout.correct}</td>
            </tr>
        )
        } else {
            return(
            <tr>
                <td>{bout.id}</td>
                <td><CompetitorComponent competitor={bout.competitorA}/></td>
                <td>{bout.scoreA}-{bout.scoreB}</td>
                <td><b><CompetitorComponent competitor={bout.competitorB}/></b></td>
                <td>{bout.correct}</td>
            </tr>
        )
        }

        
    }
}

const mapStateToProps = state => {
    return {bouts: state.bouts.bouts}
}

 export default connect(mapStateToProps)(BoutComponent)