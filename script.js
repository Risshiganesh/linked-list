console.log("Hello World!");
//  Create using factories, because composition is better than inheritance

function linkedList() {
  // head
  let list = null;

  let temp;

  const node = function (value = null, next = null) {
    return { value, next };
  };

  // 1
  const append = function (value) {
    if (!list) {
      list = node(value);
      return;
    }
    temp = list;
    while (temp.next) {
      //   console.log(list);
      temp = temp.next;
    }
    temp.next = node(value);
  };

  // 2
  const prepend = function (value) {
    if (!list) {
      list = node(value);
      return;
    }

    temp = list;
    list = node(value);
    list.next = temp;
  };

  // 3
  const size = function () {
    temp = list;

    let total = 0;

    while (temp) {
      total++;
      temp = temp.next;
    }

    return total;
  };

  // 4
  const head = function () {
    temp = list;
    if (!list) {
      return "List empty";
    }
    // console.log(list);
    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }

    return list;
  };

  // 5
  const tail = function () {
    temp = list;

    if (!temp) {
      return "List empty";
    }

    while (temp.next) {
      temp = temp.next;
    }

    return temp;
  };

  // 6
  const at = function (index) {
    temp = list;

    let counter = 0;

    while (counter < index) {
      if (!temp.next) {
        temp = null;
        return temp;
      }
      temp = temp.next;

      counter++;
    }

    return temp;
  };

  // 7
  const pop = function () {
    temp = list;
    if (!temp.next) {
      list = null;
      return;
    }

    while (temp.next.next) {
      temp = temp.next;
    }

    temp.next = null;
  };

  // 8
  const contains = function (value){

    temp = list;

    while(temp){

      if (temp.value === value) {
        
        return true;

      }

      temp = temp.next;

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

      temp = temp.next;

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

      temp = temp.next

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
  
    for (let i = 0; i < index; i++) {
      
      // incorrect
      temp.next = node(value, temp.next)
  
      temp = temp.next;
  
    }
  
  }

  return { append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt};
}



const jj = linkedList();

// console.log(jj);

jj.append("John");
jj.append("Jane");
jj.append("Juno");

// jj.prepend("Jake");
// jj.prepend("Jill");

// jj.append("Jim");

console.log(jj.head());

console.log(jj.size());

console.log(jj.tail());

console.log(jj.at(3));

console.log("POP");
console.log(jj.pop());

console.log("TAIL");
console.log(jj.tail());

// console.log("POP");
// console.log(jj.pop());

// console.log("TAIL");
// console.log(jj.tail());

// console.log("POP");
// console.log(jj.pop());

// console.log("TAIL");
// console.log(jj.tail());



console.log(jj.contains("Jane"));
console.log(jj.head());

console.log("FIND");
console.log(jj.find("Jane"));

console.log(jj.toString())

console.log(jj.insertAt(1));