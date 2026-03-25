let marks={
    Foram:"34",
    Palak:"45",
    Nitu:"23",
    Sneha:"56"
}
for(let i=0;i<Object.keys(marks).length;i++){
    document.write("The marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]]+"<br>")
}
let a=prompt("Enter Your Marks");
switch(a){
    case 34:
        document.write("Pass class");
        break;
        case 45:
            document.write("First Class");
            break;
            case 23:
                document.write("Needs Improvement");
                break;
                case 56:
                    document.write("Distinction");
                    break;
                    default:
                        if(a<20){
                            document.write("I need to meet your parents");
                        }else if(a>30&&a<=60){
                            document.write("Keep Going");
                        }else{
                            document.write("Collect your result from me");
                        }
}