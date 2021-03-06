import React from 'react'
import PoolTableComponent from './PoolTableComponent'
import getCompetitors from '../api/getUsers'
import { connect } from "react-redux"
import BoutOverviewComponent from './BoutOverviewComponent'
import checkScores from '../api/checkScores'
import createBouts from '../api/CreateBouts'
import {changeCapacity} from '../redux/actions/competitorActions'
import '../Styles/PoolComponent.css'



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
            <div class='root'>
                <div class='left-container'>
                    <input type="number" max="8" min="6" value={this.props.capacity} onChange={e => this.props.changeCapacity(parseInt(e.target.value))}/>
                    <PoolTableComponent />
                    <button onClick={this.props.checkScores}>Check scores</button>
                </div>
                <div class='right-container'>
                    <BoutOverviewComponent {...this.props.bouts}/>
                    <div>
                        <h2>Pool Practice</h2>
                        <h4>How it works</h4>
                        <p>Using the data on the right side, fill in the pool sheet. The bold names in the table indicate the winner (in case of a tie).</p>
                        <p>When you are finished click 'Check Scores' to correct the sheet. In the last column of the data sheet, you can check your progress. If the bout is correctly entered in the pool sheet, it will display 'OK'. If you hover over a 'NOK', you will also be able to see the errors you made.</p>
                    </div>
                </div>
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