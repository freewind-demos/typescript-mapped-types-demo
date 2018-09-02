interface Person {
    name: string;
    age: number;
    location: string;
}

type PartialOf<T> = {
    [P in keyof T]?: T[P]
}

type PartialPerson = PartialOf<Person>

const person: PartialPerson = {
    name: 'Freewind',
    location: 'China'
}

console.log(person)
