const typeWriter = (sentence) => {
  let timeDelay = 50;
  
  for (const element of sentence) {
    setTimeout(() => {
      process.stdout.write(element)
    }, timeDelay);
    timeDelay += 100
  }
  setTimeout(() => {
    process.stdout.write('\n')
  }, sentence.length * 150)
};


typeWriter("hello there from the other side")