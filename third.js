// console.log('utkarsh vijay');
// let lastName ='bittu';
// let firstNmae = new String('utkarsh');

// let message='this is\n \'my\' "first" \n message';
// console.log(message);
// let words=message.split(' ');
// console.log(words);
// let value=`this 'is new ' ${firstNmae} messa"ge`;
// console.log(value);

// let date =new Date();
// let date =new Date('june 20 1997');
// let date =new Date(1997,9,30,10);
// date.setFullYear(2004);
// console.log(date);



// let numbers=[1,3,5,7];
// console.log(numbers);
// // Push
// // unshift
// // splice
// console.log(numbers.indexOf(3));
// if(numbers.indexOf(5)!=-1){
//     console.log('present');
// }
// console.log(numbers.includes(7));
// console.log(numbers.indexOf(1,0));//0=starts from which index

// let person=[
// {   no:1, names:'utkarsh'},
// {   no:2, names:'vijay'}
// ];
// console.log(person);
// // console.log(person.indexOf({no:1, names:'utkarsh'}) );
// let persons=person.find (persons =>  persons.names=='utkarsh');
// // let persons=person.find(function(persons){
// //     return persons.names=='vijay';
// // })
// console.log(persons);

// let numbers=[1,3,5,7,9];
// // numbers.pop();
// // numbers.shift();
// numbers.splice(1,1);
// console.log(numbers);


// let no=[1,2,3,4,5];
// let xo=no;
// // no.length=0;
// // no.splice(0,no.length);
// // no=[];
// console.log(no);
// console.log(xo);


// let first=[1,2,3];
// let second=[4,5,6];
// let combined=first.concat(second);
// console.log(combined);

// let combined=[...first,...second];
// console.log(combined);


// // let sliced=combined.slice(2,3);
// let sliced=combined.slice(2,4);//2start index        3end-1 index
// console.log(sliced);
// let marks=[1,2,3,4,5,6,7,8,9];
// let slices=marks.slice();
// console.log(slices);


// let first=[1,2,3];
// let second=[4,5,6];
// // let combined=[...first,...second];//spread operator
// let combined=[...first,'a',...second,'b'];
// console.log(combined);

// //copy create
// let another=[...combined];


// let arr=[1,2,34,5,6];
// for(let value of arr){
//     console.log(value);
// }
// arr.forEach(function(numbers){
//     console.log(numbers);
// });

// arr.forEach(numbers =>  console.log(numbers));

// joining of array
// let nu=[1,2,3,4,5,5,6,8];
// let joined=nu.join('_');
// console.log(joined);
// let spit=joined.split(' ');
// console.log(spit);

// spliting of array
// let nus='this is my first message'
// let spliting=nus.split(' ');
// console.log(spliting);
// let goin=spliting.join('-');
// console.log(goin);

// sorting
// let nu=[1,3,6,4,8,5,];
// let sort=nu.sort();
// // console.log(nu);
// console.log(sort);
// nu.reverse();
// console.log(nu);

// object
// 

// filtering
// let nu=[1,4,-1,-3];
// let filtering=nu.filter(function(value){
//     return value >=0;
// });
// console.log(filtering);


// mapping
// let nu=[1,2,3,4,5,7,8,9];

// let maping=nu.map(function(value){
//     return 'bit'+ value;
// });
// console.log(maping);

// // mapping with objects
// let nu=[1,4,-1,-4];
// let filtering=nu.filter(num => num>=0);

// let items=filtering.map(function(bits){
//     let obj={num: bits};
//     return obj;
// });
// console.log(items);

// let nu=[1,4,-1,-4];
// let items=nu
// .filter(num => num >=0) 
// .map(bits => {num:bits});
// console.log(items);





