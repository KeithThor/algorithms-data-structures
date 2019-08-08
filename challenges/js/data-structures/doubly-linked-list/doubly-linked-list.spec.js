import {createLinkedList, deleteNode, insertNode} from "./doubly-linked-list";

// Your code does not go in here

fdescribe("createLinkedList in doubly-linked-list", () => {
    let validData = [];

    beforeEach(() => {
        validData = [1, 2, 3, 4, 5, 6, 7];
    });

    it("should return an object given valid data.", () => {
        let linkedList = createLinkedList(validData);

        expect(typeof linkedList).toBe("object");
    });

    it("should not return an array when given valid data.", () => {
        let linkedList = createLinkedList(validData);

        expect(Array.isArray(linkedList)).toBe(false);
    });

    it("should return a node object with a 'next' property.", () => {
        let linkedList = createLinkedList(validData);

        expect(linkedList.hasOwnProperty("next")).toBe(true);
    });

    it("should return a node object with a 'previous' property.", () => {
        let linkedList = createLinkedList(validData);

        expect(linkedList.hasOwnProperty("previous")).toBe(true);
    });

    it("should return a node object with a 'value' property.", () => {
        let linkedList = createLinkedList(validData);

        expect(linkedList.hasOwnProperty("value")).toBe(true);
    });

    it("should return 5 for the first node in the given array [5, 6, 7].", () => {
        let validData = [5, 6, 7];
        let linkedList = createLinkedList(validData);

        expect(linkedList.value).toBe(5);
    });

    it("should return 1 for the first node in the given array [4, 2, 3].", () => {
        let validData = [4, 2, 3];
        let linkedList = createLinkedList(validData);

        expect(linkedList.value).toBe(4);
    });

    it("should return a node with value of 4 when retrieving 'next' value from the first node from the array [1, 4, 5].", () => {
        let validData = [1, 4, 5];
        let linkedList = createLinkedList(validData);

        expect(linkedList.next.value).toBe(4);
    });

    it("should return a node with value of 7 when retrieving 'next' value from the first node from the array [1, 7, 5].", () => {
        let validData = [1, 7, 5];
        let linkedList = createLinkedList(validData);

        expect(linkedList.next.value).toBe(7);
    });

    it("should return a node with value of 5 when retrieving the fourth node from the array [1, 3, 4, 5, 7].", () => {
        let validData = [1, 3, 4, 5, 7];
        let linkedList = createLinkedList(validData);

        expect(linkedList.next.next.next.value).toBe(5);
    });

    it("should return a node with a null 'next' property if at the end of the array.", () => {
        let validData = [1, 2, 3];
        let linkedList = createLinkedList(validData);

        expect(linkedList.next.next.next).toBeNull();
    });

    it("should return 5 linked nodes when given the following array: [1, 2, 3, 4, 5].", () => {
        let validData = [1, 2, 3, 4, 5];
        let linkedList = createLinkedList(validData);
        let numOfNodes = 0;
        let node = linkedList;
        
        while (node != null){
            numOfNodes++;
            node = node.next;
        }

        expect(numOfNodes).toBe(5);
    });

    it("should return 7 linked nodes when given the following array: [1, 2, 3, 4, 5, 6, 7].", () => {
        let validData = [1, 2, 3, 4, 5, 6, 7];
        let linkedList = createLinkedList(validData);
        let numOfNodes = 0;
        let node = linkedList;
        
        while (node != null){
            numOfNodes++;
            node = node.next;
        }

        expect(numOfNodes).toBe(7);
    });

    it("should return all values in the following array in the same order when traversed forwards: [1, 2, 3, 4, 5, 6, 7].", () => {
        let validData = [1, 2, 3, 4, 5, 6, 7];
        let linkedList = createLinkedList(validData);
        let node = linkedList;
        let linkedListArray = [];
        
        while (node != null){
            linkedListArray.push(node.value);

            numOfNodes++;
            node = node.next;
        }

        expect(validData).toEqual(linkedListArray);
    });

    it("should return all values in the following array in reverse when traversed backwards: [1, 2, 3, 4, 5, 6, 7].", () => {
        let validData = [1, 2, 3, 4, 5, 6, 7];
        let linkedList = createLinkedList(validData);
        let lastNode = linkedList;
        let linkedListArray = [];
        
        while (node.next != null){
            lastNode = lastNode.next;
        }

        while (lastNode != null){
            linkedListArray.push(lastNode.value);
            lastNode = lastNode.previous;
        }

        expect(validData.reverse()).toEqual(linkedListArray);
    });

    it("should return null for the 'previous' property of the first node in the linked list.", () => {
        let validData = [4, 2, 3];
        let linkedList = createLinkedList(validData);

        expect(linkedList.previous).toBeNull();
    });

    it("should return 4 when getting the value after retrieving 'next' twice and 'previous' once from the following array [1, 4, 2].", () => {
        let validData = [1, 4, 2];
        let linkedList = createLinkedList(validData);

        expect(linkedList.next.next.previous.value).toBe(4);
    });

    it("should return 1 when getting the value after retrieving 'next' twice and 'twice' once from the following array [1, 4, 2].", () => {
        let validData = [1, 4, 2];
        let linkedList = createLinkedList(validData);

        expect(linkedList.next.next.previous.value).toBe(1);
    });
});

fdescribe("deleteNode in doubly-linked-list", () => {
    let validData = [];

    beforeEach(() => {
        validData = [1, 2, 3, 4, 5, 6, 7];
    });

    const getLastNode = (firstNode) => {
        let node = firstNode;

        while(node.next != null){
            node = node.next;
        }

        return node;
    };

    const getNode = (firstNode, value) => {
        let node = firstNode;

        while(node != null){
            if (node.value === value) return node;
            else node = node.next;
        }
    }

    const getAllValues = (firstNode) => {
        let values = [];
        let node = firstNode;

        while(node != null){
            values.push(node.value);
            node = node.next;
        }

        return values;
    }

    it("should return an object with the following properties: 'value', 'next', 'previous'.", () => {
        let firstNode = createLinkedList(validData);

        firstNode = deleteNode(firstNode, 2);

        expect(firstNode).not.toBeNull();
        expect(firstNode.value).toBeDefined();
        expect(firstNode.previous).toBeDefined();
        expect(firstNode.next).toBeDefined();
    });

    it("should return the second node when the first node is deleted.", () => {
        let firstNode = createLinkedList(validData);

        firstNode = deleteNode(firstNode, 1);

        expect(firstNode.value).toBe(2);
    });

    it("should return the second node with a null 'previous' property when the first node is deleted.", () => {
        let firstNode = createLinkedList(validData);

        firstNode = deleteNode(firstNode, 1);

        expect(firstNode.previous).toBeNull();
    });

    it("should return a linked list with the 2nd to last node as the last value when the last node is deleted.", () => {
        let firstNode = createLinkedList(validData);

        firstNode = deleteNode(firstNode, 7);

        let lastNode = getLastNode(firstNode);

        expect(lastNode.value).toBe(6);
    });

    it("should return a linked list with the 'next' property of the 2nd to last node set to null when the last node is deleted.", () => {
        let firstNode = createLinkedList(validData);

        firstNode = deleteNode(firstNode, 7);

        let lastNode = getLastNode(firstNode);

        expect(lastNode.next).toBeNull();
    });

    it("should replace the 'next' property of the node adjacent to the deleted node to the 'next' property of the deleted node.", () => {
        let firstNode = createLinkedList(validData);
        let oldFifthNode = getNode(firstNode, 5);

        firstNode = deleteNode(firstNode, 4);
        let newfourthNode = firstNode.next.next.next;

        expect(newfourthNode).toBe(oldFifthNode);
    });

    it("should replace the 'previous' property of the node adjacent to the deleted node to the 'previous' property of the deleted node.", () => {
        let firstNode = createLinkedList(validData);
        let thirdNode = getNode(firstNode, 3);

        firstNode = deleteNode(firstNode, 4);
        let newfourthNode = firstNode.next.next.next;

        expect(newfourthNode.previous).toBe(thirdNode);
    });

    it("should return the correct values when the linked list is traversed after deleting the first node.", () => {
        let firstNode = createLinkedList(validData);
        validData.shift();

        firstNode = deleteNode(firstNode, 1);
        let values = getAllValues(firstNode);

        expect(values).toEqual(validData);
    });

    it("should return the correct values when the linked list is traversed after deleting the last node.", () => {
        let firstNode = createLinkedList(validData);
        validData.pop();

        firstNode = deleteNode(firstNode, 7);
        let values = getAllValues(firstNode);

        expect(values).toEqual(validData);
    });

    it("should return the correct values when the linked list is traversed after deleting a center node.", () => {
        let firstNode = createLinkedList(validData);
        validData.splice(validData.indexOf(3), 1);

        firstNode = deleteNode(firstNode, 3);
        let values = getAllValues(firstNode);

        expect(values).toEqual(validData);
    });
});

fdescribe("insertNode in doubly-linked-list", () => {
    let validData = [];

    beforeEach(() => {
        validData = [1, 2, 3, 4, 5, 6, 7];
    });

    const getLastNode = (firstNode) => {
        let node = firstNode;

        while(node.next != null){
            node = node.next;
        }

        return node;
    };

    const getNode = (firstNode, value) => {
        let node = firstNode;

        while(node != null){
            if (node.value === value) return node;
            else node = node.next;
        }
    }

    const getAllValues = (firstNode) => {
        let values = [];
        let node = firstNode;

        while(node != null){
            values.push(node.value);
            node = node.next;
        }

        return values;
    }

    it("should return an object with the following properties: 'value', 'next', 'previous'.", () => {
        let firstNode = createLinkedList(validData);

        firstNode = insertNode(firstNode, 2, 2);

        expect(firstNode).not.toBeNull();
        expect(firstNode.value).toBeDefined();
        expect(firstNode.previous).toBeDefined();
        expect(firstNode.next).toBeDefined();
    });

    it("should return a linked list with 8 nodes when 1 node is inserted into a linked list with 7 nodes.", () => {
        let firstNode = createLinkedList(validData);
        firstNode = insertNode(firstNode, 2, 2);
        let node = firstNode;
        let numOfNodes = 0;

        while(node != null){
            numOfNodes++;
            node = node.next;
        }
        
        expect(numOfNodes).toBe(8);
    });
});