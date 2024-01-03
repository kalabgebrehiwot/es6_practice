function taskFirst(){
   const task = 'I perfer const when i can'
   return task;
}
function getLast() {
    return'is ok';
}
function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }
  console.log(`${taskFirst()} ${taskNext()}`);