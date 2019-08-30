function reverseString(s) {

    try {
        var splitString = s.split("");
        var reversedString = splitString.reverse();
        var joinedString = reversedString.join("");
        s = joinedString;

        console.log(s);
    }
    catch(err){
        console.log(err.message);
        console.log(s);
        }

    


}
