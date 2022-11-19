function prize(str)
{
var names= ['COLIN','AMANDBA','AMANDAB','CAROL','PauL','JOSEPH'];
var weights= [1, 4, 4, 5, 2, 1];
var strlen;
for(i=0;i<names.length;i++)
{
    if(names[i]==str)
    {
        strlen=weights[i];
    }
}
//console.log(strlen);
var tempstr=str.toLowerCase().split('');
//console.log(tempstr);
var alphabet=['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x','y', 'z'];
//console.log(alphabet.length);
var temp=str.length;
for(i=0;i<tempstr.length;i++)
{
    for(j=0;j<alphabet.length;j++)
    {
        if(tempstr[i]===alphabet[j])
        {
            //console.log(tempstr[i]+'->'+j);
            temp =j+1+temp;
            //console.log(temp);
        }
    }
}
//console.log(temp*strlen);
return temp*strlen;
}
console.log(prize('PauL'));