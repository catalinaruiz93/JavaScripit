console.log("hola desde index.js")

/* variables */
var x=10
var y=55.55
var nombre="pedro"
var text= "mi nombre es Pedro Perez";
console.log(text)

var text='hola a todos!\'soy Pedro un estudiante que aprende a programar.\'';
console.log(text)


/* OPERADORES MATEMATICOS */
var x=10+5;
console.log(x)
var x=10;
var y=x+5+22+1000+50;
console.log(y)
var z=x*2;
console.log(z)
var y=y/4;
console.log(y)
var d=26%6;
console.log(d)


/* OPERADORES DE ASIGNACION*/

var x= x-=y+=9
console.log(x)
var x=x=-(y+9)
console.log(x)

var x=4==10
console.log(4==10)


/* OPERADORES DE COMPARACION */

var x=(4>2)&&(10<15)
console.log(x)

/* OPERADORES DE  CADENA DE TEXTO */
var texto1="Mi nombre es catalina Ruiz "
var texto2="aprendo JavaScript <br />"
document.write(texto1+texto2) 


var x ="50";
var y="200";
document.write(x+y);

/* CONDICIONALES  */
/*IF*/
var mynum1 = 7;
var mynum2 = 10;
if (mynum1 < mynum2)  {
    alert("javascript is easy to learn.")
}
var mynum1 = 7;
var mynum2 = 10;
if (mynum1 > mynum2)  {
    alert("javascript is easy to learn.")
}
/*ELSE*/
var mynum1 = 7;
var mynum2 = 10;
if (mynum1 > mynum2) {
    alert ("this is my first condition");
}
else{
    alert("this is my second condition");
}

var course =3;
if (course ==1) {
    document.write("<h1>HTML Tutorial</h1>");

} else if (course ==2) {
    document.write("<h1>CSS Tutorial</h1>");

}else{
    document.write ("<h1>Javascript Tutorial</h1>");
}
/*SWITCH*/
var day=3;
switch(day){
    case 1:
        document.write( 'monday' + '<br / >'+ '<br / >' );break;
    case 2:
        document.write( 'tuesday' + '<br / >'+ '<br / >'  );break;
    case 3:
        document.write( 'wednesday'+ '<br / >'+ '<br / >' );break;
        default:
        document.write( 'another day'  + '<br / >'+ '<br / >');
}
// outputs "tuesday "

/*BUCLES*/
/*FOR*/

for (i=1; i<=5; i++) {
    document.write(i + "<br/>");
}

/*WHILE*/
var i=0;
while (i<=10) {
    document.write(i + "<br />");
    i++;
}

/*DO WHILE*/
var i=20;
 do {
     document.write( i + "<br />");
     i++;
 } 
 while (i <= 25);

 /*BREAK Y CONTINUE*/

 for (i = 0; i <= 10; i++) {
    if (i == 5) {
        break;
   }
   document.write(i + "<br />");
}
for (i = 0; i <= 10; i ++) {
    if (i == 5) {
        continue;
    }
    document.write(i + "<br />");
}
/*funciones*/

function sayHello(name) {
    alert("Hi, "+ name)
}
sayHello("catalina");
//alerts "Hi, Catalina"
function sayHello(catalina, age) {
    document.write(catalina + " is " + 27 + 
     " years old. " );
}



function myfunction(a,b){
    return a*b;
}
var x=myfunction (5,6);
//return value will end  up in x 
//x equals 30
console.log(myfunction (5,6));

 /*VENTANAS*/
 /*ALERT*/
alert("do you really want to leave this page?");
/*PROMPT*/
var user=prompt("please enter your name");
alert(user);

/*CONFIRM*/
var result=confirm("Do you really want to leave this page?");
if (result == true) {
    alert ("thanks for visiting");
}
else {
    alert("thanks for satying with us");
}
/*EMACAcrrips6*/
 var a = 10 ;
 const b = 'hello' ;
 let c  = true;

/*VAR Y LET*/
 function varTest () {
    var s = 1;
    if(true) {
        var s = 2;
        console.log (s); //2
    }
    console.log (s); //2
}
varTest()
function letTest () {
    let s = 1;
    if (true) {
        let s = 2;
        console.log (s); //2
    }
    console.log (s); //1
}
letTest()
/*LET EN BUCLES*/
for (let i = 0; i < 3; i++) {
    document.write(i);
}

/*CONST*/
const e='hello';
document.write(e);
ee='bye';
document.write(e);

/*TEMPLATE LITERALS*/

let name = 'catalina' ;
let msg = `welcome ${name}!` ;
console.log(msg);
let num_1=8;
let num_2=34;
let msg_1=`The  sum is ${num_1+num_2}` ;
console.log(msg_1)

/*BUCLES Y FUNCIONES*/

let list=["x","y","z"];
for (let val of list) {
    console.log(val)
}
 
const add = (x, y) => {
    let sum = x + y;
    console.log(sum);
}
add(2,4)

const test = ( a, b = 3, c = 42) =>
{
    return a + b + c;

}
console.log(test(5)); //50

/*OBJETOS*/
/*como se imprime objetos */
let tree = {
    height: 10,
    color: 'green',
    grow () {
        this.height += 2;
    }
};
tree.grow();
console.log(tree.height); //12

let height = 5;
let health = 100;
let athlete = {
    height,
    health
};


let prop = ' name' 
let id = '1234'
let mobile = '08923'

let user_1= {
    [prop]: 'jack',
    [`user_${id} `]: `${mobile}`
};
var i = 0;
var a = {
    ['foo' +  ++i]: i,
    ['foo' +  ++i]: i,
    ['foo' +  ++i]: i
};
var param = ` size` ;
var config = {
    [param] : 12,
    [` moble` + 
param.charAt(0).toUpperCase () +
param.slice(1)]: 4
};
console.log(config);

/*OBJECT ASSIGN*/
let person = {
    name:`jack` ,
    age: 18,
    sex: `male`
};
let student = {
    name:  `Bob` ,
    age: 20 ,
    xp:`2`    
};
let newstudent = Object.assign({},person, student);
console.log(person.name);

/*DUPLICADO OJETO*/

let person_1= {
    name: `jack` ,
    age: 18
};
let newperson = Object.assign({} ,person);
newperson.name = `Bob`;
console.log (person.name); // Jack
console.log(newperson.name); // Bob

/*DAR VALOR A UN OBJETO*/
let person_2=  {
    name: `jack` ,
    age: 18
};
let newperson_2= Object.assign({}, person, {name: `Bob`});

/*DESESTRUCTURACION*/

let arr = [`1`, `2`, `3`];
let [ one, two, three] = arr;
console.log(one);//1
console.log(two);//2
console.log(three);//3

/*DESCOMPONER ARRAY DEVUELTO POR UNA FUNCION*/
let ae =  ()=> {
    return [1 , 3, 2];
};
let [one1,  ,two1] = ae();
console.log(one1);
console.log(two1);

/*DESCOMPONER OBJETOS*/
let obj = {h:100, s: true};
let {h, s} = obj;

console.log(h);// 100
console.log(s);//true
let a_1, b_1;
({a_1, b_1} = {a_1: `Hello `,b_1:`Jack`});
console.log(a_1 + b_1 );// Hello Jack

let {a_2, b_2} =  {a_2:`Hello `, b_2: 
`Jack`} ;
console.log(a_2+ b_2);
 
var o = {h: 42, s: true};
var { h: foo, s: bar} =o;
//console.log(h); //Error
console.log(foo); // 42

var obj1 = {id: 42, name: "Jack"};
let {id_obj = 10, age = 20} = obj1;

console.log(id_obj); //42
console.log(age);//20


/*PARAMETROS REST Y SPREAD*/
function containsAll (arr,...nums)
{
    for(let num of nums){
        if(arr.indexOf (num)=== -1)
    {
        return false;
    }
}
    return true;
}
/*SPREAD*/
function myfunction(w, x, y, z){
    console.log(w + x + y + z) ;
}
var args = [ 1, 2, 3];
myfunction.apply(null, args.concat(4));

const myfunction1 = (w, x, y, z)=>
{
    console.log (w + x + y + z);

};
let args1 = [1, 2, 3];
myfunction(...args, 4);



/*falta codigo fecha*/
var dateFields = [1970, 0, 1]; //1 jan 1970
var date = new
Date(1970, 02, 4);
console.log(date);


/*SPREAD EN LITERALS DE OBJETOS*/
var arr3 = ["one", "two", "five"];
arr.splice(2, 0, "three");
arr.splice(3, 0, "four");
console.log(arr);
let newArr = ['three', 'four'];
let arr_3 = ['one','two',...newArr, 'five'];
console.log(arr3);

/*SPREAD EN LITERALS DE OBJETOS*/
const obj0= { foo: 'bar' , x: 42 };
const obj01= { foo: 'baz' , y: 5};
const merge = (...Object) => ({...Object});
let mergeobj = merge (obj0, obj1);
let mergeobj2=merge({},obj0,obj01);

var arr_1 = ["one", "two", "five"];
arr.splice(2, 0, "three");
arr.splice(3, 0, "four");
console.log(arr_1);

let newarr = [`three` , `four`];
let arr_2= [`one` , `two`,newarr, `five`];
console.log(arr_2)
 

const obj3 = {fooo: 'bar', x: 42};
const obj4 = { foo: 'baz', y: 5};
const merge1= (...objects) => 
({...objects});
let mergeobj3 = merge1(obj3,obj4);
//{0: {foo: 'bar' , x:42 }, 1:
{ foo: 'baz' , y; 5 } 
let mergeobj4 = merge1 ({},obj3,obj4);
//{0: {}, 1: {foo: 'bar' ,x:42},2:{foo: 'baz', y:5 } }

/*CLASES*/
class rectangle {
    constructor(height,width){
        this.height = height;
        this.width = width
    }
}
const square_1= new rectangle(5,5);
const poster = new rectangle(2,3);

var square = class rectangle{
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
var square = class {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
};
 
/*METODOS DE CLASE*/
class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    get area (){
        return this.calcArea();
    
    }
    calcArea() {
        return this.height * this.width
    }
}
    const _1 = new Rectangle(5,5);
    console.log(square.area); //25

/*METODO STATIC*/

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance (a, b){
        const  dx = a.x - b.x;
        const  dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}
 const p1 = new Point (7, 2);
 const p2 = new Point (3,8);
 console.log(Point.distance(p1,p2));

 /*HERENCIA*/

 class Animal{
     constructor(name){
         this.name = name;

     }
     speak(){
         console.log(this.name + 'makes a noise');
            
     }
 }
 class Dog extends Animal {
     speak(){
         console.log(this.name + ' barks.');
     }
 }
 let dog = new Dog ('Rex');
 dog.speak();

/*se utiliza la palabra SUPER para utilizar los metodos del padre*/
 class Animalp{
     constructor(name) {
         this.name = name;
     }
 speak() {
     console.log( this.name + 'makes a noise.');
    }
}

class Dogp extends Animal {
    speak(){
        super.speak(); //super
        console.log(this.name + 'barks.');
    }
}
let dogp = new Dogp ('Rex');
dog.speak();

/*MAP Y SET*/

let map = new Map([['k1', 'v1'],['k2', 'v2']]);
console.log(map.size);//2

let map1 = new Map();
map1.set('k1', 'v1').set('k2', 'v2');
console.log(map1.get('k1'));//v1
console.log(map1.has('k2'));//true
for (let kv of map1.entries())
    console.log(kv[0] + " : " + kv[1]);


let set = new  Set([1, 2, 4, 2, 59, 9, 4, 9,1]);
console.log (set.size);//5

let set1 = new Set();
set.add(5).add(9).add(59).add(9);
console.log(set.has(9));
for (let v of set.values())
console.log(v);

/*PROMISES*/

function asyncFunc (work){
    return new
Promise(function(resolve,reject)
{
    if(work === "")
    reject(Error ("Nothing"));
    setTimeout (function() {
        resolve (work);
    }, 10000);
});
}
asyncFunc("work 1") //Task 1
.then(function(result) {
    console.log(result);
    return asyncFunc("Work 2"); // Task 2
}, function(error){
    console.log(error);
})
.then(function(result) {
    console.log (result);
}, function(error) {
    console.log(error);
});
console.log("End");

/*ITERADORES Y GENERADORES*/

let myIterableObj = {
    [Symbol.iterator] : function* ()
    {
    yield 1; yield 2; yield 3;
}}
    console.log([myIterableObj]);


/*EJEMPLO DE ITINADORES*/
/*falta ejemplo*/



const arr4 = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
    [Symbol.iterator]: function*()
{
    for(let index of arr){
        yield`${index}`;
    }
}
};
const all = [...my_obj]
.map(i => parseInt(i,10))
.map(Math.sqrt)
.filter((i) => i <5)
.reduce((i,d) => i + d);
console.log(all);

/*MODULOS*/
/*falta ejemplo*/


/*METODOS INTEGRADOS*/
[4, 5, 1, 8, 2, 0].filter (function (x){
    return x > 3;
}) [0];

[4, 5, 1, 8, 2, 0].find (x => x > 3);

[4, 5, 1, 8, 2, 0].findIndex (x => x > 3);

console.log(Array(3 + 1 ).join("foo")); //foofoofoo

console.log("foo".repeat(3)); //foofoofoo

"SoloLearn" .indexOf("Solo") ===
0; //true

"SoloLearn" .indexOf("Solo") ===(4
-"solo" .length);//true

"SoloLearn" .indexOf("Solo") !== -1; //true
"SoloLearn" .indexOf("olo", 1) !== -1; //true
"SoloLearn" .indexOf("olo", 2) !== -1; // false
"SoloLearn" .startsWith("Solo",0) ; // true
"SoloLearn" .endsWith("Solo",4); // true
"SoloLearn" .includes("lole");  //true
"SoloLearn" .includes("olo", 1); //true
"SoloLearn" .includes("olo", 2); //false