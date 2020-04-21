import {Competitor, Bout} from '../types/types'
import {boutOrder8, boutOrder7, boutOrder6} from '../data/Boutorder'
import {addBouts} from '../redux/actions/boutActions'


function createBouts(competitors: Array<Competitor>): Array<Bout> {
    var bouts = [];    
    var order
    switch (competitors.length) {
        case 6:
            order = boutOrder6
            break;
        case 7:
            order = boutOrder7
            break;
        
        case 8:
            order = boutOrder8
            break;
        default:
            order = boutOrder7
            break;
    }

    order.map(mapItem =>
        bouts.push(getRandomScores({competitorA: competitors[mapItem[0]-1], competitorB: competitors[mapItem[1] - 1], scoreA: -1, scoreB: -1, winner: null}))
    )

    return function (dispatch) {
        dispatch(addBouts(bouts))
    }
    
}

function getRandomScores(bout: Bout): Bout {

    // We assume 80% of all bouts are won 5-something, and the rest is won with a score less than 5 or a priority
    while (bout.scoreA < 0 && bout.scoreB < 0) {
        if (Math.floor(Math.random() *5)<= 3) {
            // One winner with 5 in 80% of cases
            if (Math.round(Math.random()) === 0) {
                bout.winner = bout.competitorA
                bout.scoreA = 5
                bout.scoreB = Math.floor(Math.random() * 5)
            } else {
                bout.winner = bout.competitorB
                bout.scoreB = 5
                bout.scoreA = Math.floor(Math.random() * 5)
            }
        } else {
            bout.scoreA = Math.floor(Math.random() * 5)
            bout.scoreB = Math.floor(Math.random() * 5)

            if(bout.scoreA > bout.scoreB) {
                bout.winner = bout.competitorA
            } else if (bout.scoreB > bout.scoreA) {
                bout.winner = bout.competitorB
            } else {
                if (Math.round(Math.random()) === 0) {
                    bout.winner = bout.competitorA
                } else {
                    bout.winner = bout.competitorB
                }
            }
        }
    }


    return bout
}

export default createBouts