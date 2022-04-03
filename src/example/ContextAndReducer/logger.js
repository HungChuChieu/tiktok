function logger(reducer) {
  return (prevState, action) => {
   
    console.group(action.type);
    console.log(prevState);
    console.log(action);
    
    const [nextState, action] = reducer(prevState, action);

    console.log(nextState);
    console.groupEnd();
    return [nextState, action];
  };
}
