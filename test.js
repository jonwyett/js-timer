var timer = require('./timer');

timer.start();

var count = 0;

for (var i=0; i<100; i++) {
    for (var p=0; p<100; p++) {
        console.log(count++);
    }
}

timer.lap('First Long Test');

count = 0;
for (var i=0; i<100; i++) {
    for (var p=0; p<200; p++) {
        console.log(count++);
    }
}

timer.lap('Second Long Test');

console.log(timer.report());
