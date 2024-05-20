class Coder {
  constructor(
    public name: string,
    public music: string,
    private age: number,
    protected lang: string = "TypeScript"
  ) {
    this.name = name
    this.music = music
    this.age = age
    this.lang = lang
  }
  public getAge() {
    return `Hello, im ${this.age}` //will work bcus age is protected
  }
}

const Dave = new Coder("Dave", "rock", 42, "typescript")
//private vs protected modifier
console.log(Dave.getAge()) //public method
console.log(Dave.age) //private property
console.log(Dave.lang) //protected property

// extend a class
class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    //needs a super like in vanilla JS which has everything we took in Coder
    super(name, music, age)
    this.computer = computer
  }
  public getLang() {
    return `I write ${this.lang}`
  }
}
const John = new WebDev("Macbook", "kenny", "R&B", 30)
console.log(John.getLang())

//implementing interfaces to a class
interface Musician {
  name: string
  instrument: string
  play(action: string): string
}

class Guitarist implements Musician {
  name: string
  instrument: string
  constructor(name: string, instrument: string) {
    this.name = name
    this.instrument = instrument
  }
  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`
  }
}

const Page = new Guitarist("Jimmy", "guitar")
console.log(Page.play("strums"))

//static members.
class Peeps {
  static count: number = 0
  /**
   * Returns the current count of Peeps objects.
   *
   * @return {number} The current count of Peeps objects.
   */
  static getCount() {
    return Peeps.count // we use the class name to access the static property and not this keyword
  }
  public id: number
  constructor(public name: string) {
    this.name = name
    this.id = ++Peeps.count // ++ sign is used to increment, if we put it first it will be 1
  }
}

const Ken = new Peeps("Ken")
const Steve = new Peeps("Steve")

//Peeps is the class itself while ken and Steve are instanciated objects using the constructor
console.log(Peeps.count)
console.log(Ken.id)
console.log(Steve.id)

//gitters and setters
class Bands {
  private dataState: string[]
  constructor() {
    this.dataState = []
  }
  public get data(): string[] {
    return this.dataState
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value
    } else {
      throw new Error("Param is not an array of strings")
    }
  }
}
