/* 1. **扩展 Person 类**  
    已经有一个 `Person` 类，如下所示：
    
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }
    }
    请你扩展这个类，添加一个 `birthday()` 方法，该方法将 `Person` 的年龄增加 1，并在控制台中打印出新的年龄。
    
2. **创建 Person 实例**  
    使用上述的 `Person` 类，创建一个名为 `john` 的 `Person` 实例，名字为 "John"，年龄为 30。然后调用 `greet()` 方法和 `birthday()` 方法。
    
3. **添加新的属性**  
    继续使用上述的 `Person` 类，添加一个新的属性 `hobby`，并在 `greet()` 方法中加入一句话来描述这个爱好。例如：`Hello, my name is John, I am 30 years old, and I love reading.`
    
4. **使用数组和循环**  
    创建一个 `Person` 对象的数组，至少包含三个对象。然后，使用循环（例如 `for` 或 `forEach`）来遍历数组，并为每个对象调用 `greet()` 方法。
    
5. **添加异常处理**  
    在 `Person` 类的构造函数中添加异常处理。如果试图创建一个年龄为负数的 `Person`，则抛出一个错误，并在控制台中打印出错误信息。 */

class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    birthday() {
        this.age++;
        return this.greet();
    }
}
const john = new Person('John', 30);
// console.log(`${greet()}`);
const text = john.birthday();
console.log(text);
