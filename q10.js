const getname = (person) => person.name;

const data = [
  {
    name: "John",
    age: 20,
  },
  {
    name: "Jane",
    age: 31,
  },
  {
    name: "Jim",
    age: 13,
  },
];

// returna namnet i objektet som denna funktion tar emot
const getName = (person) => {};

// lämna denna orörd
export const getAllNames = () => {
  let names = [];
  data.forEach((person) => {
    names.push(getName(person));
  });
  return names;
};
 