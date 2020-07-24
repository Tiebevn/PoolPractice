import * as React from 'react'
import BoutComponent from './BoutComponent'
import { connect } from "react-redux"
import createBouts from '../api/CreateBouts'



class BoutOverviewComponent extends React.Component<Bouts> {
    componentDidMount() {
        this.props.createBouts(this.props.competitors)
     }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Bout number</th>
                        <th>Competitor 1</th>
                        <th>Score</th>
                        <th>Competitor 2</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.bouts.map((bout) => 
                        <BoutComponent bout={bout} index={this.props.bouts.indexOf(bout)+1} key={this.props.bouts.indexOf(bout)+1}/>
                    )}
                </tbody>
                
            </table>
        );
    }
}


const mapStateToProps = state => {
    return {bouts: state.bouts.bouts, competitors: state.competitors.list}
}

const mapDispatchToProps = {
    createBouts
}

export default connect(mapStateToProps, mapDispatchToProps)(BoutOverviewComponent)