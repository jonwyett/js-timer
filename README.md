# jw-timer
Simple timer class

## USAGE:
```
var timer = require('jw-timer');

//this takes 250 milliseconds
someLongFunction(); 
timer.lap('Did some long function');

//this takes 1250 milliseconds
someOtherLongFunction(); 
timer.lap('Did more slow stuff');

//print the report
console.log(timer.report());
```

## OUTPUT:
```
{
    "total: 1500",
    "Did some long function": 250,
    'Did more slow stuff': 1250
}
```


