// Add some items to the list
addToDoItem('Buy milk');
addToDoItem('Walk the dog');
addToDoItem('Do laundry');

// Check the list
console.log('Current todo items:', todoItems);

// Mark the first item as completed
markToDoItemAsCompleted(0);

// Check the list again
console.log('Current todo items:', todoItems);

// Remove the first item from the list
removeToDoItem(0);

// Check the list again
console.log('Current todo items:', todoItems);

// Delete the second item from the list
deleteToDoItem(1);

// Check the list again
console.log('Current todo items:', todoItems);

// Clear all completed tasks
clearCompletedTasks();

// Check the list again
console.log('Current todo items:', todoItems);
