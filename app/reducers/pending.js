import { DEQUEUE_TASK, ENQUEUE_TASK } from '../constants';

const queue = [];
const pending = (state, action) => {
  switch (action.type) {
    case DEQUEUE_TASK:
      queue.shift();
      break;
    case ENQUEUE_TASK:
      queue.push(1);
      break;
  }
  return !!queue.length;
};

export default pending;
