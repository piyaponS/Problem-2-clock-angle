// Formula: angle = |(11m/2) - 30h|

function getClockAngle(hh_mm: string): number {
  const time = hh_mm;
  const hour: number = parseInt(time.split(":")[0]);
  const minute: number = parseInt(time.split(":")[1]);
  let angle: number = Math.abs((11 * minute) / 2 - 30 * hour) % 360;

  if (angle <= 180) {
    console.log("Shorter angle:", angle);
    return angle;
  } else if (angle > 180) {
    console.log("Shorter angle:", 360 - angle);
    return 360 - angle;
  } else {
    console.log("Shorter angle:", 180);
    return 180;
  }
}

getClockAngle("10:00");
