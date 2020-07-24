import store from '../redux/store/index'


export default function SetAnwerScore(answer: Bout): Array<Bout> {
    let bouts = store.getState()['bouts']
    bouts.bouts.forEach(bout => {
        if (bout.competitorA === answer.competitorA && bout.competitorB === answer.competitorB) {
            bout.answerScoreA = parseInt(answer.score)
            if (bout.scoreA === bout.answerScoreA && bout.scoreB === bout.answerScoreB) console.log("You're right")
            console.log(bout)
        } 
        if (bout.competitorA === answer.competitorB && bout.competitorB === answer.competitorA) {
            bout.answerScoreB = parseInt(answer.score)
            if (bout.scoreA === bout.answerScoreA && bout.scoreB === bout.answerScoreB) console.log("You're right")
            console.log(bout)
        }

    });
}