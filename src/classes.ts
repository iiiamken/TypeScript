class Coder {
  lang: string
  constructor(
    public name: string,
    private music: string,
    protected age: number,
    lang: string = "TypeScript"
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
//private vs public modifier
console.log(Dave.getAge()) //public method
console.log(Dave.age) //public property
console.log(Dave.music) //private property
