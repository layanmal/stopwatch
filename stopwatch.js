let seconds=0,seconds1=0;
let minutes=0,minutes1=0;
let hours=0,hours1=0;

let name=null;
let time=null;
let count=0;
let countFinal=0

function stopwatch(){
    seconds++;
    if(seconds===60){
        seconds=0;
        minutes++;
        if(minutes===60){
            minutes=0;
            hours++;
            
        }
    }
    if(seconds<10){
        seconds1 ="0" +seconds.toString();

    }
    else{
        seconds1=seconds;
    }
    if(minutes<10){
        minutes1 ="0" + minutes.toString();
        
    }
    else{
        minutes1 =minutes
    }
    if(hours<10){
        hours1 ="0" + hours.toString();
        
    }
    else{
        hours1= hours;
    }
  
document.getElementById('displaymain').innerHTML=hours1 + ":" + minutes1 + ":" + seconds1;

}


function decision(){

  name = document.getElementById("start-stop").innerHTML;
  
    if(name ==='Start'){
        time=window.setInterval(stopwatch,1000);
        document.getElementById("start-stop").innerHTML= "Stop";
        document.getElementById("reset").innerHTML= "Lap";
    }
    else{
        window.clearInterval(time);
        document.getElementById("start-stop").innerHTML= "Start";
        document.getElementById("reset").innerHTML= "Reset";
    }
}
function Reset(){

    name = document.getElementById("reset").innerHTML;
    
      if(name ==='Reset'){
        window.clearInterval(time);
        hours1=minutes=seconds1=0;
        document.getElementById('displaymain').innerHTML="00:00:00";
        var item = document.getElementById("lap");
        item.parentNode.removeChild(item);

        
      }
      else{
       count++;
       if(count<10){
           countFinal='0'+ count.toString();
       }
       else{
        countFinal=count;
       }
       if(count=== 1){
        var node1 = document.createElement("hr");
        document.getElementById("lap").appendChild(node1);
       }
        var node = document.createElement("div");
        var value= document.getElementById('displaymain').innerHTML;
        var text= document.createTextNode('lap'+`    `+countFinal+ `    `+ value);
        node.appendChild(text);
        document.getElementById("lap").appendChild(node);
        
        
      }
    }

