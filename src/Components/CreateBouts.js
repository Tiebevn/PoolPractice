import {Competitor, Bout} from './types'
import {boutOrder} from './Boutorder'

function createBouts(competitors: Array<Competitor>): Array<Bout> {
    var bouts = [];

    boutOrder.map(mapItem => bouts.push({competitorA: competitors[mapItem[0]-1], competitorB: competitors[mapItem[1] - 1]}))
    console.log(bouts)
    return bouts
    
}

export default createBouts