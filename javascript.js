
const Node = ( value = null, next = null) => {
    return { value, next };
}





class linkedList {
    constructor () {
        this.head = null;
    }

    append (value) {
        if(this.head === null) this.prepend(value);
        else {
            let node = this.head;
            while (node.next !== null) {
                node = node.next;
            }
            node.next = Node(value);
        }
    }

    prepend (value) {
        let temp = null;
        if (this.head !== null) temp = this.head;
        this.head = Node(value);
        this.head.next = temp;
    }

    size () {
        let node = this.head;
        if (node.next === null) return 0;
        let count = 0;
        while (node !== null) {
            count++;
            node = node.next;
        }
        return count;
    }

    showHead () {
        if (this.head === null) return null;
        return this.head.value;
    }

    showTail () {
        if (this.head === null) return null;
        let node = this.head;
        while (node.next !== null) {
            node = node.next;
        }
        return node.value;
    }

    at (index) {
        if (this.head === null) return null;
        let node = this.head;
        let currentIndex = 0;
        while (currentIndex < index) {
            if (node.next === null) return null;
            currentIndex++;
            node = node.next;
        }
        return node.value;
    }

    pop () {
        if (this.head === null) return null;
        let node = this.head;
        while (node.next.next !== null) {
            node = node.next;
        }
        node.next = null;
    }

    contains (value) {
        if (this.head === null) return null;
        let node = this.head;

        while (node !== null) {
            if (node.value === value) return true
            else node = node.next;
        }
        return false;
    }

    find (value) {
        if (this.head === null) return null;
        let node = this.head;
        let index = 0;
        while (node !== null) {
            if(node.value === value) return index;
            index++;
            node = node.next;
        }
        return null;
    }

    toString () {
        if (this.head === null) return null;
        let node = this.head;
        let stringContent = "";

        while (node.next !== null) {
            stringContent += `( ${node.value} ) -> `;
            node = node.next;
        }
        return stringContent + ` ( ${node.value} )  -> null`;
    }



}

const list = new linkedList()
console.log(list);
list.prepend(23);
console.log(list);
list.append(75);
console.log(list);
list.append(100);
console.log(list);
list.prepend(10);
console.log(list);
console.log(list.size());
list.append(105);
list.append(120);
console.log(list.size());
console.log(list.showHead());
console.log(list.showTail());
console.log(list.at(0));
list.pop();
console.log(list);
console.log(list.contains(23));
console.log(list.find(103));
console.log(list.toString())