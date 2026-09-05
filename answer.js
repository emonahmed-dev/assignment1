// Question No. 1
function describeValue(val) {
  if (!!val) {
    return `${typeof val} | truthy`;
  } else {
    return `${typeof val} | falsy`;
  }
}

// Question No. 2
function getDayType(val) {
  switch (val) {
    case "Friday":
    case "Saturday":
      return "Weekend";
      break;
    case "Sunday":
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
      return "Working Day";
      break;
    default:
      return "Invalid Day";
      break;
  }
}

// Question No. 3
function validateUsername(val) {
  if (val.length < 4) {
    return "Too Short";
  } else if (val.includes(" ")) {
    return "No Space Allowed";
  } else if (val.includes("admin")) {
    return "Reserved Word";
  } else {
    return "Available";
  }
}

// Question No. 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let distancecharj;
  let waicharj = waitingMinutes * 2;
  if (distance > 2) {
    let extraDistance = distance - 2;
    let extraDistanceCharj = extraDistance * 15;
    distancecharj = 50 + extraDistanceCharj;
  } else {
    distancecharj = 50;
  }
  if (isNight) {
    let nightCharj = ((distancecharj + waicharj) / 100) * 20;
    totalFare = distancecharj + waicharj + nightCharj;
    return totalFare;
  } else {
    totalFare = distancecharj + waicharj;
    return totalFare;
  }
}

// Question No. 5
const getChaseVerdict = (target, scored, ballsLeft) => {
  let runsNeeded = target - scored;
  if (runsNeeded <= 0) {
    return "Won";
  }
  if (ballsLeft <= 0) {
    return "Lost";
  }

  let requiredRate = (runsNeeded / ballsLeft) * 6;
  let Verdict;
  if (requiredRate <= 6) {
    Verdict = "Comfortable";
  } else if (requiredRate > 6 && requiredRate <= 12) {
    Verdict = "Tough";
  } else if (requiredRate > 12) {
    Verdict = "Almost Impossible";
  }
  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${Verdict}`;
};
