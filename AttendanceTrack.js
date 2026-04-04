const attendance = ["Present", "Absent", "Present", "Present","Present","Absent"];
let presentCount = 0;
let absentCount = 0;
document.write("<h2 style='color:blue'>Student Attendance Tracker</h2>");
document.write("<h3 style='color:orange'>Day-wise Status</h3>");
for (let i = 0; i < attendance.length; i++) {
    let status=attendance[i];
    let color = (status === "Present") ? "green" : "red";
    document.write(`<p><b>Day ${i + 1}:</b> <span style='color:${color}; font-weight:bold;'>${status}</span></p>`);
}
let j = 0;
while (j < attendance.length) {
    if (attendance[j]==="Absent") {
        absentCount++;
    } else {
        presentCount++;
    }
    j++;
}
document.write("<h3 style='color:orange'>Summary</h3>");
document.write(`<p style='color:darkgreen;'>Total Present: ${presentCount}</p>`);
document.write(`<p style='color:darkred;'>Total Absent: ${absentCount}</p>`);