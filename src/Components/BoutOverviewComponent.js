import * as React from 'react'
import BoutComponent from './BoutComponent'




const BoutOverviewComponent = ({list}) => (
    <table>
                <thead>
                    <tr>
                        <th>Bout number</th>
                        <th>Competitor 1</th>
                        <th>Score</th>
                        <th>Competitor 2</th>
                        <th>Correct</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((bout) => 
                        <BoutComponent {...bout} key={bout.id}/>
                    )}
                </tbody>
                
            </table>
)




export default BoutOverviewComponent