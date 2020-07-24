import store from '../redux/store/index'
import {addBouts} from '../redux/actions/boutActions'


export default function SetAnwerScore(answer){
    let bouts = store.getState()['bouts']
    bouts.bouts.forEach(bout => {
        if (bout.competitorA === answer.competitorA && bout.competitorB === answer.competitorB) {
            bout = setScore(false, answer, bout)
            check(bout)
        } 
        if (bout.competitorA === answer.competitorB && bout.competitorB === answer.competitorA) {
            bout = setScore(true, answer, bout)
            check(bout)
        }

        return function (dispatch) {
            dispatch(addBouts(bouts))
        }

    });
}

function check(bout) {
    if (bout.scoreA === bout.answerScoreA && bout.scoreB === bout.answerScoreB && bout.winner === bout.answerWinner) console.log("You're right")
}

function setScore(crossed, answer, bout) {
    // Parse the score to integer, and swap if necessary
    if (crossed) {
        bout.answerScoreB = parseScore(answer.score)
    } else {
        bout.answerScoreA = parseScore(answer.score)
    }

    // If the scores are tied a winner should be decided by a V in the score
    if (answer.score.includes("V") || answer.score.includes("v")) {
        if (crossed) {
            bout.answerWinner = answer.competitorB
        } else {
            bout.answerWinner = answer.competitorA
        }
    }
    // Otherwise, the heighest scoring fencer wins
    if (bout.answerScoreA > bout.answerScoreB) {
        bout.answerWinner = bout.competitorA
    }
    if (bout.answerScoreA < bout.answerScoreB) {
        bout.answerWinner = bout.competitorB
    }

    return bout
}

function parseScore(score) {
    if (score === "V" || score === "v") return 5
    if (score.includes("V") || score.includes("v")) return parseInt(score.slice(score.length - 1))
    return parseInt(score)
}