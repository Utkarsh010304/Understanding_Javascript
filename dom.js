// document.addEventListener('click', function(){
//     console.log('i am utkarsh vijay');
// });
// function vijay(){
//     console.log('i am a pro');
// };
// document.addEventListener('click',vijay);
// document.removeEventListener('click',vijay);
// // adding 100 para
// const t1=performance.now();
// for(let i=0; i<100; i++){
//     let news=document.createElement('p');
//     news.textContent='this is para' +i;
//     document.body.appendChild(news);
// }
// const t2=performance.now();
// console.log('this takes' +(t2-t1)+ 'ms');

// // optimising
// const t3=performance.now();
// let mydiv=document.createElement('div');
// for(let i=0; i<100; i++){
//     let newsop=document.createElement('p');
//     newsop.textContent='this is para' +i;
//     mydiv.appendChild(newsop);
// }
// document.body.appendChild(mydiv);

// const t4=performance.now();
// console.log('this takes' +(t4-t3)+ 'ms');

// const t3=performance.now();
// let fragement=document.createDocumentFragment();
// for(let i=0; i<100; i++){
//     let news=document.createElement('p');
//     news.textContent='this is para' +i;
//     fragement.appendChild(news);
// }
// document.body.appendChild(fragement);
// const t4=performance.now();
// console.log('this takes' +(t4-t3)+ 'ms');

// promises
// let promise=new Promise(function(resolve, reject){
//     // console.log('i am inside promise');
//     // resolve(2004);
//     setTimeout(function(){
//         console.log('i am inside promise  1');
//     },3000);
//     // resolve(2008);
//     reject(new Error('please side  1'));
// });


// let promese=new Promise(function(resolve, reject){
//     // console.log('i am inside promise');
//     // resolve(2004);
//     setTimeout(function(){
//         console.log('i am inside promise  2');
//     },3000);
//     // resolve(2004);
//     reject(new Error('please side  2'));
// });
// console.log('utkarsh');

// promise.then(value => console.log(value), (error) => {console.log('recieved an error')});
// // promise.catch((error) => console.log('recieved an error'));
// console.log('first');


// let vada1=new Promise(function(resolve,reject){
//     setTimeout(() =>{
//         console.log('set time out started');
//     },2000);
//     // resolve(true);
//     // reject(new Error('i caught you'));
    
// });
// let output=vada1.then(()=>{
//     let vada2=new Promise(function(resolve,reject){
//         setTimeout(() =>{
//             console.log('set time in  started');
//         },3000);
//         resolve('vada2 resolve');
//     });
//     return vada2;
// });
// output.then((value)=>{console.log(value)});
// // vada1.catch((error) =>console.log('error recieved'));

// async function
//  async function abcd(){ 
//    return 7;
// };
// console.log(abcd);


// async function  utility(){ 
//     let delhiMausam=new Promise((resolve, reject) =>
//         {
//         setTimeout(() =>{
//             resolve('heavy rainfall');
//         },10000);
//     });
//     let kotaMausam=new Promise((resolve, reject) =>
//         {
//         setTimeout(() =>{
//             resolve('drought');
//         },20000);
//     });
//     let dM= delhiMausam;
//     let kM= kotaMausam;
//     // return(dM,kM); this is wrong
//     return[dM,kM];//this is right
     
// };

























