
document.getElementById('changeTextButton').addEventListener('click', () => {
  document.getElementById('title').textContent = 'Text Changed Dynamically!';
  document.getElementById('description').textContent = 'The content has been updated using JavaScript.';
});

document.getElementById('addElementButton').addEventListener('click', () => {
  const newElement = document.createElement('p');
  newElement.textContent = 'This is a new paragraph added dynamically.';
  document.getElementById('dynamicContent').appendChild(newElement);
});

document.getElementById('removeElementButton').addEventListener('click', () => {
  const dynamicContent = document.getElementById('dynamicContent');
  if (dynamicContent.lastChild) {
    dynamicContent.removeChild(dynamicContent.lastChild);
  } else {
    alert('No more elements to remove!');
  }
});