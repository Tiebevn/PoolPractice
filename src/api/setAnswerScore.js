import store from '../redux/store/index'
import {addBouts} from '../redux/actions/boutActions'


export default function SetAnwerScore(answer){
    let bouts = store.getState()['bouts']
    bouts.list.forEach(bout => {
        if (bout.competitorA === answer.competitorA && bout.competitorB === answer.competitorB) {
            bout = setScore(false, answer, bout)
        } 
        if (bout.competitorA === answer.competitorB && bout.competitorB === answer.competitorA) {
            bout = setScore(true, answer, bout)
        }

        return function (dispatch) {
            dispatch(addBouts(bouts))
        }

    });
}


function setScore(crossed, answer, bout) {
    // Parse the score to integer, and swap if necessary
    if (crossed) {
        bout.answerScoreB = answer.score
    } else {
        bout.answerScoreA = answer.score
    }

    
    return bout
}

