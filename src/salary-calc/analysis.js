/**
 * Find person in salarys array
 * @returns {object} person
 */
function findPerson(findPerson) {
  // Find person in salarys array
  return salarys.find((person) => person.name === findPerson);
}

/**
 * Calculate Median Salary of person
 * @returns {number} median
 */
function medianPerPerson(personName) {
  // Find person in salarys array
  const person = findPerson(personName);

  // Create array of salarys
  const salarysPerson = person.jobs.map((job) => job.salary);

  // Calculate median
  return PlatziMath.calculateMedian(salarysPerson);
}

/**
 * Calculate projection of salary
 * @returns {number} newSalary
 */
function projectionPerPerson(PersonName) {
  // Find person in salarys array
  const jobs = findPerson(PersonName).jobs;

  let growthRate = [];

  // Calculate growth rate
  for (let i = 0; i < jobs.length - 1; i++) {
    growthRate.push(jobs[i + 1].salary / jobs[i].salary - 1);
  }

  // Calculate median of growth rate
  const medianPercentGrowth = PlatziMath.calculateMedian(growthRate);

  // Calculate projection of salary
  const newSalary = jobs[jobs.length - 1].salary * (1 + medianPercentGrowth);
  return newSalary;
}

//
const companys = {};

for (person of salarys) {
  for (job of person.jobs) {
    if (!companys[job.company]) {
      companys[job.company] = {};
    }

    if (!companys[job.company][job.year]) {
      companys[job.company][job.year] = [];
    }

    companys[job.company][job.year].push(job.salary);
  }
}
console.log(companys);
