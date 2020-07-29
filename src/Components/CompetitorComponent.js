import * as React from 'react'



class CompetitorComponent extends React.Component {
    render() {
        return (
                <span> {this.props.competitor.name.first} {this.props.competitor.name.last} </span>
        );
    }
}

export default CompetitorComponent