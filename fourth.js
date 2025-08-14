// run();
function run(){
    console.log('runing');
};
run();//function call
//the function can be executed befor the function declation
// hoisting is the process of moving function declartion to the top of file


//  named function assignment
// stand(); this cannot be executed
// let stand=function  walk(){
//     console.log('utkarsh');
// };
// // stand();
// let jump=stand;
// // let jump=stand(); this is not possible
// jump();


// anonymous function assignment
// let stand=function  (){
//     console.log('utkarsh');
// };
// stand();

// let x=1;
// x='a';
// console.log(x);

// function sum(a,b){
//     console.log(arguments);
//     return a+b;
// };
// sum(1,2);
// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,2,3,4,4));

// function sum(){
//     let total=0;
//     for(let value of arguments){
//        total= total + value;
//     }
//     return total;
// };
// console.log(sum(1,2,3,4,5));


// rest operator
// funcion sum(nums, ...args,nums) this is not possible
// function sum(nums, ...args){
//     console.log(args);
// };
// sum(1,2,3,4,5,6,7);


// // function intrest(p,r=20,y=10) 
// // in case the value of r is not passed in the parameter r would consume default value ehich is r=20 y=20
// function intrest(p,r,y){
//     return p*r/100*y;
// };
// console.log(intrest(100,10,5));
// // console.log(intrest(100,10,5));
// // ther is a rule that after declaring default parameter all the parameter after that should be declared default 
// console.log(intrest(100,undefined,20));
// // it can solve the rule


// let names={
//     fname:'utkarsh',
//     lname:'vijay'
// };
// console.log(names);

// function fullName(){
//     return `${names.fname} ${names.lname}`;
// };
// console.log(fullName());

// getter to access property
// // setter to change or mutate
// let names={
//     fname:'utkarsh',
//     lname:'vijay',

// get fullName(){
//     return `${names.fname}  ${names.lname}`;
// },
// set fullName(value){
//     let parts =value.split(' ');
//     this.fname=parts[0];
//     this.lname=parts[1];
// }

// names.fullName='utkarsh viajyvergiya';
// console.log(names.fullName);//this calls setter 


// errorhandling try & catch
// set fullName(value){ 
//     if(typeof value!==String){
//         throw new Error("wrong string");
//     }
//     let parts =value.split(' ');
//     this.fname=parts[0];
//     this.lname=parts[1];
// }
// };
// try{
//     names.fullName=true;
// }
// catch (e){
//    alert(e); // alert('wrong message');
// }
// console.log(names.fullName);


// scope
//  {  
// var  c=1
// //     let x=1;
// //     console.log(x);
// }
// // console.log(x);
// console.log(c);
// // let scope is in the {}

// function walk(){
//     var a=3;
// };
// console.log(a);
// var scope is in the function 



// reducing an array
// let a=[1,2,3,4];
// let total=0;
// for(let value of a){  //not by for in loop
//     total+=value;
// };  
//     console.log(total);



