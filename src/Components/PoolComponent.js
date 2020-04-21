import React from 'react'
import {Pool} from '../types/types'
import PoolTableComponent from './PoolTableComponent'
import getCompetitors from '../api/getUsers'
import { connect } from "react-redux"





class PoolComponent extends React.Component<Pool> {

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
            </div>
        );
        }
    }
}


const mapStateToProps = state => {
    return {isLoading: state.competitors.isFetching}
}

const mapDispatchToProps = {
    getCompetitors
}


export default connect(mapStateToProps, mapDispatchToProps)(PoolComponent)