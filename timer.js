/*
ver 1.0.0 19-07-16
*/

//class for running performance tests.
//outputs an object consisting of timing events in milliseconds
/*
    
*/

var laps = [];
var hrTime = null;
var startTime = null;

/**
 * Start or restart the timer
 */
function start() {
    hrTime = process.hrtime(); 
    startTime = process.hrtime();
}

/**
 * Mark a lap
 * @param {String} note - lap info
 */
function lap (note) {
    if (typeof note === 'undefined') { note = 'UNDEFINED'; }
    
    laps.push({
        time: getTime(),
        note: note
    });
}


/**
 * @param {"sec"|"milli"|"micro"|"nano"} [style] - the unit for the time 
 * @returns - a JSON object showing the laps and total times
 */
function report(style) {
    if (typeof style === 'undefined') { style = 'milli'; }

    //lap('report');
    //getTime();

    //console.log(JSON.stringify(laps));
    //console.log(JSON.stringify(process.hrtime(startTime)));
    var report = {};
    var now = process.hrtime(startTime);
    report.total = convertTime(now[0] * 1000000000 + now[1], style);
    
    laps.forEach(function(lap) {
        report[lap.note] = convertTime(lap.time, style);
    });
    

    /*
    console.log(JSON.stringify(laps));

    var report = {};
    var now = getTime();
    report.total = now-startTime;
    var lastLap = startTime;
    laps.forEach(function(lap) {
        report[lap.note] = lap.time - lastLap;
        lastLap = lap.time;
    });
    */
    return report;
}

function convertTime(time, style) {
    if (style === 'sec') {
        time = time / 1000000000;
    } else if (style === 'milli') {
        time =  time / 1000000; 
    } else if (style == 'micro') {
        time =  time / 1000;
    } 

    return Math.round(time);
}

function getTime() {
    hrTime = process.hrtime(hrTime);
    var time = hrTime[0] * 1000000000 + hrTime[1]; //nano seconds
    hrTime = process.hrtime();
    return time;
}


exports.start = start;
exports.lap = lap;
exports.report = report;