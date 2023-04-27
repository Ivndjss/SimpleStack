// Get references to HTML elements
const inputElement = document.getElementById('input');
const pushButtonElement = document.getElementById('pushButton');
const emptyButtonElement = document.getElementById('emptyButton');
const peekButtonElement = document.getElementById('peekButton');
const stackItemElements = document.getElementsByClassName('stack-item');

// Initialize stack with an empty array
let stack = [];

// Define stack operations
const push = (item) => {
  if (stack.length < 5) {
    stack.push(item);
    updateStackView();
  } else {
    alert('Stack was already full!');
  }
};

const empty = () => {
  if (stack.length === 0) {
    alert('Yes, Stack is empty');
  } else {
    alert('No, Stack is not empty');
  }
};

const peek = () => {
  if (stack.length === 0) {
    alert('Operation not allowed!');
  } else {
    alert(`Top element is ${stack[stack.length - 1]}`);
  }
};

const updateStackView = () => {
  // Update the stack item elements with the values from the stack array
  for (let i = 0; i < stackItemElements.length; i++) {
    const stackIndex = i - (stackItemElements.length - stack.length);
    if (stackIndex >= 0) {
      stackItemElements[i].textContent = stack[stackIndex];
    } else {
      stackItemElements[i].textContent = '';
    }
  }
};

// Add event listeners for push, empty, and peek buttons
pushButtonElement.addEventListener('click', () => {
  const inputValue = inputElement.value.trim();
  if (!inputValue) {
    alert('Please enter a value!');
    return;
  }
  push(inputValue);
  inputElement.value = '';
});

emptyButtonElement.addEventListener('click', empty);

peekButtonElement.addEventListener('click', peek);
