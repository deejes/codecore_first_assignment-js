let productDigits = function(n){
  return n.toString().split('').map(function(e){return parseInt(e)}).reduce(function(a,b){return a*b}) //21

}

// iterative
let dpsIterative = function(n){
  dpsList = [1]
  while (dpsList.length < n){
    dpsList.push(productDigits(dpsList[dpsList.length-1])+(dpsList[dpsList.length-1]))
  }
  return dpsList[dpsList.length-1]
}

//recutsive

let dpsRecursive = function(n){
  if (n == 1){
    return 1
  }
    else{
    let y =   dpsRecursive(n-1)
    return (productDigits(y) + (y))
}}


// console.log(dpsIterative(8));
// console.log(dpsRecursive(9));
// console.log(productDigits(1234))


var timer = function(name) {
    var start = new Date();
    return {
        stop: function() {
            var end  = new Date();
            var time = end.getTime() - start.getTime();
            console.log('Timer:', name, 'finished in', time, 'ms');
        }
    }
};

// code to benchmark
var t = timer('mytimer');
console.log(dpsRecursive(10000)); // ~ 8 seconds
t.stop();

var t = timer('mytimer');
console.log(dpsIterative(10000)); // ~= 0 seconds
t.stop();
