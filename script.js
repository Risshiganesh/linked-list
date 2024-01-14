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

  const pop = function () {
    temp = list;
    if (!temp.next) {
      console.log("BRUH");
      list = null;
      return;
    }

    while (temp.next.next) {
      console.log("Current item");
      console.log(temp.value);
      temp = temp.next;
    }

    console.log("Last item");

    console.log(temp);

    temp.next = null;

    console.log(temp);
  };

  return { append, prepend, size, head, tail, at, pop };
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

console.log("POP");
console.log(jj.pop());

console.log("TAIL");
console.log(jj.tail());

console.log("POP");
console.log(jj.pop());

console.log("TAIL");
console.log(jj.tail());

// console.log(ll);
