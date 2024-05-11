const findTheOldest = function(people) {
    if (people.length === 0) {
        return null; 
    }

    let oldestPerson = people[0]; 

    for (let i = 1; i < people.length; i++) {
        if (getAge(people[i]) > getAge(oldestPerson)) {
            oldestPerson = people[i]; 
        }
    }

    return oldestPerson;
};

function getAge(person) {
    const currentYear = new Date().getFullYear();
    if (person.yearOfDeath) {
        return person.yearOfDeath - person.yearOfBirth;
    } else {
        return currentYear - person.yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
