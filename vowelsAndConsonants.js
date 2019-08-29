function vowelsAndConsonants(s) {

    var splitString = s.split('');

    let rex = /^[aeiou]/i;
    let consonantRex = /^[bcdfghjklmnpqrstvwxyz]/i 
    let vowels = splitString.filter(str => rex.test(str));
    let consonants = splitString.filter(str => consonantRex.test(str));

    for (var i = 0; i < vowels.length; i++)
    {
        console.log(vowels[i]);
    }

    for (var j = 0; j < consonants.length; j++)
    {
            console.log(consonants[j]);
    }


}
