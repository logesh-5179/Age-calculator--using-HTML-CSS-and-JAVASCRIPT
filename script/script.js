function age(){
    let result=document.getElementById("date").value;
    if(result){
        let date=new Date(result);
        let now=new Date();
        let age=now.getFullYear()-date.getFullYear();
        let diff=now.getMonth()-date.getMonth();
        if(diff<0 || (diff===0 && now.getDate()<date.getDate())){
            age--;
    }
    document.getElementById("hello").innerHTML=`You are ${age} years old.`;
}
else{
    document.getElementById("hello").innerHTML="Please enter valid date";
}
}