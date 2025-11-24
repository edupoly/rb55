export function reducer(state, action) {
  if (action == "inc") {
    return state + 1;
  }
  if (action == "dec") {
    return state - 1;
  }
}
