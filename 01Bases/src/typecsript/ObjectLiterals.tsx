interface Person {
  age: number;
  firstName: string;
  lastName: string;
  addres: Addres;
}

interface Addres {
  country: string;
  houseNo: number;
  street?: string;
}

const ObjectLiterals = () => {
  const person: Person = {
    age: 43,
    firstName: "Felipe",
    lastName: "Hernandez",
    addres: {
      country: "Mexico",
      houseNo: 24,
    },
  };

  return (
    <div>
      <p>Objetos Literales</p>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </div>
  );
};

export default ObjectLiterals;
