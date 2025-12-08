function strings()
{
    var string1 = document.getElementById("str1").value;
    
    var newString ="";
        var i;
        for (i = string1.length - 1; i >= 0; i--)
        {
            newString += string1[i];
        }

        if(newString === string1)   
        {
            document.getElementById("result").innerHTML ="This is a palindrome. Congrats!";
        }   
        else
        {
            document.getElementById("result").innerHTML ="This is not a palindrome. Try again!";
        }



}