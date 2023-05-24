"use strict";
function getClockAngle(hh_mm) {
  const time = hh_mm;
  const h = parseInt(time.split(":")[0]);
  const m = parseInt(time.split(":")[1]);
  const angle = Math.abs((11 / 2) * m - 30 * h);
  console.log(angle);
}
