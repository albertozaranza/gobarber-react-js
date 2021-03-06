import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  const enhacer =
    process.env.NODE_ENV === 'development'
      ? compose(
          console.tron.createEnhancer(),
          applyMiddleware(...middlewares)
        )
      : applyMiddleware(...applyMiddleware);
  return createStore(reducers, enhacer);
};
