import * as React from 'react'
import {Competitor} from '../types/types'


class CompetitorComponent extends React.Component<Competitor> {
    render() {
        return (
                <span> {this.props.competitor.name.first} {this.props.competitor.name.last}</span>
        );
    }
}

export default CompetitorComponent