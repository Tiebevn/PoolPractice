import * as React from 'react'
import BoutComponent from './BoutComponent'


class BoutOverviewComponent extends React.Component<Bouts> {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Bout number</th>
                        <th>Competitor 1</th>
                        <th>Score</th>
                        <th>Competitor 2</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.bouts.map((bout) => 
                        <BoutComponent bout={bout} index={this.props.bouts.indexOf(bout)+1} key={this.props.bouts.indexOf(bout)+1}/>
                    )}
                </tbody>
                
            </table>
        );
    }
}

export default BoutOverviewComponent