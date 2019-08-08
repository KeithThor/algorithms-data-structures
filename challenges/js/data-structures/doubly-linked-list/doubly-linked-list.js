/**
 * *** Assignment: ***
 * Create a doubly linked list from an array of values.
 * 
 * Define a 'deleteNode' method that allows you to delete a node with a given value
 * from anywhere in the linked list.
 * 
 * Define an 'insertNode' method that allows you to insert a node with a given value into the given index
 * in the linked list.
 * 
 * *** Description ***
 * 
 * A doubly linked list is a list of objects called 'nodes' that are, as the name suggests, linked together.
 * It is functionally very similiar to an array, however, it is not an array. Each node object is only linked to
 * one another through a 'next' and a 'previous' property.
 * 
 * If you think about a doubly linked list like an array, the 'previous' property will move you towards the first
 * element in the array, while the 'next' property will move you towards the last. Using those properties will allow you
 * to move forwards and backwards through the linked list.
 * 
 * You must define a 'deleteNode' method that will delete a node from the linked list. After deleting a node the list should still
 * remain continuous. In other words, deleting that node should not create 2 separate linked lists.
 * 
 * You must define an 'insertNode' method that will insert a new node with a given value into an index position in the linked list.
 * After inserting the new node, the linked list should should traverse correctly forwards and backwards.
 * 
 * *** Requirements: ***
 * 
 * To run the test for this assignment, type and execute the following command in a terminal 'npm run test-d-linked-list'
 * 
 * 1. You must return the first node in the linked list from your createLinkedList function.
 * 2. Each node must contain a 'value' property that contains the value from the array.
 * 3. Each node must contain a 'next' property that contains the next node in the list.
 * 4. Each node must contain a 'previous' property that contains the previous node in the list.
 * 
 * 5. You must delete the node with the given value from the linkedList in your deleteNode function.
 *      It is provided to you as valueOfNodeToDelete. The value provided will always exist in the linkedList.
 * 6. You must return the first node in the linkedList from your deleteNode function.
 * 
 * 7. You must add a new node in your insertNode function with the given value into the index specified.
 * 8. You must return the first node in the linkedList from your insertNode function.
 */
export const createLinkedList = (array) => {
    // Write code here

}

export const deleteNode = (firstNode, valueOfNodeToDelete) => {
    // Write code here

}

export const insertNode = (firstNode, valueToAdd, indexToInsert) => {
    // Write code here
    
}