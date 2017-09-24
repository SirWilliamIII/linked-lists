class Node {
	constructor(value) {
		this.value = value
		this.previous = null
		this.next = null
	}
}

class DoubleLL {

	constructor() {
		this.length = 0
		this.head = null
		this.tail = null
	}
	add(value) {
		const node = new Node(value);

		if(this.length) {
			this.tail.next = node;
			node.previous = this.tail;
			this.tail = node;
		} else {
			this.head = node;
			this.tail = node;
		}

		this.length += 1;

		return node;
	}
	remove() {
		var currentNode        = this.head,
		    length             = this.length,
		    count              = 1,
		    message            = { failure: 'Failure: non-existent node in this list.' },
		    beforeNodeToDelete = null,
		    nodeToDelete       = null,
		    deletedNode        = null;

		// 1st use-case: an invalid position
		if(length === 0 || position < 1 || position > length) {
			throw new Error(message.failure);
		}

		if(position === 1) {
			this.head = currentNode.next;

			// 2nd use-case: there is a second node
			if(!this.head) {
				this.head.previous = null;
				// 2nd use-case: there is no second node
			} else {
				this.tail = null;
			}

			// 3rd use-case: the last node is removed
		} else if(position === this.length) {
			this.tail = this.tail.previous;
			this.tail.next = null;
			// 4th use-case: a middle node is removed
		} else {
			while(count < position) {
				currentNode = currentNode.next;
				count++;
			}

			beforeNodeToDelete = currentNode.previous;
			nodeToDelete = currentNode;
			afterNodeToDelete = currentNode.next;

			beforeNodeToDelete.next = afterNodeToDelete;
			afterNodeToDelete.previous = beforeNodeToDelete;
			deletedNode = nodeToDelete;
			nodeToDelete = null;
		}

		this.length--;

		return message.success;
	}
}

DoubleLL.add(1)
DoubleLL.add(2)
DoubleLL.add(3)
DoubleLL.add(10)
