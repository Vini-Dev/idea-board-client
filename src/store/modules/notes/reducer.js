export default function theme(state = [], action) {
  switch (action.type) {
    case '@note/STORE': {
      console.log(state, action);
      return [];
    }
    default:
      return state;
  }
}
