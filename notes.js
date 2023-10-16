
/*

what will the below code print? good reduce and object practice



let arr = [1, 1, 3, 2, 2, 1];

const result = arr.reduce(function(acc, value) {
  if (acc[value]) {
    acc[value]++;
  } else {
    acc[value] = 1;
  }
  return acc;
}, {});
*/

/*
somethingTerrible() will be pushed to the call stack and loop 
infinitely, causing the function to never return. We expect the 
setTimeout timer to expire while somethingTerrible() is still on the 
stack. Since somethingTerrible() never returns, it will never be 
popped from the stack, so our setTimeout callback will never have its 
own turn to be executed on the stack.

function somethingTerrible() {
  let i = 0;
  while (true) {
    i++;
  }
}

setTimeout(function() {
  console.log("time to do something really important!");
}, 1000);

somethingTerrible();

*/

