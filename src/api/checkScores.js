import store from '../redux/store/index'
import {addBouts} from '../redux/actions/boutActions'
import * as Errors from '../data/errorMsg'

function checkScores() {

    let bouts = store.getState()['bouts']['list']
    bouts.forEach(bout => {
            bout.correct ="NOK"
            let parsedA = parseScore(bout.answerScoreA)
            let parsedB = parseScore(bout.answerScoreB)
       
            if (bout.scoreA === bout.scoreB) {
                if (parsedA.hasWinner) {
                    bout.answerWinner = bout.competitorA
                } else if (parsedB.hasWinner) {
                    bout.answerWinner = bout.competitorB
                } else {
                    // No V was put on tied scores error
                }
            } else if (bout.scoreA === 5 || bout.scoreB === 5) {
                if (isNaN(parsedA.number) && parsedA.hasWinner && parsedB.number < 5) {
                    parsedA.number = 5
                } else if (isNaN(parsedB.number) && parsedB.hasWinner && parsedA.number < 5) {
                    parsedB.number = 5
                } else if (parsedA.number === 5 ) {
                    parsedA.error += Errors.V_IN_MAXBOUT
                } else if (parsedB.number === 5) {
                    parsedB.error += Errors.V_IN_MAXBOUT
                }
            } else {
                if (parsedA.hasWinner) {
                    parsedA.error += Errors.V_IN_NON_TIED_BOUT
                } else if (parsedB.hasWinner) {
                    parsedB.error += Errors.V_IN_NON_TIED_BOUT
                }
            }
        if (parsedA.number > parsedB.number) bout.answerWinner = bout.competitorA
        if (parsedA.number < parsedB.number) bout.answerWinner = bout.competitorB

        if (bout.scoreA === parsedA.number && bout.scoreB === parsedB.number && bout.winner === bout.answerWinner && !parsedA.error.length > 0 && !parsedB.error.length > 0) {
            
                bout.correct = "OK"
                bout.error = ""
            

        }

         if (parsedA.error.length > 0 || parsedB.error.length > 0) {
                bout.error = parsedA.error + " - " + parsedB.error
            
            }
    });

    
    return function (dispatch) {
        dispatch(addBouts(bouts))
    }
}

function parseScore(score) {
    var retObj = {
        number: -1,
        hasWinner: null,
        error: ""
    }
    if (score.length > 2) {
        retObj.error = Errors.INVALID_SCORE
    }
    if (score.toLowerCase().includes("d")) {
        retObj.error = Errors.D_IN_SCORE
    }

    retObj.hasWinner = score.toLowerCase().includes("v")
    retObj.number = parseInt(score.slice(-1))

    if (retObj.number > 5) {
        retObj.error = Errors.INVALID_SCORE
    }
    return retObj
}


export default checkScores