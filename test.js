
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
             var b64chars = 
        '👾🤖🎃😺😸😹😻😼😽🙀😿😾👐🙌' + 
        '😤😠😡😶😐😑😯😦😧😮😲😵😳😱' +
        '😨😰😢😥🤤😭😓😪😴🙄🤔🤥😬🤐' +
        '🤢🤧😷🤒🤕😈👿👹👺💩👻💀☠️👽' +
        '👗👙👘👠👡👢👞👟' +
        '🐳🐋🐊🐆🐅🐃🐂🐄🦌🐪🐫🐘🦏🦍' +
        '🍏🍎🍐🍊🍋🍌🍉🍇🍓🍈🍒🍑🍍🥝' +
        '🥑🍅🍆🥒🥕🌽🌶🥔🍠🌰🥜🍯🥐🍞' +
        '🥖🧀🥚🍳🥓🥞🍤🍗🍖🍕🌭🍔🍟🥙' +
        '🌮🌯🥗🥘🍝🍜🍲🍥🍣🍱🍛🍚🍙🍘'+
        '🍢🍡🍧🍨🍦🍰🎂🍮🍭🍬🍫🍿🍩🍪🥛'+
        '🍼🍵🍶🍺🍻🥂🍷🥃🍸🍹🍾🥄🍴🍽'+
        '⚽️🏀🏈⚾️🎾🏐🏉🎱🏓🏸🥅🏒🏑🏏' +
        '🚗🚕🚙🚌🚎🏎🚓🚑🚒🚐🚚🚛🚜🛴' +
        '🚲🛵🏍🚨🚔🚍🚘🚖🚡🚠🚟🚃🚋🚞' +
        '🚝🚈🚂🚆🚇🚊🚉🚁🛫🛬' + 
        '💛💚💙💜💕💞💓💗💖💘💝' ;   



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

    function base100encode(str) { 
    
         var b64chars = 
        '👾🤖🎃😺😸😹😻😼😽🙀😿😾👐🙌' + 
        '😤😠😡😶😐😑😯😦😧😮😲😵😳😱' +
        '😨😰😢😥🤤😭😓😪😴🙄🤔🤥😬🤐' +
        '🤢🤧😷🤒🤕😈👿👹👺💩👻💀☠️👽' +
        '👗👙👘👠👡👢👞👟' +
        '🐳🐋🐊🐆🐅🐃🐂🐄🦌🐪🐫🐘🦏🦍' +
        '🍏🍎🍐🍊🍋🍌🍉🍇🍓🍈🍒🍑🍍🥝' +
        '🥑🍅🍆🥒🥕🌽🌶🥔🍠🌰🥜🍯🥐🍞' +
        '🥖🧀🥚🍳🥓🥞🍤🍗🍖🍕🌭🍔🍟🥙' +
        '🌮🌯🥗🥘🍝🍜🍲🍥🍣🍱🍛🍚🍙🍘'+
        '🍢🍡🍧🍨🍦🍰🎂🍮🍭🍬🍫🍿🍩🍪🥛'+
        '🍼🍵🍶🍺🍻🥂🍷🥃🍸🍹🍾🥄🍴🎯'+
        '⚽🏀🏈🎾🏐🏉🎱🏓🏸🥅🏒🏑🏏' +
        '🚗🚕🚙🚌🚎🏎🚓🚑🚒🚐🚚🚛🚜🛴' +
        '🚲🛵🏍🚨🚔🚍🚘🚖🚡🚠🚟🚃🚋🚞' +
        '🚝🚈🚂🚆🚇🚊🚉🚁🛫🛬' + 
        '💛💚💙💜💕💞💓💗💖💘💝' +
        '🎼🎹🥁🛂🛃🛄🛅🚹🚺🚼🚻🚮🎦📶🈁🔣'  +
        '❎🌐🌀💤🏧🚾🈳' +
        '🏴🏁🔍🔎🔏💌📥📤📦';
           
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
    