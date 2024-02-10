/**
 * Beats 7%
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function (persons, times) {
  this.persons = persons;
  this.times = times;
};

/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
  const map = {};
  let lastPerson;
  let max = 0;
  for (let i = 0; i < this.times.length; i++) {
    if (t >= this.times[i]) {
      if (map[this.persons[i]]) {
        map[this.persons[i]]++;
      } else {
        map[this.persons[i]] = 1;
      }
      if (map[this.persons[i]] >= max) {
        max = map[this.persons[i]];
        lastPerson = this.persons[i];
      }
    } else {
      break;
    }
  }
  return lastPerson;
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
