/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function generateFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];

  const rate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;

  return { name, occupation, rate };
}

const freelancers = Array.from({ length: NUM_FREELANCERS }, generateFreelancer);

function getAverageRate(freelancers) {
  const total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.rate,
    0,
  );
  return total / freelancers.length;
}

function Freelancer({ freelancer }) {
  return (
    <div class="freelancer">
      <h3>{freelancer.name}</h3>
      <p>Occupation: {freelancer.occupation}</p>
      <p>Rate: ${freelancer.rate}/hr</p>
    </div>
  );
}

function FreelancersList(freelancers) {
  return (
    <div class="freelancers-list">
      {freelancers.map((freelancer, index) => (
        <Freelancer key={index} freelancer={freelancer} />
      ))}
    </div>
  );
}

function AverageRate({ averageRate }) {
  return (
    <div class="average-rate">
      <h2>Average Freelancer Rate</h2>
      <p>$averageRate / hr</p>
    </div>
  );
}
