//is_a cannot be instantiated.
let is_a = function () {
  this.man = true;
  this.woman = true;
  //throw non implementation exception.
};

// is_not_a cannot be instantiated.
let is_not_a = function () {
  this.man = false;
  this.woman = false;
  //throw non implementation exception.
};

let baseObj = function () {
  this.name;
  this.is_a = is_a;
  this.is_not_a = is_not_a;
};

//Thing
let Thing = function (name = "") {
  baseObj.call(this);
  this.name = name;
  this.is_a_woman = this.is_a.woman;
  this.is_a_man = !this.is_a_woman;
  this.is_not_a.man = this.is_a_woman;
  this.is_not_a.woman = this.is_a_man;
  this.parent_of = "";
  this.speech = [""];
  this.arms = [arm];
  this.arms.length = this.has().arms;
  this.hands = [hand];
  this.hands.length = this.has().hand;
  this.heads = [head];
  this.hands.length = this.has().head;
};
Thing.prototype = Object.create(baseObj.prototype);
Thing.prototype.speak = function (phrase = "") {
  let result = `${this.name} says: ${phrase}!`;
  this.speech.push(result);
  return result;
};
Thing.prototype.is_the = function () {
  let ans = { parent_of: { joe: "joe", kiwi: "kiwi" } };
  switch (ans.parent_of) {
    case joe:
      this.parent_of = ans.parent_of.joe;
      break;
    case kiwi:
      this.parent_of = ans.parent_of.kiwi;
      break;
  }
  return ans;
};
Thing.prototype.spoke = function () {
  return this.speech;
};
Thing.prototype.has = function (amount = 0) {
  let result = { arms: amount, head: amount, fingers: amount };
  return result;
};
Thing.prototype.having = function (amount = 0) {
  let result = { arms: amount, head: amount, fingers: amount, hands:amount };
  return result;
};

//arm
let arm = function () {
  Thing.call(this);
  this.name = "arm";
};
arm.prototype = Object.create(Thing.prototype);
arm.prototype.move = function (param = true) {
  this.isManager = param;
};

//hands
let hand = function () {
  Thing.call(this);
  this.name = "hand";
  this.fingers = [finger];
  this.arm = arm;
  this.fingers.length = this.having().fingers;
};
hand.prototype = Object.create(Thing.prototype);
hand.prototype.having = function (amount = 0) {
  let result = { fingers: amount, palm: amount };
  return result;
};

//Fingers
let finger = function () {
  baseObj.call(this);
  this.name = "finger";
};
finger.prototype = Object.create(Thing.prototype);

//head
let head = function () {
  Thing.call(this);
  this.name = "head";
  this.eyes = [eye];
  this.eyes.length = this.having().eyes;
};
head.prototype = Object.create(Thing.prototype);
head.prototype.having = function (amount = 0) {
  let result = { eyes: amount, nose: amount, mouth: amount };
  return result;
};

//Eye
let eye = function () {
  Thing.call(this);
  this.name = "eye";
  this.color = "";
  this.shape = "";
};
eye.prototype = Object.create(Thing.prototype);
eye.prototype.being_the = function () {
  let result = "";
  const color = {
    red: "red",
    blue: "blue",
    green: "green",
  };
  switch (color) {
    case red:
      result = color.red;
      break;
    case blue:
      result = color.blue;
      break;
    case green:
      result = color.green;
      break;
  }
  return result;
};
