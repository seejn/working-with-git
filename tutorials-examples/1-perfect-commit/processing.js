const fs = require('fs');

// Read data from data-gathering.json
const rawData = fs.readFileSync('data-gathering.json');
const data = JSON.parse(rawData);

// Processing logic
const totalPeople = data.data.length;
let totalAge = 0;
let averageAge = 0;
let oldestPerson = null;

data.data.forEach(person => {
    totalAge += person.age;
    if (!oldestPerson || person.age > oldestPerson.age) {
        oldestPerson = person;
    }
});

averageAge = totalAge / totalPeople;

// Conclusion
const conclusion = `
Conclusions:
- Total number of people: ${totalPeople}
- Average age: ${averageAge.toFixed(2)} years
- Oldest person:
  Name: ${oldestPerson.name}
  Age: ${oldestPerson.age}
  Occupation: ${oldestPerson.occupation}
`;

// Write conclusion to conclusion.txt
fs.writeFileSync('conclusion.txt', conclusion);

console.log('Processing complete. Conclusion written to conclusion.txt.');
