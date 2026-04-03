document.write("<h1>Student Information Manager</h1>");
let a=prompt("Enter Your ID Number");
if(a==252801004){
document.write("<strong style='color:orange'>Note: You can't reassign ID " + a + " because it is a constant.</strong>"+"<br>");
}else{
    document.write("<h2 style='color:blue'>Welcome new Student</h2>"+"<br>");
}
const sid=252801004;
var studentName="Upadhyay Foram Jignesh";
let age=19;
var isActive=true;
let marks=[85,67,78];
var address={
    City:"Rajkot",
    State:"Gujarat",
    Country:"India"
};
document.write("<b>Id:</b>"+sid+"<br>");
document.write("<b>Name:</b>"+studentName+"<br>");
document.write("<b>Age:</b>"+age+"<br>");
document.write("<b>Active:</b>"+isActive+"<br>");
document.write("<b>Marks:</b>"+marks+"<br>");
document.write("<b>Address:</b>"+address.City+","+address.State+","+address.Country);
document.write("<b><h3 style='color:Red'>----Updated Information----</h3>");
 studentName="Dave Ved Kishor";
 isActive=false;
address={
    City:"Helsinki",
    State:"Uusimaa",
    Country:"Finland"
};
document.write("<b>Id:</b>"+a+"<br>");
document.write("<b>Name:</b>"+studentName+"<br>");
document.write("<b>Age:</b>"+age+"<br>");
document.write("<b>Active</b>e:"+isActive+"<br>");
document.write("<b>Marks</b>:"+marks+"<br>");
document.write("<b>Address</b>:"+address.City+","+address.State+","+address.Country+"<br>");
