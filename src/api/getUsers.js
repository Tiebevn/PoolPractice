import {addCompetitors} from '../redux/actions/competitorActions'
import getRandomNumbers from './getRandomNumbers'
import userData from '../data/mockdata'

function getCompetitors(capacity)  {
      var data = []
      var id = 1
      var numbers = getRandomNumbers(capacity)
      numbers.forEach(number => {
        userData[number].id = id
        data.push(userData[number])
        id++
      })


      return function (dispatch) {
            dispatch(addCompetitors(data))
      }


}

export default getCompetitors