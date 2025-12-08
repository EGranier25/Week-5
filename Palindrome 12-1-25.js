function strings() 
{
    var string1 = document.getElementById("str1").value;

    var splitString = string1.split("");

    //alert(splitString + "original string" + string1);

    var reverseString = splitString.reverse();
    //alert("reversed splitstring = " + reverseString);

    var joinString = reverseString.join("");
    //alert("reversed joined string = " + joinString);

    if(string1 === joinString)
    {
        document.getElementById("result").innerHTML = "yes - REVERSED = original";
    }
    else
    {
        document.getElementById("result").innerHTML = "NOPE - not the same";
    }

        var newString ="";
        var i;
        for (i = string1.length - 1; i >= 0; i--)
        {
            newString += string1[i];
        }

        if(newString === string1)   
        {
            document.getElementById("result").innerHTML ="using for loop - Palindrome! ";
        }   
        else
        {
            document.getElementById("result").innerHTML ="using for loop - Not a Palindrome! ";
        }
}