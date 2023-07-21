// Create a new element
const newElement = document.createElement('p');

// Set attributes (if needed)
newElement.setAttribute('id', 'new-paragraph');
newElement.setAttribute('class', 'paragraph-style');

// Set content
newElement.textContent = 'This is a newly created paragraph element!';

// Append the new element to the body of the document
document.body.appendChild(newElement);
