// console.log("good");
// //object
// let person={    
//     name:"utkarsh",
//     age:18,
//     high: function(){
//         console.log('bittu');
//     }
// };
//factory function
// function makePerson(name,age){
//    let person={    
//        name,
//        age,
//         name:name,
//         age:age,
//        high: function(){
//            console.log('bittu');
//        }
//     //    high(){
//     //        console.log('bittu');
//     //    }
//    };
//    return person;
// }

// let a=makePerson(5,3);
// console.log(a);
// a.high();
// person.high();
//let obj1=makePerson();
//console.log(obj1);

// //constructor function 
// function persons(){
//     this.name='utkarsh';
//     this.age=18;
//     this.high=function(){
//         console.log('bittu');
//     }
// }
// let obj=new persons();
//  console.log(obj);
// obj.color='green';
// console.log(obj);
// delete obj.color;



// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);

// let c={values:10};
// let d=c;
// c.values++;
// console.log(c.values);
// console.log(d.values);
//primitive are copied by their values.references are copied by their address.

// let a=10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);

// let b={values:10};
// function inc(b){
//     b.values++;
// }
// inc(b);
// console.log(b.values);

// let rect={
//     length:10,
//     breadth:20,
// };
// for(let key in rect){
//     console.log(key,rect[key]);
// }

// for(let key of Object.keys(rect)){
//     console.log(key);
// }
// if('color' in rect){
//     console.log("present");
// }
// else{
//     console.log("absent");
// }


// let a={value:10};
//  let b={};
// for(let key in a){
//     b[key]=a[key];
// }
// console.log(b);
// a.value++;
// console.log(b);

// let c={x:40};
//  let b=Object.assign({},a,c);
//  console.log(b);

// let b={... a };




