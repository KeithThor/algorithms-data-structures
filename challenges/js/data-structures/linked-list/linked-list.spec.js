import {createLinkedList} from "./linked-list";

fdescribe("createLinkedList in linked-list", () => {
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
});