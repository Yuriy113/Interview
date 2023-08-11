# CoreJS Interview #2

## Question examples:

### JavaScript:

- ### **Objects Built-in methods**.

---

- **Know static Object methods**

  _Ключевое слово **static** определяет статический метод или поле для класса или статический блок инициализации. Статические свойства не могут быть напрямую доступны для экземпляров класса. Вместо этого к ним обращаются в самом классе._

  _Статические методы часто являются служебными функциями, такими как функции для создания или клонирования объектов, тогда как статические свойства полезны для кэшей, фиксированной конфигурации или любых других данных, которые вам не нужно реплицировать между экземплярами._

  _Статические свойства и методы наследуются._

  _this внутри статического блока относится к объекту-конструктору класса. Синтаксис super.property можно использовать внутри статического блока для ссылки на статические свойства суперкласса._

- **Property flags & descriptors** (student is able to set property via Object. defineProperty)

  _Помимо значения value, свойства объекта имеют три специальных атрибута (так называемые «флаги»)._

  **writable** – если true, свойство можно изменить, иначе оно только для чтения.(изменить)  
  **enumerable** – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.  
  **configurable** – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.(изменить и удалить)  
  Когда мы создаём свойство «обычным способом», все они имеют значение **true**

- **Know how to create iterable objects, Symbol.iterator usage** `(optional)`

  The `_iterator protocol_` defines a standard way to produce a sequence of values (either finite or infinite), and potentially a return value when all values have been generated.

  An object is an iterator when it implements a `next()` method with the following semantics:

  - `next()`
    A function that accepts zero or one argument and returns an object conforming to the IteratorResult interface (see below).  
    All iterator protocol methods (next(), return(), and throw()) are expected to return an object implementing the IteratorResult interface. It must have the following properties: `{done: Boolean, value: any}`
  - Optionally, the iterator can also implement the `return(value)` and `throw(exception)` methods, which, when called, tells the iterator that the caller is done with iterating it and can perform any necessary cleanup (such as closing database connection).

---

- #### ECMAScript Data Types & Expressions

  - Object computed props

    Computed properties in JavaScript refer to the ability to use expressions as property names when creating or accessing object properties. This feature was introduced in ECMAScript 2015 (ES6) to enhance the flexibility and dynamism of object property naming.

    Instead of using a fixed string as a property name, you can use an expression enclosed in square brackets to compute the property name at runtime. This is particularly useful when you need to dynamically generate property names based on variables or other dynamic values.

    Переменная key может быть вычислена во время выполнения кода или зависеть от пользовательского ввода. После этого мы используем её для доступа к свойству.

  - Be able to loop through Object keys

        Object.keys(obj).forEach((key) => {
          console.log(key);
        });

    or

        for (const key in obj) {
          console.log(key);
        }

- #### Functional Scope

  - Know global scope and functional scope

    **Global scope:**

    The global scope refers to the outermost level of your JavaScript code, outside of any function or block. Variables declared in the global scope are accessible from any part of your code, including inside functions and other blocks. These variables are often referred to as global variables.

    **Functional Scope:**

    Functional scope, also known as local scope, refers to the scope created within a function. Variables declared within a function are only accessible within that function, and they are not visible outside of it. This helps encapsulate variables and avoid conflicts between different parts of your code.  
    Variables declared in a functional scope are isolated from the global scope and from other functional scopes.

  - Know variables visibility areas

    **Block Scope:**

    Introduced in ECMAScript 6 (ES6), block scope refers to the scope of variables declared using let and const within blocks (enclosed by curly braces {}), including loops and conditional statements. These variables are not accessible outside of the block where they are defined.

    **Functional Scope:**

    Functional scope refers to the scope of variables declared using var and parameters of functions. These variables are accessible within the function in which they are defined, as well as any nested functions.

    **Global Scope:**

    Global scope refers to the outermost level of your JavaScript code, outside of any function or block. Variables declared without any specific keyword (such as let, const, or var) become global variables and are accessible from anywhere in your code.

  - Understand nested scopes and able work with them

  ***

- #### Functions Parameters / Arguments

  - Know how to define Function parameters
  - Know difference between parameters passing by value and by reference
  - Know how to handle dynamic amount of Function parameters

- #### Closures Advanced

  - Context (lexical environment)
  - Understand function creation context (lexical environment)
  - Be able to explain difference between scope and context
  - Inner/outer lexical environment
  - Understand lexical environment traversing mechanism
  - Understand connection between function and lexical environment

  ***

- #### ECMAScript Intermediate

  - Function default parameters
  - Know how to use spread operator for Function arguments
  - Be able to compare `arguments` and `rest parameters`
  - Spread operator for Array
  - Understand and able to use spread operator for Array concatenation
  - Destructuring assignment
  - Be able to discover destructuring assignment concept
  - Understand variables and Function arguments destructuring assignment
  - Know how `for..of` loop works `(optional)`

    1. Когда цикл for..of запускается, он вызывает этот метод (Symbol.iterator) один раз (или выдаёт ошибку, если метод не найден). Этот метод должен вернуть итератор – объект с методом `next`.
    2. Дальше `for..of` работает только с этим возвращённым объектом.
    3. Когда `for..of` хочет получить следующее значение, он вызывает метод `next()` этого объекта.
    4. Результат вызова `next()` должен иметь вид `{done: Boolean, value: any}`, где `done=true` означает, что цикл завершён, в противном случае value содержит очередное значение.

    ***

  #### Modules in JavaScript

  - What is module / module pattern? For what purposes they were created?
  - Modules types (AMD, ES6, CommonJS, UMD).
  - Modules syntax.
  - Common modules features (export default, named exports, exports as, etc).
  - Dynamic imports.

- #### Advanced Functions

  - `this` in functions
  - Reference Type & losing `this`
  - Understand difference between function and method
  - Understand how `this` works, realize `this` possible issues
  - Manage `this`
  - Be able to replace `this` value
  - Be able to use `call` and `apply` Function built-in methods
  - Know how to bind `this` scope to function
  - Binding, binding one function twice

- #### Functional Patterns

  - Callback (Function as argument)
  - Know callback pattern
  - Know IIFE pattern `(optional)`
  - Understand callback limitations (callback hell) `(optional)`
  - Carrying and partial functions

- #### Object Oriented Programming

  - `new` keyword
  - Understand how `new` keyword works
  - Function constructor
  - Know function constructor concept
  - Able to create constructor functions
  - Public, private, static members
  - Know how to create public/static/private members
  - Understand OOP emulation patterns and conventions `(optional)`

- #### ECMAScript Classes

  - Class declaration
  - Know `class` declaration syntax
  - Understand difference between `class` and `constructor function`
  - Getter/setter
  - What does `super()` do and where we have to use it?

- #### Prototypal Inheritance Basics

  - `__proto__` property
  - Understand `__proto__` object property
  - Able to use [Object.create] and define `__proto__` explicitly
  - `prototype` property
  - Know function `prototype` property
  - Understand dependency between function constructor `prototype` and instance `__proto__`
  - Able to create 'class' methods using function `prototype` property
  - Able to set / get object prototype `(optional)`

  - #### ECMAScript Advanced Data Types & Expressions

  - `Set/Map` data types
  - `WeakSet/WeakMap` data types

- #### JavaScript Errors

  - JavaScript Errors (throw, Error class)
  - `try..catch` statement
  - Error handling
  - Error class
  - error logging
  - async error events
  - Custom errors `(optional)`

- #### ECMAScript Advanced

  - Promises
  - Promise states
  - Promise chaining
  - Promise static methods
  - Be able to compare promise and callback patterns `(optional)`
  - Be able to handle errors in promises
  - async/await
  - event loop
  - Garbage collector (concept) `(optional)`

### JavaScript in Browser:

- #### Global object window

  - Location
  - Know browser location structure
  - History API (Global object window)
  - Know browser History APIconcept
  - Be able to navigate within browser history
  - Be able to use history state `(optional)`
  - Navigator `(optional)`
  - Know how to parse user agent `(optional)`
  - Know how to discover client platform, browser
  - Cookies

- #### Page Lifecycle

  - Parsing
  - Reflow
  - Repaint
  - Critical rendering path (CRP) `(optional)`

  - #### Events Basics `(optional)`

  - Custom events `(optional)`

- #### Web components `(optional)`

  - Web components, shadow DOM (concept) `(optional)`

- #### Network requests

  - `Fetch` (with usage)
  - `XMLHTTPRequest` (concept) `(optional)`
  - `WebSocket` (concept) `(optional)`

- #### Timers `(optional)`

  - `requestAnimationFrame` `(optional)`
  - Be able to explain difference between `setTimeout` and `requestAnimationFrame` `(optional)`

- #### Web Storage API & cookies

  - Cookies
  - Difference between localStorage, sessionStorage and cookies

### Typescript:

- #### Ability to write concise TypeScript code using its constructs
  - basic types
  - enums
  - type / interface, differences between them
  - using interfaces with optional properties, read-only properties, etc...
  - function types
  - utitily types `(optional)`
  - typeguards `(optional)`
  - creating custom types
  - generic types (concept)
  - understanding TS (ES6) module system

### Design patterns:

- Creational Design Patterns
- Structural Design Patterns
- Behavioral Design Patterns
- MVC `(optional)`

- #### Intermediate knowledge of patterns and best practices:

  - SOLID principles
  - design patterns used on a student's project, and able to compare these patterns `(optional)`

- #### Software Development Methodologies `(optional)`

  - Agile
  - Scrum / Kanban / Waterfall
  - Estimation

### Testing `(optional)`

- Testing Types
  - Integration Testing
  - E2E
  - Security Testing
  - Perforamance Testing
- Test Pyramid
- Testing approaches `(optional)`
- FIRST
- TDD и BDD
- Frameworks `(optional)`

### Web Communication Protocols: `(optional)`

- #### HTTP vs HTTPS
- #### HTTP 1.x, 2.x, 3.x
- #### HTTP methods, headers, responses, body
- #### HTTP status codes groups (1xx, 2xx, 3xx, 4xx, 5xx)
- #### RESTful API

### Common web-security knowledge `(optional)`

- #### Basic understanding of most common security terms (CORS, XSS) `(optional)`

  - XSS
  - CORS
  - OWASP Top 10
  - Auth (JWT, OAuth, Basic, etc.)

### Coding tasks:

- `Function.prototype.bind` implement polyfill
- `Object.create` implement polyfill
- `Array.flat` implement polyfill
- `Array.reduce` implement polyfill
- `'hello world'.repeating(3)` -> 'hello world hello world hello world'. How to implement?
- `myFunc('!', 4, -10, 34, 0)` -> '4!-10!34!0`. How to implement?
- `five(plus(seven(minus(three()))))` -> 9. How to implement?
- add(5)(9)(-4)(1) -> 11. How to implement?
- `periodOutput(period)` method should output in the console once per every period how mach time has passed since the first function call.
  Example:
  `periodOutput(100) -> 100(after 100 ms), 200(after 100 ms), 300(after 100 ms), ...`
- `extendedPeriodOutput(period)` method should output in the console once per period how mach time has passed since the first function call and then increase the period. Example: `// extendedPeriodOutput(100) -> 100(after 100 ms), 200(after 200 ms), 300(after 300 ms)`
