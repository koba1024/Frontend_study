//ここで学んだこと。
//Generics の基礎と応用
// mapping modifier(?や-?)



// Partial自力で再実装
type Partial1<T> = {
    [P in keyof T]?: T[P];
}

type User = {
    name: string;
    age: number;
    email: string;
}

type PartialUser = Partial1<User>;

const user1: PartialUser = { name: "anonymous" };

console.log(user1);

// Required自力で再実装
type Required1<T> = {
    [P in keyof T]-?: T[P];
}

// PartialUserをRequiredに入れたら？
type RequiredUser = Required1<PartialUser>;
// ageとemailも追加するように警告がでる
// const user2: RequiredUser = { name: "anonymous" };

// ageとemailも記載すると警告はでない。
// プロパティの順番は関係ない
const user2: RequiredUser = { age: 10, email: "xxx@xxx.com", name: "anonymous" };
console.log(user2);