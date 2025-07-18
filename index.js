// var name="aayushi"
// console.log("hellow!!"+name)

// // program-1 (even or odd)

// var n=5
// if(n%2)
// {
//     console.log("odd number")
// }
// else
// {
//    console.log("even number")
// }

// // program -2 (max of any two number)

// var a=7
// var b=10
// if(a>b)
// {
//     console.log("a is maximum number")
// }
// else
// {
//     console.log("b is maximum number")
// }

// // program-3 (leap year)

// var n=2024
// if(n%4)
// {
//     console.log(" none leap year")
// }
// else
// {
//     console.log(" leap year")
// }

// // program-4 (sum of natural number)

// var a=5
// var sum=0
// for(i=1;i<=a;i++)
// {
//    sum+=i 
// }
// console.log(sum)

// // program-5 (factorial of a number)

// var a=4
// var fac=1
// for(i=1;i<=a;i++)
// {
//    fac*=i 
// }
// console.log(fac)

// // program-6 (multiplication table)

// var a=3
// for(i=1;i<=10;i++)
// {
//     console.log(`${a} x ${i} = ${a*i}`)
// }

// // program-7 (reverse a number)

// var a=322142
// var b=a.toString().split('').reverse().join('')

// console.log(b)

// // program-8 (palindrome check (number))

// var a=121
// var b=a.toString().split('').reverse().join('')
// if(a==b)
// {
//     console.log("number is palindrome")
// }
// else{
//     console.log("number is no palindrome")
// }

// // program-9  (prime number)
 
// var number=21
// var prime=1
// for(i=1;i<=number/2;i++)
// {
//     if(number%2==0)
//     {
//         prime=0
//         break
//     }
    

// }
// if(prime&&number)
// {
//     console.log("number is prime")
// }
// else
// {
//     console.log("number is not prime")
// }

// // program-10 (count digit in a number)

// function digit(dnum)
// {
//     return String(dnum).length;
// }
// let dnum1=1234456
// console.log(digit(dnum1))

// program-11 (sum of digits)

// function sumDigits(num) {
//     // Convert the number to a string
//     const numStr = num.toString();
    
//     // Split the string into individual characters (digits)
//     // Convert each digit back to a number and sum them up

//     // isNaN =NOT A NUMBER
   
//     let sum = 0;
//     for (const char of numStr)
//      {
//       if (!isNaN(char)) 
//       {
//         sum += Number(char);
//       }
//     }
    
//     return sum;
//   }
//   console.log(sumDigits(1223))

//   program-12 (Check Armstrong Number)

let n=153
let num=n.toString()
let count=num.length

let sum=0
 for (let digit of original){
     sum+= Math.pow(Number(digit),count)

 }
 if(sum===n){
     console.log("number is armstrong")
 }
 else{
    console.log("number is not armstrong")
 }



// program-13 (Generate Fibonacci Series)
// a+b=c -->0+1=1  1+1=2  1+0=1 1+2=3 3+4=7

// var a=0
// var b=1
// var c=0
// var d=5
// for(var i=0;i<d;i++){
//     console.log(a)
//     c=a+b 
//     a=b 
//     b=c
// }


// program-14 (Check Vowel or Consonant)

// let char="a"
// if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"||char==="A"||char==="E"||char==="I"||char==="O"||char==="U")
// {
//     console.log('its a vowel')
// }
// else
// {
//     console.log('its a consonant')
// }

// program-15 (Simple Calculator)

// let a=3
// let b=4
// let sum=a+b
// console.log("sum:-",sum)

// let difference=a-b
// console.log("difference:-",difference)

// let product=a*b
// console.log("product:-",product)

// let quotient=a/b
// console.log("quotient:-",quotient)

// program-16 ( Find GCD (HCF))

// function gcd(p,q)
// {
//     if(q==0)
//     {
//         return p;
//     }
//     return gcd(q,p%q)
// }
// const a1=25
// const b1=30
// console.log(`gcd of ${a1}and ${b1} is:${gcd(a1,b1)}`)

// program-17 (Check Perfect Number)

// let a=25
// let b=27
// for(i=1;i<a;i++)
// {
//     if(a%i==0)
//     {
//         b+=i
//     }
// }
// if(a=b)
// {
//     console.log("number is perfect")
// }
// else{
//     console.log("number is not perfect")
// }


// program-18 (Print All Divisors)
 
// var a=10
// for(i=1;i<a;i++)
// {
//     if(a%i==0)
//     {
//         console.log(i)
//     }
// }

// program-19 ( Number is Positive, Negative or Zero)

// var n=17
// if(n>0)
// {
//     console.log("number is positive")
// }
// else if(n<0)
// {
//     console.log("number is negative")
// }
// else
// {
//     console.log("number is zero")
// }

// program-20 (Find Power (Exponentiation))

// var y=5
// var v=9
// var result=1
// for(i=0;i<v;i++)
// {
//     result*=y
// }
// console.log("power:-",result)