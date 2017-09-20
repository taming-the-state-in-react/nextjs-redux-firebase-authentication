import { createStore } from 'redux';
import rootReducer from '../reducers';

const initStore = () => {
  const store = createStore(rootReducer);

  return store;
};

export default initStore;