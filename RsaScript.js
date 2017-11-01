

var rsa = {};
var eConst = bigInt(65537)
var rsaBit = 0;

var b64chars = 
'👾🤖🎃😺😸😹😻😼😽🙀😿😾👐🙌' + 
'😤😠😡😶😐😑💩😧😦😮😲😵😳😱' +
'😨😰😢😥🤤😭😓😪😴🙄🤔🤥😬🤐' +
'🤢🤧😷🤒🤕😈👿👹👺🌂👻' +
'🐒🐔🐧🐦🦋🐣🐥🐠🐟🦀🦑🐙' +
'🌸🌎🐊🐆🐅🐃🐂🐄🦌🐪🐫🐘🦏🦍' +
'🍏🍎🍐🍊🍋🍌🍉🍇🍓🍈🍒🍑🍍🥝' +
'🥑🍅🍆🥒🥕🌽🌛🥔🍠🌰🥜🍯🥐🍞' +
'🥖🧀🥚🍳🥓🥞🍤🍗🍖💯🌭🍔🍟🥙' +
'🌮🌯🥗🥘🍝🍜🍲🍥🍣🍱🍛🍚🍙🍘'+
'🍢🍡🎵🍨🍦🍰🎂🍮🍭🍬🍫🍿🍩🍪🥛'+
'🍼🍵🍶🍺🍻🥂🍷🥃🍸🍹🍾🥄🍴🎯'+
'👟👠🏈🎾🏐🏉🎱🏓🏸🥅🏒🏑🏏' +
'🚗🚕🚙🚌🚎🐺🚓🚑🚒🚐🚚🚛🚜🛴' +
'🚲🛵🍧🚨🚔🚍🚘🚖🚡🚠🚟🚃🚋🚞' +
'🚝🚈🚂🚆🚇🚊🚉🚁🛫🛬' + 
'💛💚💙💜💕💞💓💗💖💘💝' +
'🎼🎹🥁🛂🛃🛄🛅🚹🚺🚼🚻🚮🎦📶🈁🔣'  +
'💪🐋🐬🐤🦅🦆🌴' +
'🐜🐝🐞👛👜👝🎩';


function getCharByDec(dec) {
        var high, low;
        if (dec < 55296) {
            return String.fromCharCode(dec);
        }
        if (dec < 57344) {
            return undefined;
        }
        if (dec < 65536) {
     return String.fromCharCode(dec);

        }
        dec -= 65536;
        high = (dec >> 10) + 55296;
        low = (dec & 1023) + 56320;
        return String.fromCharCode(high) +String.fromCharCode(low);
    }

function base100decode(str) { 

    var b64decoded = ''; 
    var chr1, chr2, chr3; 
    var enc1, enc2, enc3, enc4; 
    for (var i=0; i<str.length;i=i+4) { 
       for(var q=0; q<b64chars.length; q+=2)
          {
            if(str[i] == b64chars[q])
            {
                if(str[i+1] == b64chars[q+1])
                enc1 = q/2;                
            }
          }
            for(var q=0; q<b64chars.length; q+=2)
            {
                if(str[i+2] == b64chars[q])
                    if(str[i+3] == b64chars[q+1])
                        enc2 = q/2;

            }
        var chr = (enc1 << 4) | enc2 ;
        b64decoded += String.fromCharCode((chr))
    } 



    return b64decoded; 
} 

function base100encodeFromStrToStr(str) { 

    var b64encoded = ''; 
    var chr1, chr2, chr3; 
    var enc1, enc2, enc3, enc4; 
  
    for (var i=0; i<str.length;i++) { 
        chr1 = str.charCodeAt(i);
        enc1 = chr1 >> 4;
        enc2 = chr1 & 15;
        b64encoded += b64chars.charAt(enc1*2) + b64chars.charAt(enc1*2 + 1) + b64chars.charAt(enc2*2) + b64chars.charAt(enc2*2 + 1);
       
    } 
  
    return b64encoded; 
} 


function base100decodeFromStringToBigInt(str)
{
            
            var b64decoded = bigInt(0); 
            var chr1, chr2, chr3; 
            var enc1, enc2, enc3, enc4; 
            var iter = 0;

    
            outputArray = '';

            enc1BigInt = bigInt(0);


            for (var i=0; i<str.length;i=i+2) { 
            
               for(var q=0; q<b64chars.length; q+=2)
                  {
                    if(str[i] == b64chars[q])
                    {
                        if(str[i+1] == b64chars[q+1])
                        enc1 = q/2; 

                    }
                  }
                  var iterenc = enc1 << iter*8;
                
                  enc1BigInt = bigInt(enc1);
                

                b64decoded = b64decoded.plus(enc1BigInt.shiftLeft(iter*8));
                iter++;
        }
    
         return b64decoded;  
}



function base100encodeFromBigIntToString(input) { 

    var b64encoded = ''; 
    var chr1, chr2, chr3; 
    var enc1, enc2, enc3, enc4;
  
    var ff = bigInt(input);
    
    
    while(ff > 0)
    {
        
        enc1 = ff.and(0xff);

        
        b64encoded += b64chars.charAt(enc1*2) + b64chars.charAt(enc1*2 + 1);
       
        ff = ff.shiftRight(8);
    }
    return b64encoded; 
} 	



function MakeRSA(number, nKeyElement, dKeyElement)
{
    if(document.getElementById(number).value == '')
    {
        document.getElementById(nKeyElement).value = "Неверно введена длина ключа ключа";
        document.getElementById(dKeyElement).value = "Неверно введена длина ключа ключа";

        return;
    }
    rsaBit =   document.getElementById(number).value;

    document.getElementById(nKeyElement).value = '';
    document.getElementById(dKeyElement).value = '';


    rsa = RSA.generate(rsaBit);
    document.getElementById(nKeyElement).value =  rsa.n;
    document.getElementById(dKeyElement).value = rsa.d;


}


var RSA = {};

RSA.generate = function (keysize) {
/**
 * Generates a random k-bit prime greater than √2 × 2^(k-1)
 *
 * @param   {bits} int, bitlength of desired prime
 * @returns {bigInt} a random generated prime
 */
function random_prime(bits) {
    var min = bigInt(6074001000).shiftLeft(bits-33); // min ≈ √2 × 2^(bits - 1)
    var max = bigInt.one.shiftLeft(bits).minus(1);   // max = 2^(bits) - 1
    while (true) {
        var p = bigInt.randBetween(min, max);  // WARNING: not a cryptographically secure RNG!
        if (p.isProbablePrime(256)) return p;
    
    } 
}

// set up variables for key generation
var e = bigInt(65537),         // use fixed public exponent
    p, q, lambda;

// generate p and q such that λ(n) = lcm(p − 1, q − 1) is coprime with e and |p-q| >= 2^(keysize/2 - 100)
do {
    p = random_prime(keysize / 2);
    q = random_prime(keysize / 2);
    lambda = bigInt.lcm(p.minus(1), q.minus(1));
} while (bigInt.gcd(e, lambda).notEquals(1) || p.minus(q).abs().shiftRight(keysize/2-100).isZero());

return {
    n: p.multiply(q),   // public key (part I)
    e: e,               // public key (part II)
    d: e.modInv(lambda) // private key d = e^(-1) mod λ(n)
};
};

/**
* Encrypt
*
* @param   {m} int / bigInt: the 'message' to be encoded
* @param   {n} int / bigInt: n value returned from RSA.generate() aka public key (part I)
* @param   {e} int / bigInt: e value returned from RSA.generate() aka public key (part II)
* @returns {bigInt} encrypted message
*/
RSA.encrypt = function(m, n, e){
return bigInt(m).modPow(e, n);   
};

/**
* Decrypt
*
* @param   {c} int / bigInt: the 'message' to be decoded (encoded with RSA.encrypt())
* @param   {d} int / bigInt: d value returned from RSA.generate() aka private key
* @param   {n} int / bigInt: n value returned from RSA.generate() aka public key (part I)
* @returns {bigInt} decrypted message
*/
RSA.decrypt = function(c, d, n){
return bigInt(c).modPow(d, n);   
};

function StringToBigInt(str)
{
    if(str == '')  console.log("String is empty");
    
    bigInteger = bigInt(0);
    for(var q=0; q<str.length; q++)
    {
        if(q>0)
            bigInteger = bigInteger.shiftLeft(16);
        bigInteger = bigInteger.plus(str.charCodeAt(q));
        
    }

    return bigInteger;
}

function BigIntToString(bigIntInput)
{
    var output_string2 = '';


    while(bigIntInput.greater(0))
    {
        var we = bigIntInput.and(0xffff);
        output_string2 += String.fromCharCode(we);
        bigIntInput = bigIntInput.shiftRight(16);
        
    }
    return output_string2;
}



function EncryptHTML(originalElement, outElement,errorElement, keyN)
{
    
   
    if(rsa == undefined || rsa==null)
    {
        document.getElementById(errorElement).value = "Ключ не сгенерирован";
        return;
    }

    var original = document.getElementById(originalElement).value;
   /// document.getElementById(outElement).value = "Слишком большой текст";

    if(original.length > rsaBit/16)
    {
        document.getElementById(outElement).value = "Слишком большой текст";
        return;
    }

    if(original == '' || original == null)
    {
        document.getElementById(errorElement).value = "Original text = 0н";
        return;
    }

    var inputBigInt = StringToBigInt(original);

    var inputN = document.getElementById(keyN).value.toString();

    var inputNBigInt = bigInt(inputN);

    var RSAEncrypted = RSA.encrypt(inputBigInt, inputNBigInt , eConst); 



    if(RSAEncrypted == undefined)
    {
        document.getElementById(errorElement).value = "НЕ зашифровано";
        return;
    }

    //Удалить если не надо
   var Base100 = base100encodeFromBigIntToString(RSAEncrypted);

    document.getElementById(outElement).value = Base100;
    return;

}

function DecryptHTML(originalElement, outElement,errorElement, dInput, nInput)
{
    var bigIntD = bigInt(document.getElementById(dInput).value);

    var bigIntN = bigInt(document.getElementById(nInput).value);

    var inputStr = document.getElementById(originalElement).value;



    //var inputBigInt = bigInt(inputStr);

    var inputBigInt = base100decodeFromStringToBigInt(inputStr);  

    console.log(inputBigInt);
    


    var Decrypted = RSA.decrypt(inputBigInt, bigIntD , bigIntN );
    
    

    var outMessage = BigIntToString(Decrypted);

    outMessage = outMessage.split('').reverse().join('');

    document.getElementById(outElement).value = outMessage;

}
