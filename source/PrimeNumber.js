function gcd(a,b)
{
    while(a != 0 && b !=0)
    {
        if(a > b)
            a = a % b;
        else
            b = b%a;
    }

    return a+b;
}

function FindSimpleSqrt(a)
{
    for(var i=2;i<Math.sqrt(a);i++)
    {
        if(a%i==0)
            return false;
    }
    return true;
}

function PrimeCheck(a)
{
    var value = document.getElementById('number').value;
    var iterVal = document.getElementById('iterations').value;
    var number = bigInt(value);
    var iterations = bigInt(iterVal);

    var str = number.isProbablePrime(iterations) ? "Число простое" : "Число не простое";
    console.log(str);
    document.getElementById('out').innerText = str;
    

}
