import React from 'react'
import PoolTableComponent from './PoolTableComponent'
import getCompetitors from '../api/getUsers'
import { connect } from "react-redux"
import BoutOverviewComponent from './BoutOverviewComponent'
import checkScores from '../api/checkScores'


class PoolComponent extends React.Component {

    componentDidMount() {
        this.props.getCompetitors()
        
    }
    render() {
        if (this.props.isLoading) {
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
    return {isLoading: state.competitors.isFetching}
}

const mapDispatchToProps = {
    getCompetitors, checkScores
}


export default connect(mapStateToProps, mapDispatchToProps)(PoolComponent)