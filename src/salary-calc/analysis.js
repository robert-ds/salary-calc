/**
 * Find person in salarys array
 * @param {string} findPerson
 * @return {object} person
 */
function findPerson(findPerson) {
  // Find person in salarys array
  return salarys.find((person) => person.name === findPerson);
}

/**
 * Calculate Median Salary of person
 * @param {string} personName
 * @return {number} median
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
 * @param {string} PersonName
 * @return {number} newSalary
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

// Create object of companys
const companys = {};

// Create object of person
for (person of salarys) {
  // Create object of jobs
  for (job of person.jobs) {
    // Validate if exists companys
    if (!companys[job.company]) {
      companys[job.company] = {};
    }

    // Validate year
    if (!companys[job.company][job.year]) {
      companys[job.company][job.year] = [];
    }

    // Add salary to companys
    companys[job.company][job.year].push(job.salary);
  }
}
console.log(companys);

/**
 * Calculate Median Salary of company
 * @param {string} name
 * @param {number} year
 * @return {number} median
 */
function calculateMedianPerCompany(name, year) {
  // Validate if exists company
  if (!companys[name]) {
    console.warn("The company not exists");

    // Validate if exists year
  } else if (!companys[name][year]) {
    console.warn("The company did not give salary that year");
  } else {
    // Calculate median per year
    const salarys = companys[name][year];
    return PlatziMath.calculateMedian(salarys);
  }
}
