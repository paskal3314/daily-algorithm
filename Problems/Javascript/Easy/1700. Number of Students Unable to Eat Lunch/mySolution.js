/**
 * Beats 51%
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  while (students.includes(sandwiches[0])) {
    if (students[0] !== sandwiches[0]) {
      students.push(students[0]);
      students = students.slice(1);
    } else {
      students = students.slice(1);
      sandwiches = sandwiches.slice(1);
    }
  }
  return students.length;
};
