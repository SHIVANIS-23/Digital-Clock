const clock=document.querySelector('.clock');

function runClock()
{
  var time=new Date();
  var hrs=time.getHours();
  var mins=time.getMinutes();
  var secs = time.getSeconds();
  if(hrs>12){
    hrs=hrs-12;
  }
  else if(hrs==0){
    hrs=12;
  }
  hrs=hrs<10?'0'+hrs:hrs;
  mins=mins<10?'0'+mins:mins;
  secs=secs<10?'0'+secs:secs;

  clock.innerHTML=`${hrs} : ${mins} : ${secs}`;
}
runClock();
setInterval(runClock,1000);