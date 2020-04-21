import {getDataPending, getDataSuccess, getDataError} from '../redux/actions/dataActions'

function getCompetitors()  {
      return function (dispatch) {
          dispatch(getDataPending())
          return fetch("https://randomuser.me/api/?results=7&nat=nl")
        .then(res => res.json(), error => dispatch(getDataError(error)))
        .then(data => {
            dispatch(getDataSuccess(data.results))
        })
      }


}

export default getCompetitors