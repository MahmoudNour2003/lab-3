let student =[
    {name:"ali",degree:70},
    {name:"ahmed",degree:55},
    {name:"sara",degree:90},
    {name:"mona",degree:95},
]
document.write("<h3>Students who scored between 90 and 100:</h3>");
let topStudents = student.find((stu)=>stu.degree>=90 && stu.degree<=100);
document.write("<p>Name: "+topStudents.name+", Degree: "+topStudents.degree+"</p>");
document.write("<h3>students who scored below 60:</h3>");
let lowScorers = student.filter((stu)=>stu.degree<60);
lowScorers.forEach((stu)=>{
    document.write("<p>Name: "+stu.name+", Degree: "+stu.degree+"</p>");
});
student.push({name:"yara",degree:85});
document.write("<h3>All Students:</h3>");
for(stu in student){
    document.write("<p>Name: "+student[stu].name+", Degree: "+student[stu].degree+"</p>");
}
student.pop();
document.write("<h3>After removing last student:</h3>");
for (stu of student) {
    document.write("<p>Name: "+stu.name+", Degree: "+stu.degree+"</p>");
}
student.sort();
document.write("<h3>After sorting students:</h3>");
for (stu of student) {
    document.write("<p>Name: "+stu.name+", Degree: "+stu.degree+"</p>");
}