const span = document.getElementsByTagName('span')[0];
const button = document.getElementsByTagName('button')[0];
const buttonDecrement = document.getElementsByTagName('button')[1];

const increment = () => {
  span.textContent = parseInt(span.textContent) + 1;
};

const decrement = () => {
    span.textContent = parseInt(span.textContent) - 1;
};