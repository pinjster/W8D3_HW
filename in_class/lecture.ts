//LITERAL Types

let myNum : number = 9
myNum = 15

type LuckyNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 ;

let newNum: LuckyNumbers = 5;

//newNum = 11;

const matrixStudent: string = 'ben c'; 

const matrixStudent2: string = 'john doe';

type matrixStudents = 'ben c' | 'christian' | 'ben d' | 'michael' | 'tajay' | 'david' | 'sima';

const matrixStudent3: matrixStudents = 'sima';

//const matrixStudent4: matrixStudents = 'betty w';


//GENERICS 

function takeAny(arg: any){
    return arg;
}

takeAny('matrix')

function takeAnyWithGeneric<T>(arg: T):T {
    return arg
}

console.log(takeAnyWithGeneric('matrix').charAt(0))

const takeAnyArrow = <V>(arg: V):V => {
    return arg
}

takeAnyArrow([1,2,3])

function getLength<T>(arg: T[]):number {
    return arg.length
}

function returnArray<T>(argArray: T[]):T[]{
    return argArray
}

for(const e of returnArray(['a', 'b', 'abc'])){
    console.log(e.endsWith('c'));
}

//class generics

class GenericClassTest<T>{
    constructor(private genericVar: T){
        this.genericVar = genericVar
    }

    getType():string{
        return typeof this.genericVar
    }


}

const genericClass = new GenericClassTest('abc')

console.log(genericClass.getType())

class MultipleGenerics<T, V>{
    constructor(public foo:T, public bar: V) {
        this.foo = foo;
        this.bar = bar;
    }

    getFooType():string{
        return typeof this.foo
    }

    getBarType():string{
        return typeof this.bar
    }
}

const multipleGenerics = new MultipleGenerics([1], 'abc')

console.log(multipleGenerics.getBarType());
console.log(multipleGenerics.getFooType());


interface Lengthwise {
    length: number
}

function getLength2<T extends Lengthwise>(arg: T):number {
    return arg.length
}

getLength2([1,2,3,4,6,7])

//KEY OF

interface User {
    username: string,
    email: string,
    password: string,
    token?: string
}

type OptionalUser = {
    [key in keyof User]?: User[key]
}

type Readuser = {
    readonly [k in keyof User]: User[k]
}

let userInfo: keyof User 
userInfo = 'username'
userInfo = 'email'
userInfo = 'token'
// userInfo = 'anything

const user: User = {
    username: 'sean',
    email: 'seanc@ct',
    password: '123'
}

const user2: OptionalUser = {
    username: 'sean',
    email: 'seanc@ct',
    password: '123'
}


function displayUserInfo(arg: Partial<User>){}

displayUserInfo({username: 'sean', email: 'seanc@ct'})

function storeUserData(user: Required<User>){}

storeUserData({token:'abc', ...user})

const displayUser: Readonly<User> = {...user}
const displayUser2: Readuser = {...user}

console.table(displayUser);
console.table(displayUser2);

displayUser.password