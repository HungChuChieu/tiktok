const logger = (reducer) => {
  return (prevState, action) => {
    console.group(action.type);

    console.log("Prev: ",prevState);
    console.log("Action: ", action)
    const newState = reducer(prevState, action);

    console.log("Next: ",newState);

    console.groupEnd();
    return newState;
  };
};

export default logger;
