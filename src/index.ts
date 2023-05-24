// Formula: angle = |(11m/2) - 30h|

function getClockAngle(hh_mm: string): void {
  const time = hh_mm;
  const h: number = parseInt(time.split(":")[0]);
  const m: number = parseInt(time.split(":")[1]);
  const angle: number = Math.abs((11 / 2) * m - 30 * h);
}

getClockAngle("09:15");
