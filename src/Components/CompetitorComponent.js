import * as React from 'react'
import {Competitor} from './types'


class CompetitorComponent extends React.Component<Competitor> {
    render() {
        return (
                <p>({this.props.competitor.index}) {this.props.competitor.firstName} {this.props.competitor.lastName}</p>
        );
    }
}

export default CompetitorComponent