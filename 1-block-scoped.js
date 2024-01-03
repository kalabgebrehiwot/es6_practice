function taskBlock(trueorFalse) {
    let task = false;
    const task2 = true;
  
    if (trueorFalse) {
      let task = true;
      const task2 = false;
    }
  
    return [task, task2];
  }
  console.log(taskBlock(true));
  console.log(taskBlock(false));