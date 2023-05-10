
在 JavaScript 中，函数可以有返回值，也可以没有返回值。函数的返回值由 `return` 关键字来确定。

## 1. 显式返回值

当函数中使用 `return` 关键字 followed by an expression, 那个表达式的值就是函数的返回值。例如：
```JS
function returnHello() {
  return "Hello";
}

```


在上面的函数中，字符串 "Hello" 就是函数的显式返回值。

## 2. 隐式返回值

如果函数中没有 `return` 语句，或者 `return` 语句后没有表达式，那么函数的返回值就是 `undefined`。这称为隐式返回值。例如：

```js
function implicitReturn() {
  let a = 2;
  let b = 3;
  let c = a + b;
}

console.log(implicitReturn()); // undefined

```

在上面的函数中，尽管函数内部进行了一些操作，但函数没有显式返回值，所以它的返回值是 `undefined`。

## 3. `return` 和 `console.log()`

`console.log()` 函数用于在控制台打印信息，但它本身并不返回任何值（其返回值是 `undefined`）。因此，如果试图返回 `console.log()` 的结果，你仍然会得到 `undefined`：

```JS
function returnPrintHello() {
  return console.log("Hello");
}

console.log(returnPrintHello()); // undefined

```

在上面的例子中，尽管 `returnPrintHello()` 函数中有 `return` 语句，但因为 `console.log()` 没有返回值，所以函数的返回值仍然是 `undefined`。

## 4. 结论

函数的返回值决定了函数执行后得到的结果。在设计函数时，应明确考虑函数的返回值。如果函数需要返回结果，应使用 `return` 语句并指定返回值；如果函数只是执行一些操作而不需要返回结果，那么可以省略 `return` 语句，函数的返回值将默认为 `undefined`。