let a = Number(prompt("Check If You are eligible for salary or not"));
let depar = prompt("Enter Your Department");
let exp = Number(prompt("Enter your Experience"));
document.write("<h1 style='color:orange'>See Your Salary Status</h1>");
if (a > 20000 && depar.toUpperCase() === "IT" && exp >= 2) {
    let totalSalary = a + 2000;
    document.write("<h3 style='color:blue'>In the salary of " + a + 
                   " you deserve bonus of 2000rs. " + 
                   totalSalary + " is your total salary</h3>");
                   document.write("<b>Salary: </b>"+a+"<br>");
document.write("<b>Department: </b>"+depar+"<br>");
document.write("<b>Experience: </b>"+exp);
} else {
    document.write("<h3 style='color:red'>You have time for the bonus</h3>");
    document.write("<b>Salary: </b>"+a+"<br>");
document.write("<b>Department: </b>"+depar+"<br>");
document.write("<b>Experience: </b>"+exp);
}