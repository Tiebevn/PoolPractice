import * as React from 'react'
import './../Styles/BoutComponent.css'
import CompetitorComponent from './CompetitorComponent'

const BoutComponent = ({id, competitorA, competitorB, scoreA, scoreB, correct, winner}) => {
    if (competitorA === winner) {
        return(
            <tr>
                <td>{id}</td>
                <td><b><CompetitorComponent competitor={competitorA}/></b></td>
                <td>{scoreA}-{scoreB}</td>
                <td><CompetitorComponent competitor={competitorB}/></td>
                <td>{correct}</td>
            </tr>
        )
    } else {
            return(
                <tr>
                <td>{id}</td>
                <td><CompetitorComponent competitor={competitorA}/></td>
                <td>{scoreA}-{scoreB}</td>
                <td><b><CompetitorComponent competitor={competitorB}/></b></td>
                <td>{correct}</td>
            </tr>
            )
    }
}
        

    


 export default BoutComponent