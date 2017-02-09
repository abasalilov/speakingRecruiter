export default function({ dispatch }) {
  return next => action => {

    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    action.payload
    .then(function(response, err) {
      if(response.request === undefined){
      response.json()
      .then(function(r,e) {
        console.log('r',r);
        console.log('e',e)
        const newAction = {...action, payload: r };
        dispatch(newAction);
      })
      } else {
        console.log('stringify', JSON.parse(response.request.responseText) )
        const newAction = {...action, payload: JSON.parse(response.request.responseText) };
        dispatch(newAction);
      }
    })
  }
}
