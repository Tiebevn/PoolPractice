import React from 'react'
import {Pool} from './types'
import PoolTableComponent from './PoolTableComponent'
import createBouts from './CreateBouts'
import BoutOverviewComponent from './BoutOverviewComponent'



class PoolComponent extends React.Component<Pool> {
    constructor(props) {
        super(props)

        this.state = {
            competitors: [],
            bouts: [],
            loading: true
        }

    }
    
    componentDidMount() {
        
        fetch("https://randomuser.me/api/?results=8&nat=nl")
        .then(res => res.json())
        .then(data => {
            var list = [];
            data.results.map(fencer => list.push({firstName: fencer.name.first, lastName: fencer.name.last, index: data.results.indexOf(fencer)+1}))
            return list
        })
        .then(list => {
            this.setState({competitors: list, bouts: createBouts(list)})
        })
        .then(this.setState({loading: false}))
    }



    render() {
        console.log(this.state.loading)
        if (this.state.loading) {
            return(
                <p>Loading</p>
            )
        } else  {
            return(
            <div>
            <PoolTableComponent competitors={this.state.competitors} />
            <br />
            <BoutOverviewComponent bouts={this.state.bouts} />         
            </div>
        );
        }
    }
}

export default PoolComponent