export default function createStore(reducer) {
  let state = reducer(state, {type: "@@INIT"}) ;

  function getState() {
    return state;
  };

  function dispatch(action) {
    state = reducer(state, action)
    render()
  }


  return {getState: getState, dispatch: dispatch}
}

function render() {
  const container = document.getElementById('container');
}
