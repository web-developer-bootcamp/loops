console.log("all numbers between -10 and 19");
function loop1(){
    var n = -10;

    while(n < 20)
    {
        console.log(n);
        n++;
    }
}
loop1();

console.log("all even numbers between 10 and 40")
function loop2(){
    var n = 10;

    while(n < 40)
    {
        console.log(n);
        n++;
        n++;
    }
}
loop2();

console.log("all odd numbers between 300 and 333");
function loop3(){
    var n = 301;

    while(n < 334)
    {
        console.log(n);
        n++;
        n++;
    }
}
loop3();

console.log("all numbers divisible by 5 and 3 between 5 and 50");
function loop4(){
    var n = 5;

    while(n <= 50)
    {
        if(n % 5 == 0 && n % 3 == 0) 
        {
            console.log(n);
        }
        n++;
    }
}
loop4();