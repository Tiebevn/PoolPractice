import {getDataSuccess} from '../redux/actions/dataActions'
import getRandomNumbers from './getRandomNumbers'
import userData from '../data/mockdata'

function getCompetitors()  {
      console.log('Loading')
      var data = []

      var numbers = getRandomNumbers()
      numbers.forEach(number => {
        data.push(userData[number])
      })
      
      return function (dispatch) {
            dispatch(getDataSuccess(data))
      }


}

export default getCompetitors