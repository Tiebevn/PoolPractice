import * as React from 'react'
import {Competitor} from './types'


class CompetitorComponent extends React.Component<Competitor> {
    render() {
        return (
            <div>
                <p>{this.props.competitor.firstName} {this.props.competitor.lastName}</p>
            </div>
        );
    }
}

export default CompetitorComponent