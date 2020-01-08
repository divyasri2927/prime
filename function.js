
function prime(n){
  var i
  var count=0;
  for(i=2;i<n;i++){
    if(n%i==0){
      count=1;
      break
    }
  }
if(count==0){
    console.log("it is a prime " +n)
  }else{
    console.log("it is not a prime " +n)
  }
}
module.exports={prime}