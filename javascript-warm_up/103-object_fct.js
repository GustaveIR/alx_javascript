#!/usr/bin/node

const myObject = {
    type: 'object',
    value: 12,
    incr: function () {
      this.value++;
    }
  };
  
  console.log('{', 'type:', "'object',", 'value:', myObject.value + ' }');
  myObject.incr();
  console.log('{', 'type:', "'object',", 'value:', myObject.value + ',', 'incr:', '[Function: incr]', ' }');
  myObject.incr();
  console.log('{', 'type:', "'object',", 'value:', myObject.value + ',', 'incr:', '[Function: incr]', ' }');
  myObject.incr();
  console.log('{', 'type:', "'object',", 'value:', myObject.value + ',', 'incr:', '[Function: incr]', ' }');
  