//is_a cannot be instantiated.
let is_a = function () {
  this.man = true;
  this.woman = true;
  //throw invalid operation exception.
};

// is_not_a cannot be instantiated.
let is_not_a = function () {
  this.man = false;
  this.woman = false;
  //throw invalid operation exception.
};

// base obj cannot be instantiated.
let baseObj = function () {
  this.name;
  this.is_a = is_a;
  this.is_not_a = is_not_a;
 //throw invalid operation exception.
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
  this.hands = [hand];
  this.head = head;
};
Thing.prototype = Object.create(baseObj.prototype);

Thing.prototype.speak = function (phrase = "") {
  let result = `${this.name} says: ${phrase}!`;
  this.speech.push(result);
  return result;
};

Thing.prototype.is_the = function () {
  let ans = { parent_of: { joe: "joe", kiwi: "kiwi" } };
  return ans;
};

Thing.prototype.spoke = function () {
  return this.speech;
};

Thing.prototype.can = function () {
  let result = {
    speak:
      () =>
      (phrase = "") =>
        `${this.name} says: ${phrase}!`,
    speak: () => ("spoke", (phrase = "") => `${this.name} says: ${phrase}!`),
  };
  return result;
};

Thing.prototype.has = function (amount = 0) {
  let arms = (amount) => {
    let element = [arm];
    for (let i = 0; i < amount; i++) {
      element.push(new arm());
    }
    if (element.length > 1) return element;
    return new arm();
  };

  let fingers = (amount) => {
    let element = [finger];
    for (let i = 0; i < amount; i++) {
      element.push(new finger());
    }
    if (element.length > 1) return element;
    return new finger();
  };

  let hands = (amount) => {
    let element = [hand];
    for (let i = 0; i < amount; i++) {
      element.push(new hand());
    }
    if (element.length > 1) return element;
    return new hand();
  };

  let he = (amount) => {
    let element = [head];
    for (let i = 0; i < amount; i++) {
      element.push(new head());
    }
    if (element.length > 1) return element;
    return new head();
  };
  let result = {
    arms: (this.arms = arms()),
    head: (this.head = he()),
    fingers: fingers(),
    hands: (this.hands = hands()),
  };
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
  let fingers = (amount) => {
    let element = [eye];
    for (let i = 0; i < amount; i++) {
      element.push(new eye());
    }
    if (element.length > 1) return element;
    return new eye();
  };
  let result = {
    eyes: (this.fingers = fingers()),
    nose: amount,
    mouth: amount,
  };
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
};
head.prototype = Object.create(Thing.prototype);
head.prototype.having = function (amount = 0) {
  let eyes = (amount) => {
    let element = [eye];
    for (let i = 0; i < amount; i++) {
      element.push(new eye());
    }
    if (element.length > 1) return element;
    return new eye();
  };
  let result = { eyes: (this.eyes = eyes()), nose: amount, mouth: amount };
  return result;
};

//eye
let eye = function () {
  Thing.call(this);
  this.name = "eye";
  this.color = "";
  this.shape = "";
};
eye.prototype = Object.create(Thing.prototype);
eye.prototype.being_the = function () {
  let result = {
    color: {
      red: () => (this.color = "red"),
      blue: () => (this.color = "blue"),
      green: () => (this.color = "green"),
      brown: () => (this.color = "brown"),
      red: {
        and_the: {
          shape: {
            round: () => ((this.shape = "round"), (this.color = "red")),
          },
        },
      },
      blue: {
        and_the: {
          shape: {
            round: () => ((this.shape = "round"), (this.color = "blue")),
          },
        },
      },
      red: {
        and_the: {
          shape: {
            round: () => ((this.shape = "round"), (this.color = "red")),
          },
        },
      },
    },
  };
  return result;
};
