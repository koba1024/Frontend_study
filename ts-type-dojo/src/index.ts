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


// Pick自力で再実装
// extends: K は keyof T の範囲内でないとダメ
type Pick1<T, K extends keyof T> = {
    [P in K]: T[P];
}

type User2 = Pick1<User, "name" | "age">;

// Omit自力で再実装
// キーを never にすると、そのキーは mapped type の結果から消える
type Omit1<T, K extends keyof any> = {
    [P in keyof T as P extends K ? never : P]: T[P];
}
// emailのみになる
type User3 = Omit1<User, "name" | "age">;

// Exclude自力で再実装
// TからUを取り除く Union型の操作
type Exclude1<T, U> = T extends U ? never : T;

// Extract自力で再実装
// TからUだけを取り出す Union型の操作
type Extract1<T, U> = T extends U ? T : never;
