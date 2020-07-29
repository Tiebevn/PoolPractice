import React from 'react'
import PoolTableComponent from './PoolTableComponent'
import getCompetitors from '../api/getUsers'
import { connect } from "react-redux"
import BoutOverviewComponent from './BoutOverviewComponent'
import checkScores from '../api/checkScores'
import createBouts from '../api/CreateBouts'



class PoolComponent extends React.Component {

    async componentDidMount() {
        
            await this.props.getCompetitors()
            this.props.createBouts(this.props.competitors)
        
    }
    render() {
        if (this.props.competitorsLoading || this.props.boutsLoading) {
            return(
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        } else  {
            return(
            <div>
                <PoolTableComponent />
                <br />
                <BoutOverviewComponent />
                <br />
                <button onClick={this.props.checkScores}>Check scores</button>
            </div>
        );
        }
    }
}


const mapStateToProps = state => {
    return {competitorsLoading: state.competitors.isFetching, competitors: state.competitors.list, boutsLoading: state.bouts.isLoading}
}

const mapDispatchToProps = {
    getCompetitors, checkScores, createBouts
}


export default connect(mapStateToProps, mapDispatchToProps)(PoolComponent)