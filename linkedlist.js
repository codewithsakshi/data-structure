class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFirst(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node;
            this.size++
            return this.head
        } else{
            node.next = this.head;
            this.head = node;
            this.size++
            return this.head
        }
    }

    insertLast(value){
        const node = new Node(value);
        let current;
        if(!this.head){
            this.head = node;
            this.size++
            return this.head
        }
        else{
            current = this.head
           while(current.next){
           current = current.next
          }
          current.next = node;
          this.size++
          return current.next
        }
    }

    // size(){
    //     let size = 0;
    //     let current = this.head;
    //     while(current.next){
    //         size++
    //         current = current.next
    //     } return size;
    // }

    insertAt(index, value){
        if(index < 0 || index > this.size){
            return "please enter a valid index!"
        } 
        else{
            const node = new Node(value);
            let tracker = 1;
            let current = this.head;
            while(tracker < index){
                current = current.next;
                tracker++
            }
            node.next = current;
            current.next = node;
            this.size++
            return current.next;
        }
    }

    removeFrom(index){
     if(index < 0 || index > this.size){
        return "Please enter a valid size"
     } else {
        let current = this.head
        if(index === 0){
            this.head = current.next;
            current = null;
            this.size--;
            return this.head
        }
        else{
            let tracker = 1;
            while(tracker < index){
                current = current.next;
                tracker++
            }
            let elm = current.next;
            current.next = elm.next;
              elm = null;
              this.size--
              return current.next
        }
     }
    }

    printList(){
        let current = this.head;
        let str = "";
        while(current !== null){
            str += `${current.value} ==>`;
            current = current.next;
        }
        return str;
       
    }
    
    removeElement(value){
     let current = this.head;
    let prev = null;

     while(current !== null){
        if(current.value === value){
            if(prev === null){
                this.head = current.next;
            }
            else {
                prev.next = current.next
            }
            this.size--;
            return current.value;
        }
        prev = current;
        current = current.next
     }
    }

    indexOf(element){
    let count = 0;
    let current = this.head;
    while(current !== null){
        if(current.value === element){
            return count;
        }
        count++
        current = current.next;
    }   
 
    }

    isEmpty(){
        if(this.size === 0){
            return true
        }
        return false;
    }
}

const list = new LinkedList();

console.log(list.insertFirst(1));
console.log(list.insertFirst(2));
console.log(list.insertLast(4));
console.log(list.insertAt(1, 24))
console.log(list.printList());
console.log(list.isEmpty());
console.log(list.insertAt(3, 2));
console.log(list.removeElement(2))
console.log(list.removeFrom(2));
console.log(list.isEmpty());
console.log(list.size())
console.log(list.printList());


