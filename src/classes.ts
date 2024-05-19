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
