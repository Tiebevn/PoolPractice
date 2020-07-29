import * as React from 'react'
import BoutComponent from './BoutComponent'
import { connect } from "react-redux"
import createBouts from '../api/CreateBouts'



class BoutOverviewComponent extends React.Component {
    

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Bout number</th>
                        <th>Competitor 1</th>
                        <th>Score</th>
                        <th>Competitor 2</th>
                        <th>Correct</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.bouts.map((bout) => 
                        <BoutComponent index={bout.id} key={bout.id}/>
                    )}
                </tbody>
                
            </table>
        );
    }
}


const mapStateToProps = state => {
    return {bouts: state.bouts.list, competitors: state.competitors.list}
}



export default connect(mapStateToProps)(BoutOverviewComponent)