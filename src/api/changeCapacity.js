import {changeCapacity} from '../redux/actions/competitorActions'

function changeCapacityHandler(capacity)  {
     
      return function (dispatch) {
            dispatch(changeCapacity(capacity))
      }


}

export default changeCapacityHandler