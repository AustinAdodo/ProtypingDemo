//Thing
class Thing {
    constructor(name = "") {
      this.name = name;
      this.is_not_a = { man: false, woman: false };
      this.is_a = { man: !this.is_not_a.woman, woman: !this.is_not_a.man };
      this.parent_of = "";
      this.speech = [""];
      this.arms = [arm];
      this.hands = [hand];
      this.head = head;
    }
    speak(phrase = "") {
      let result = `${this.name} says: ${phrase}!`;
      this.speech.push(result);
      return result;
    }
    is_the() {
      let ans = { parent_of: { joe: "joe", kiwi: "kiwi" } };
      return ans;
    }
    spoke() {
      return this.speech;
    }
    can() {
      let result = {
        speak:
          () =>
          (phrase = "") =>
            `${this.name} says: ${phrase}!`,
        speak: () => ("spoke", (phrase = "") => `${this.name} says: ${phrase}!`),
      };
      return result;
    }
    has(amount = 0) {
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
          element.push(new hand("hand"));
        }
        // if (element.length > 1) return element;
        // return new hand("hand");
        return element;
      };
  
      let he = (amount) => {
        let element = [head];
        for (let i = 0; i < amount; i++) {
          element.push(new head("hand"));
        }
        if (element.length > 1) return element;
        return new head();
      };
      let result = {
        arms: (this.arms = arms()),
        head: (this.head = he()),
        fingers: fingers(),
        hands : {hands:() => this.hands = hands(), each: (n) => hands.forEach(e => { })}
      };
      return result;
    }
  }
  //Thing.prototype = Object.create(baseObj.prototype);
  
  //arm
  class arm extends Thing {
    constructor(name = "arm") {
      //Thing.call(this);
      super(name);;
    }
  }
  //arm.prototype = Object.create(Thing.prototype);
  
  //hands
  class hand extends Thing {
    constructor(name = "hand") {;
      super(name);
      this.fingers = [finger];
      this.arm = arm;
    }
    having(amount = 0) {
      let fingers = (amount) => {
        let element = [finger];
        for (let i = 0; i < amount; i++) {
          element.push(new finger());
        }
        if (element.length > 1) return element;
        return new finger("finger");
      };
      let result = {
        fingers: () => {this.fingers = fingers()},
        palm: amount
      };
      return result;
    }
  }
  //hand.prototype = Object.create(Thing.prototype);
  
  //Fingers
  class finger extends Thing {
    constructor(name = "finger") {
      //Thing.call(this);
      super(name);
    }
  }
  
  //head
  class head extends Thing {
    constructor(name = "head") {
      //Thing.call(this);
      super(name);
      this.eyes = [eye];
    }
    having(amount = 0) {
      let eyes = (amount) => {
        let element = [eye];
        for (let i = 0; i < amount; i++) {
          element.push(new eye());
        }
        if (element.length > 1) return element;
        return new eye("eye");
      };
      let result = { eyes: (this.eyes = eyes()), nose: amount, mouth: amount };
      return result;
    }
  }
  //head.prototype = Object.create(Thing.prototype);
  
  //eye
  class eye extends Thing {
    constructor(name = "eye") {
      super(name);
      this.color = "";
      this.shape = "";
    }
  
  }
  
  function being_the() {
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
    }

//having
function having(amount = 0) {
    let fingers = (amount) => {
      let element = [finger];
      for (let i = 0; i < amount; i++) {
        element.push(new finger());
      }
      if (element.length > 1) return element;
      return new finger("finger");
    };
    let result = {
      fingers: () => {this.fingers = fingers()},
      palm: amount
    };
    return result;
  }
  let package = {Thing, arm, hand, finger, head, eye};
  module.exports = package;