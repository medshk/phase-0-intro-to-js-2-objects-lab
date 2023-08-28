// Write your solution in this file!

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  return { ...employee, [key]: value };
};

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee[key] = value;
  return employee;
};

const deleteFromEmployeeByKey = (employee, key) => {
  const obj = { ...employee };
  delete obj[key];
  return obj;
};

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
  delete employee[key];
  return employee;
};
