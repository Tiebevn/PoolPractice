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
            loading: true,
            count: 7
        }
    this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount() {
        
        fetch("https://randomuser.me/api/?results="+this.state.count+"&nat=nl")
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

    handleChange(event) {
    this.setState({count: event.target.value});

    }

    render() {
        if (this.state.loading) {
            return(
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        } else  {
            return(
            <div>
            <input type="number" id="count" name="count" min="6" max="8" value={this.state.count} onChange={this.handleChange} />
                <PoolTableComponent competitors={this.state.competitors} />
            <br />
                <BoutOverviewComponent bouts={this.state.bouts} />         
            </div>
        );
        }
    }
}

export default PoolComponent