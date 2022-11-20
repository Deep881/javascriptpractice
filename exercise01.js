// Q1
// let y=8;
// y+=++y+y--+--y
// console.log(y)

// output is 33.

// Q2
// let a=7;
// a+=a++ + ++a + --a + a--

// console.log(a)

// output is 39.
// Q3

// let y=10
// z=(++y*(y++ +5))
// console.log(z)
// output is 176.

// Q4

// let a=63 ,b=36
// // let x=(a<b)?true:false;   //output is false.
// let y=(a>b)?a:b;    // output is 63

// console.log(x)
// console.log(y)

// Q5

//  <  is called as less than or comparison operator
//  ++  is called as the increment operator
// && is called logical operator means both values should be true.
// ?: is called as tirnary operator used when more than three oprand have to be checked.


// Q6
// function main(){
// //   let a=36,b=45,c=53;
// //     let av;
// //     av=(a+b+c)/3;

// // console.log('Average='+av)
// // }
// main()

// // output is 44.66


// Q7

// function main(){
// // let p ,r ,t ,si;

// //     p=parseInt(prompt('enter the pricipal'))
// //     r=parseInt(prompt('enter the rate'))
// //     t=parseInt(prompt('enter the time'))
// //     si=(p*r*t)/100;
// //     alert(si)
// }
// main()


// Q8
// the sign of == is used for comparison of two values and supports to implicict or cohesion conversion.
// the sign of === is used for comparison of two values and doesn't supports to implicict or cohesion conversion.

// Q9
// function main(){
// // let car=3;
// // if (car==1)
// // {
// //     console.log('good')
// // }
// // else if (car==2){
// // console.log('better')
// // }
// // else if (car==3){
// //     console.log('best')
// // }
// // else{
// //     console.log('invalid')
// // }
// }
// main()

// switch (car)
// {
//     case 1:
//     console.log('good')
//     break;
//     case 2:
//         console.log('better')
//         break;

//         case 3:
//             console.log('best')
//             break;
//             default:
//                 console.log('invalid')

// }

// Q10

// function main(){
// let c=50;

// if(c>=90)
// {
//     console.log('your grade is A')
// }
// else if(c>=70 && c<90)
// {
//     console.log('your grade is B')
// }
// else if(c>=50 && c<70 )
// {
//     console.log('your grade is C')
// }
// else
// {
//     console.log('your grade is D')
// }
// }
// main()


// Q11

// function main(){
// let tc,d,ap;
// alert('enter the total cost of the items:')
// tc=prompt('enter cost')

// if(tc<=2000)
// {
//     d=5/100*tc;
// }
// else if(tc<=5000 && tc>=2001)
// {
//     d=25/100*tc;
// }
// else if(tc<=10000 && tc>=5001)
// {
//     d=35/100*tc;
// }
// else
// {
//     d=50/100*tc;
// }
// ap=tc-d
// alert('ammount payable:'+ap)
// }
// main()


// Q12

// function main() {
//     let l, d, name, ad, dis, ld, dd;

//     name = prompt('enter your name')
//     ad = prompt('enter your adress')
//     l = prompt('enter the cost of laptop')
//     d = prompt('enter the value of desktop')


//     if (l >= 0 && l <= 25000 && d >= 0 && d <= 25000) {
//         ld = 0 / 100 * l
//         dd = 5 / 100 * d
//     }
//     else if (l >= 25001 && l <= 57000 && d >= 25001 && d <= 57000) {
//         ld = 5 / 100 * l
//         dd = 7.5 / 100 * d
//     }
//     else if (l >= 57001 && l <= 100000 && d >= 57001 && d <= 100000) {
//         ld = 7.5 / 100 * l
//         dd = 10 / 100 * d
//     }
//     else {
//         ld = 10 / 100 * l
//         dd = 15 / 100 * d
//     }

//     lpa = l - ld
//     dpa = d - dd
//     alert('purchase details:--' + l + d + name + ad + '<<amount to paid==' + lpa + dpa)
// }
// main()

// Q13

// function main() {
//     let age, gender, ti, it

//     age =prompt('enter your age')
//     gender = prompt('enter your gender (all small letters)')
//     ti = prompt('enter your income')
//     if (ti >= 0 && ti <= 160000 && age > 65 && gender == 'female' || 'male') {
//         alert('not applicable for you')
//     }
//     else if (ti >= 160001 && ti <= 500000 && age <= 65 && gender == 'female' || 'male') {
//         it = 10 / 100 * ti
//     }
//     else if (ti >= 500001 && ti <= 800000 && age <= 65 && gender == 'female' || 'male') {
//         it = 20 / 100 * ti + 34000
//     }
//     else {
//         it = 30 / 100 * ti + 94000
//     }

//     itr = ti - it
//     alert(itr)
// }
// main()

// Q14

// var f=1,n;

// n=prompt('enter any integer')

// while(n>=1){
//    f=f*n;
//    n=n-1;
// }
// alert('factorial of integer is'+ f)

// Q15

// function main()
// {
//    let i,n,c=0;
// console.log('enter an integer:');

// n=sc.nextInt();
// for(i=1;i<=n;i++)
// {
//    if (n%i==0) c++;

// }
// if(c==2)
// {
//    console.log('prime number')
// }
// else{
//    console.log('not a prime number')
// }
// }
// main()

// Q16

// function main()
// {
//    let i,s=0;
//    for (i=100; i<998;i+=2)
//    {
//       s+=i;
//    }
//    console.log('sum='+s)
// }
// main()

// Q17

// function main()
// {
//    let i,s=5;
//    for (i=100; i<999;i+=3)
//    {
//       s+=i;
//    }
//    console.log('sum='+s)
// }
// main()

// Q18

// function main()
// {
//    let i,n,f=1;
//    n=prompt('enter an integer:')
//    for(i=1;i<=n;i++)
//    {
//       f=f*i
//    }
//    alert('factorial:'+f)
// }
// main()

// Q19

// function main()
// {
//     let i=1,j=2,l,m;
//     console.log(i);
//     console.log(j);
//     for(l=1;l<=8;l++)
//     {
//         m=i+j;
//         console.log(m);
//         i=j;
//         j=m;
        
//     }
//     sum=0;
//     sum+=i+j+m-2
//         console.log('the sum of lucas series='+sum)
// }
// main()

// Q20

function main()
{
    let i=1,j=2,l,m;
    console.log(i);
    console.log(j);
    for(l=1;l<=13;l++)
    {
        m=i+(2*j);
        console.log(m);
        i=j;
        j=m;
        
    }
}
main()
