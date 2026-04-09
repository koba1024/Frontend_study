type Partial1<T> = {
    [P in keyof T]?: T[P];
}

type User = {
    name: string;
    age: number;
    email: string;
}

type PartialUser = Partial1<User>;

const user: PartialUser = { name: "anonymous" };

console.log(user);

