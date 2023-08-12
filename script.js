let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper(employees) {
  //Write your code here , just console.log
  for(let employee of employees){
    if(employee.profession === "developer") {
      console.log(employee);
    }
  }
}

function addEmployee(employees, newEmployee) {
  //Write your code here, just console.log
  employees.push(newEmployee);
}

function removeAdmin() {

  //Write your code here, just console.log
   return employees.filter(employee => employee.profession !== "admin");
}

function concatenateArray(arr1 , arr2) {
  return arr1.concat(arr2);
  //Write your code here, just console.log
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}
