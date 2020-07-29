import store from '../redux/store/index'
import {addBouts} from '../redux/actions/boutActions'

function checkScores() {

    let bouts = store.getState()['bouts']['list']
    bouts.forEach(bout => {  
        if (bout.scoreA === bout.answerScoreA && bout.scoreB === bout.answerScoreB && bout.winner === bout.answerWinner) {
            bout.correct = "OK"
        }
    });

    
    return function (dispatch) {
        dispatch(addBouts(bouts))
    }
    


}


export default checkScores