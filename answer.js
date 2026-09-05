function describeValue(val) {
  if (!!val) {
    return `${typeof val} | truthy`;
  } else {
    return `${typeof val} | falsy`;
  }
}

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

