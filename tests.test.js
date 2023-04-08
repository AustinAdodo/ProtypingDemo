const package = require("./Employee.js");
const Engineer = package.Engineer;

const engineerObject = new Engineer("Field Works", false);
console.log(
    `Final Employee Profile - Title ${engineerObject.getTitle()}. ${
      engineerObject.getIsManager() ? "Is" : "Is not"
    } a Manager\n`
  );
  console.log(
    `Engineer.prototype has property setTitle: ${Engineer.prototype.hasOwnProperty(
      "setTitle"
    )}\n`
  );
  console.log(
    `Engineer.prototype has property getTitle: ${Engineer.prototype.hasOwnProperty(
      "getTitle"
    )}\n`
  );
  console.log(
    `Engineer.prototype has property setIsManager: ${Engineer.prototype.hasOwnProperty(
      "setIsManager"
    )}\n`
  );
  console.log(
    `Engineer.prototype has property getIsManager: ${Engineer.prototype.hasOwnProperty(
      "getIsManager"
    )}\n`
  );