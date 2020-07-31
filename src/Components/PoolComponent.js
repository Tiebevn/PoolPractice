import React from 'react'
import PoolTableComponent from './PoolTableComponent'
import getCompetitors from '../api/getUsers'
import { connect } from "react-redux"
import BoutOverviewComponent from './BoutOverviewComponent'
import checkScores from '../api/checkScores'
import createBouts from '../api/CreateBouts'
import {changeCapacity} from '../redux/actions/competitorActions'



class PoolComponent extends React.Component {

    constructor() {
        super()
        this.updateView = this.updateView.bind(this)
    }
    async updateView() {
        await this.props.getCompetitors(this.props.capacity)
        this.props.createBouts(this.props.competitors)
    }
    async componentDidMount() {
            this.updateView()
        
    }
    async componentDidUpdate(prevProps) {
        if (this.props.capacity !== prevProps.capacity) {
            this.updateView()
        }
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
                <input type="number" max="8" min="6" value={this.props.capacity} onChange={e => this.props.changeCapacity(parseInt(e.target.value))}/>
                <PoolTableComponent />
                <br />
                <BoutOverviewComponent {...this.props.bouts}/>
                <br />
                <button onClick={this.props.checkScores}>Check scores</button>
            </div>
        );
        }
    }
}


const mapStateToProps = state => {
    return {competitorsLoading: state.competitors.isFetching, 
            competitors: state.competitors.list, 
            boutsLoading: state.bouts.isLoading, 
            bouts: state.bouts, 
            capacity: state.competitors.capacity
            }
}

const mapDispatchToProps = {
    getCompetitors, checkScores, createBouts, changeCapacity
}


export default connect(mapStateToProps, mapDispatchToProps)(PoolComponent)