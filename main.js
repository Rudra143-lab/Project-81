var input_array=[];
var input_array2=[];
function radhe()
{
    for(i=1;i<=8;i++)
    {
    var array1=document.getElementById("input_"+i).value;
    console.log(array1);
    input_array.push(array1);
    }
    
    console.log(input_array);
    Length_array=input_array.length;
    var display_array=[];
    for(j=0;j<Length_array;j++)
    {

    display_array.push(input_array[j]);
    console.log(display_array);
    }
    remove_comma=display_array.join(".");
    console.log(remove_comma);
    document.getElementById("display_paragraph_1").innerHTML=remove_comma;
   
}
    


function get_paragraf_2()
{
    for(i=1;i<=8;i++)
    {
    var array2=document.getElementById("input_"+i+"_paragraf_2").value;
    console.log(array2);
    input_array2.push(array2);
    }
    console.log(input_array2);
    var Length_array1=input_array2.length;
    display_array2=[];
    for(var k=0;k<Length_array1;k++){
        display_array2.push(input_array2[k]);
        console.log(display_array2);
    }
    remove_comma=display_array2.join(".");
    console.log(remove_comma);
    document.getElementById("display_paragraph_2").innerHTML=remove_comma;
}  
