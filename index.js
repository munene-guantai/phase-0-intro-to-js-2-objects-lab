// Write your solution in this file!
const employee = {
    name: "Brian G",
    streetAddress: "456 First Street"
};
console.log(employee.name);
console.log(employee.streetAddress);

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey( employee, key) {
    const updatedEmployee = { ...employee};
    delete updatedEmployee[key];
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

console.log("Original employee:", employee);

