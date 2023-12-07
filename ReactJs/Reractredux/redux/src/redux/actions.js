// actions.js



import { INCREASE, DECREASE } from './actionTypes';

export const increase = () => {
  return {
    type: INCREASE
  };
};

export const decrease = () => {
  return {
    type: DECREASE
  };
};
