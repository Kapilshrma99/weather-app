const ddd=document.querySelector(".ddd");
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
let currTime=new Date();

const getCurrDay=()=>{
    
    ddd.innerHTML=weekday[currTime.getDay()] +" | " +month[currTime.getMonth()]+" | "+currTime.getDate()+" | "+currTime.getFullYear();
};
const getCurrTime=()=>{
    let hours=currTime.getHours();
    let minutes=currTime.getMinutes();
    let status="AM";
    if(hours>12){
        hours-=12;
        status="PM";
    }
    else{
        status="AM";
    }
    ddd.innerHTML+=" | "+hours+" : "+ minutes+"  "+status;

};
getCurrDay();
getCurrTime();