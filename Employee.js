//Employee
// Array.prototype.max = function() {return Math.max.apply(null, this);}
//Engineer.prototype = Object.assign({}, Employee); //enable newly copied object to point to new memory location.

let Employee = function (level = "", birthyear = 1990) {
  this.title = level;
  this.birthyear = birthyear;
  this.firstName = "";
  this.lastName = "";
};
Employee.prototype.fullname = function () {
  return this.firstName + " " + this.lastName;
};
Employee.prototype.calculateAge = function () {
  return new Date().getFullYear() - this.birthyear;
};
Employee.prototype.setTitle = function (value = "") {
  this.title = value;
};
Employee.prototype.getTitle = function () {
  return this.title;
};

//class Engineer.
let Engineer = function (designation = "", isManager = false) {
  Employee.call(this);
  this.title = designation;
  this.isManager = isManager;
};
Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.setIsManager = function (param = true) {
  this.isManager = param;
};
//In regular functions, we can use the return keyword to return any value from a function
Engineer.prototype.getIsManager = function () {
  if (this.getTitle().toLowerCase() === "manager") return true;
  else {
    return false;
  }
};

let engineerObject = new Engineer("Manager", "true");
//const usercopy = structuredClone(user); cloning an object called user.

//class Expatriate
class Expatriate extends Employee {
  constructor(Localcountry = "") {
    this.Basecountry = Localcountry;
    this.allCountries = [""];
  }
  addCountry = function (country = "") {
    this.allCountries.push(country);
  };
  getCountriesCovered = function () {
    return this.allCountries;
  };
}

let package = {Employee,Expatriate,Engineer};
module.exports = package;
