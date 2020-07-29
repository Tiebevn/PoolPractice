import {getDataSuccess} from '../redux/actions/dataActions'
import getRandomNumbers from './getRandomNumbers'
import userData from '../data/mockdata'

function getCompetitors()  {
      var data = []
      var id = 1
      var numbers = getRandomNumbers()
      numbers.forEach(number => {
        userData[number].id = id
        data.push(userData[number])
        id++
      })


      return function (dispatch) {
            dispatch(getDataSuccess(data))
      }


}

export default getCompetitors