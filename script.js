console.log("Hello World!");
//  Created using factories, because composition is better than inheritance

function linkedList() {
  // head
  let list = null;

  let temp;

  const node = function (value = null, nextNode = null) {
    return { value, nextNode };
  };

  // 1
  const append = function (value) {
    if (!list) {
      list = node(value);
      return;
    }
    temp = list;
    while (temp.nextNode) {
      temp = temp.nextNode;
    }
    temp.nextNode = node(value);
  };

  // 2
  const prepend = function (value) {
    if (!list) {
      list = node(value);
      return;
    }

    temp = list;
    list = node(value);
    list.nextNode = temp;
  };

  // 3
  const size = function () {
    temp = list;

    let total = 0;

    while (temp) {
      total++;
      temp = temp.nextNode;
    }

    return total;
  };

  // 4
  const head = function () {
    temp = list;
    if (!list) {
      return "List empty";
    }

    return list;
  };

  // 5
  const tail = function () {
    temp = list;

    if (!temp) {
      return "List empty";
    }

    while (temp.nextNode) {
      temp = temp.nextNode;
    }

    return temp;
  };

  // 6
  const at = function (index) {
    temp = list;

    let counter = 0;

    while (counter < index) {
      if (!temp.nextNode) {
        temp = null;
        return temp;
      }
      temp = temp.nextNode;

      counter++;
    }

    return temp;
  };

  // 7
  const pop = function () {
    temp = list;
    if (!temp.nextNode) {
      list = null;
      return;
    }

    while (temp.nextNode.nextNode) {
      temp = temp.nextNode;
    }

    temp.nextNode = null;
  };

  // 8
  const contains = function (value){

    temp = list;

    while(temp){

      if (temp.value === value) {
        
        return true;

      }

      temp = temp.nextNode;

    }

    return false;

  }

  // 9
  const find = function (value){

    temp = list;

    let index = 0;

    while(temp){

      if (temp.value === value) {
        
        return index;

      }

      temp = temp.nextNode;

      index++

    }

    return false;

  }

  // 10
  const toString = function (){

    const listArray = []

    temp = list;

    while(temp){

      listArray.push(`( ${temp.value} ) -> `)

      temp = temp.nextNode;

    }

    listArray.push('null')

    return listArray.join("");
  }

  // 11
  const insertAt = function(value, index){

    temp = list;
  
    if(index === 0){
      newlist = node(value, list);
  
      list = newlist;
      return;
    }
  
    for (let i = 1; i < index; i++) {
      
      temp = temp.nextNode;
  
    }

    const remainingList = temp.nextNode

    temp.nextNode = node(value, remainingList);
  
  }

  // 12
  const removeAt = function(index){
    
    temp = list;

    if (!index) {
      return "Please specify an index"
    }

    if (index === 0) {
      list = temp.nextNode;
      return;
    }

    for (let i = 1; i < index; i++) {

      if (!temp) {
        return "Node not found"
      }
      
      temp = temp.nextNode;
  
    }

    console.log(temp.nextNode)

    if (!temp.nextNode) {
      return
    }

    temp.nextNode = temp.nextNode.nextNode;
  }

  return { 
    append, 
    prepend, 
    size, 
    head, 
    tail, 
    at, 
    pop, 
    contains, 
    find, 
    toString, 
    insertAt, 
    removeAt
  };
}



const jj = linkedList();

// 1
jj.append("John");
jj.append("Jane");
jj.append("Juno");

// 2
jj.prepend("Jake");
jj.prepend("Jill");

// 3
console.log(jj.head());

// 4
console.log(jj.size());

// 5
console.log(jj.tail());

// 6
console.log(jj.at(3));

// 7
// Juno removed
console.log(jj.pop())

// 8
console.log(jj.contains("Jane"));

// 9
console.log("FIND");
console.log(jj.find("Jane"));

// 10
console.log(jj.insertAt("Jim",3));

// 11
// Jane removed
console.log(jj.removeAt(4));

// 12
console.log(jj.toString());
