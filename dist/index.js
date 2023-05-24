"use strict";
function getClockAngle(hh_mm) {
    const time = hh_mm;
    const hour = parseInt(time.split(":")[0]);
    const minute = parseInt(time.split(":")[1]);
    let angle = Math.abs((11 * minute) / 2 - 30 * hour) % 360;
    if (angle <= 180) {
        console.log("Shorter angle:", angle);
        return angle;
    }
    else if (angle > 180) {
        console.log("Shorter angle:", 360 - angle);
        return 360 - angle;
    }
    else {
        console.log("Shorter angle:", 180);
        return 180;
    }
}
getClockAngle("10:00");
//# sourceMappingURL=index.js.map