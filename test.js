var timer = require('./timer');

timer.start();
/*
for (var i=0; i<10; i++) {
    for (var p=0; p<10; p++) {
        console.log('-test-');
    }
}

timer.lap('First Long Test');

for (var i=0; i<10; i++) {
    for (var p=0; p<100; p++) {
        console.log('-test-');
    }
}

timer.lap('Second Long Test');
*/

setTimeout(function() {
    timer.lap('750');
    setTimeout(function() {
        timer.lap('250');
        console.log(timer.report());
    },250);   
}, 750);

//console.log(JSON.stringify(timer.report()));

/*
var hrLast = process.hrtime();
//var hrEnd = null;
setTimeout(function(){
    hrLast = process.hrtime(hrLast);
    console.log(JSON.stringify(hrLast));
    hrLast = process.hrtime();
    setTimeout(function() {
        hrLast = process.hrtime(hrLast);
        console.log(JSON.stringify(hrLast));
    }, 250);
}, 750);
*/
