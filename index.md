<main>

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

    Nested scopes occur when one scope is defined within another. In JavaScript, this often happens with functions and blocks (loops or conditionals) that are defined within other functions or blocks. Understanding and working with nested scopes is crucial for managing variable visibility and preventing unintended conflicts. Here's how you can work with nested scopes:

    Variable Access: Inner scopes can access variables from outer scopes, but the reverse is not true. Variables declared in an outer scope are visible to inner scopes, but variables declared in an inner scope are not accessible in outer scopes.

    Shadowing: If an inner scope declares a variable with the same name as a variable in an outer scope, the inner variable "shadows" the outer one within that inner scope. The outer variable remains unaffected.

    Lexical Scoping: JavaScript uses lexical scoping, meaning that the visibility of a variable is determined by its position in the source code's hierarchy of scopes. Inner scopes "remember" their outer scopes even if they are executed elsewhere.

    Closure: A closure is created when an inner function accesses variables from an outer function. The inner function "closes over" the variables it references, preserving their values even after the outer function has completed execution.

---

- #### Functions Parameters / Arguments

  - Know how to define Function parameters

    The Javascript Function **Parameters** are the names that are defined in the function definition and real values passed to the function in the function definition are known as **arguments**.

    The default parameters are used to initialize the named parameters with default values in case, when no value or undefined is passed.

  - Know difference between parameters passing by value and by reference

    **Arguments Pass by Value**: In a function call, the parameters are called as arguments. The pass-by value sends the value of the variable to the function. It does not send the address of the variable. If the function changes the value of arguments then it does not affect the original value.

    **Objects passed by Reference**: In Objects Pass by Reference, passing the address of the variable instead of the value as the argument to call the Function. If we change the value of the variable inside the function then it will affect outside function variables.

  - Know how to handle dynamic amount of Function parameters

    `{...rest}` or `arguments`

- #### Closures Advanced

  - Context (lexical environment)

    The best way to think of an execution context is as a _stack frame_, while lexical environments are indeed the _scopes_.

    The respective spec chapters ([§8.1 Lexical Environments](http://www.ecma-international.org/ecma-262/6.0/#sec-lexical-environments) and [§8.3 Execution Contexts](http://www.ecma-international.org/ecma-262/6.0/#sec-execution-contexts) ) explain:

    Execution contexts contain the current evaluation state of code, a reference to the code (function) itself, and possibly references to the current lexical environments.
    Execution contexts are managed in a stack.

    Lexical environments contain an environment record in which the variables are stored, and a reference to their parent environment (if any).
    Lexical environments build a tree structure.
    With every change of the execution context, the lexical environment changes as well. However the lexical environment may change independently from that as well, for example when entering a block.

  - Understand function creation context (lexical environment)

    В JavaScript у каждой выполняемой функции, блока кода {...} и скрипта есть связанный с ними внутренний (скрытый) объект, называемый лексическим окружением LexicalEnvironment.

    Объект лексического окружения состоит из двух частей:

    Environment Record – объект, в котором как свойства хранятся все локальные переменные (а также некоторая другая информация, такая как значение this).

    Ссылка на внешнее лексическое окружение – то есть то, которое соответствует коду снаружи (снаружи от текущих фигурных скобок).

    "Переменная" – это просто свойство специального внутреннего объекта: Environment Record. «Получить или изменить переменную», означает, «получить или изменить свойство этого объекта».

    У глобального лексического окружения нет внешнего окружения, так что она указывает на null. По мере выполнения кода лексическое окружение меняется.

  - Be able to explain difference between scope and context

    Scope refers to the visibility and accessibility of variables within a function, while context (lexical environment) includes both the scope and the specific values of variables at a given point in code execution.

  - Inner/outer lexical environment

    Inner lexical environments have access to variables in their outer lexical environments, but the reverse is not true. This is known as lexical scope.

  - Understand lexical environment traversing mechanism

    When a variable is referenced, JavaScript looks in the current lexical environment first. If it's not found, it traverses through outer lexical environments until the variable is found or the global environment is reached.

  - Understand connection between function and lexical environment

    When a JavaScript function is created, it captures its surrounding lexical environment. This means it remembers the values of variables in its outer scope, even if it's executed later in a different context.

    This behavior is what enables the creation of closures, where a function retains access to the variables of the lexical environment in which it was defined. Closures are a powerful feature for maintaining data privacy and creating flexible, reusable code structures.

    Use Cases:

    Closures: It enables you to create closures, which are functions that remember their lexical environments, providing data encapsulation and maintaining state.

    Scope Management: It allows you to manage variable scope effectively, avoiding unintended variable clashes and ensuring that variables are accessible where and when you need them.

    Modular Code: It facilitates the creation of modular and reusable code by encapsulating data within functions and providing controlled access to that data through closures.

  ***

- #### ECMAScript Intermediate

  - Function default parameters

    Function default parameters allow you to specify default values for function arguments. If an argument is not provided when calling the function, it will take the default value.

  - Know how to use spread operator for Function arguments

    The spread operator `(...)` can be used to pass an array of values as individual arguments to a function. This is helpful when you have an array and want to use its elements as function arguments.

        function sum(x, y, z) {
          return x + y + z;
        }
        const numbers = [1, 2, 3];
        console.log(sum(...numbers)); // Outputs: 6

  - Be able to compare `arguments` and `rest parameters`

  - Spread operator for Array

    The spread operator can be used to create a shallow copy of an array or to merge multiple arrays into one. It's denoted as ...arrayName.

  - Understand and able to use spread operator for Array
    concatenation

  - Destructuring assignment

  - Be able to discover destructuring assignment concept

  - Understand variables and Function arguments destructuring assignment

    You can destructure objects or arrays both in variable declarations and function parameters. When used with function parameters, it allows you to directly extract and use specific values from the function's arguments, making your code more readable and expressive.

        function greet({ name, age }) {
          console.log(`Hello, ${name}! You are ${age} years old.`);
        }
        const person = { name: "Alice", age: 25 };
        greet(person); // Outputs: Hello, Alice! You are 25 years old.

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

    Объект `Promise` используется для отложенных и асинхронных вычислений.  
    1 параметр: `executor` - объект функции с двумя аргументами `resolve` и `reject`.  
     Функция _executor_ получает оба аргумента и выполняется сразу, ещё до того как конструктор вернёт созданный объект. Первый аргумент (`resolve`) вызывает успешное исполнение промиса, второй (`reject`) отклоняет его. Обычно функция executor описывает выполнение какой-то асинхронной работы, по завершении которой необходимо вызвать функцию `resolve` или `reject`. Обратите внимание, что возвращаемое значение функции `executor` игнорируется.

  - Promise states

    `Promise` может находиться в трёх состояниях:

    - ожидание (_pending_): начальное состояние, не исполнен и не отклонён.
    - исполнено (_fulfilled_): операция завершена успешно.
    - отклонено (_rejected_): операция завершена с ошибкой.

    При создании промис находится в ожидании (_pending_), а затем может стать исполненным (_fulfilled_), вернув полученный результат (значение), или отклонённым (_rejected_), вернув причину отказа. В любом из этих случаев вызывается обработчик, прикреплённый к промису методом then.

  - Promise chaining

    Так как методы `Promise.prototype.then()` и `Promise.prototype.catch()` сами возвращают промис, их можно вызывать цепочкой, создавая соединения.

  - Promise static methods

    `Promise.all(promises)` – ожидает выполнения всех промисов и возвращает массив с результатами. Если любой из указанных промисов вернёт ошибку, то результатом работы Promise.all будет эта ошибка, результаты остальных промисов будут игнорироваться.  
    `Promise.allSettled(promises)` (добавлен недавно) – ждёт, пока все промисы завершатся и возвращает их результаты в виде массива с объектами, у каждого объекта два свойства:  
    status: "`fulfilled`", если выполнен успешно или "`rejected`", если ошибка,
    `value` – результат, если успешно или `reason` – ошибка, если нет.  
    `Promise.race(promises)` – ожидает первый выполненный промис, который становится его результатом, остальные игнорируются.  
    `Promise.any(promises)` (добавлен недавно) – ожидает первый успешно выполненный промис, который становится его результатом, остальные игнорируются. Если все переданные промисы отклонены, `AggregateError` становится ошибкой `Promise.any`.  
    `Promise.resolve(value)` – возвращает успешно выполнившийся промис с результатом `value`.  
    `Promise.reject(error)` – возвращает промис с ошибкой `error`.

  - Be able to compare promise and callback patterns `(optional)`
  - Be able to handle errors in promises
  - async/await
  - event loop
  - Garbage collector (concept) `(optional)`

### JavaScript in Browser:

- #### Global object window

  - Location

    Интерфейс `Location` представляет местоположение (URL-адрес) объекта, с которым он связан. Изменения, внесенные в него, отражаются на объекте, к которому он относится. И интерфейс `Document`, и `Window` имеют такое связанное местоположение, доступное через `Document.location` и `Window`.location соответственно.

  - Know browser location structure

    `Location.ancestorOrigins`  
    A static DOMStringList containing, in reverse order, the origins of all ancestor browsing contexts of the document associated with the given Location object.

    `Location.href`  
    A stringifier that returns a string containing the entire URL. If changed, the associated document navigates to the new page. It can be set from a different origin than the associated document.

        https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container

    `Location.protocol`  
    A string containing the protocol scheme of the URL, including the final ':'.

        // https:

    `Location.host`  
    A string containing the host, that is the hostname, a ':', and the port of the URL.

        developer.mozilla.org:8080

    `Location.hostname`  
    A string containing the domain of the URL.

        developer.mozilla.org

    `Location.port`  
    A string containing the port number of the URL.

        8080

    `Location.pathname`  
    A string containing an initial '/' followed by the path of the URL, not including the query string or fragment.

        /en-US/search

    `Location.search`  
    A string containing a '?' followed by the parameters or "querystring" of the URL. Modern browsers provide URLSearchParams and URL.searchParams to make it easy to parse out the parameters from the querystring.

        ?q=URL

    `Location.hash`  
    A string containing a '#' followed by the fragment identifier of the URL.

        #search-results-close-container

    `Location.origin` (Read only)  
    Returns a string containing the canonical form of the origin of the specific location.

        https://developer.mozilla.org:8080

    Instance methods

    `Location.assign()`
    Loads the resource at the URL provided in parameter.

    `Location.reload()`
    Reloads the current URL, like the Refresh button.

    `Location.replace()`
    Replaces the current resource with the one at the provided URL (redirects to the provided URL). The difference from the `assign()` method and setting the `href` property is that after using `replace()` the current page will not be saved in session `History`, meaning the user won't be able to use the back button to navigate to it.

    `Location.toString()`
    Returns a string containing the whole URL. It is a synonym for `Location.href`, though it can't be used to modify the value.

  - History API (Global object window)

    History API — это интерфейс JavaScript, который позволяет разработчикам манипулировать историей браузера и перемещаться по сеансу просмотра пользователя, не вызывая полной перезагрузки страницы.  
    Доступ к нему осуществляется через объект `window.history`, который является частью глобального объекта окна в браузере.  
    Объект `window.history` предоставляет методы и свойства для взаимодействия со стеком истории браузера, что позволяет разработчикам создавать удобный пользовательский интерфейс для навигации между различными состояниями или страницами в одностраничном веб-приложении.

  - Know browser History APIconcept

    Концепция API истории браузера заключается в том, чтобы позволить разработчикам манипулировать историей просмотров пользователя и взаимодействовать с ней программно, обеспечивая более плавные и интерактивные веб-приложения.  
    Он предоставляет такие методы, как pushState(), replaceState() и go(), для изменения стека истории и управления навигацией между различными состояниями или страницами в веб-приложении.  
    Разработчики могут использовать History API для обновления URL-адреса, отображаемого в адресной строке, без полной перезагрузки страницы, что позволяет создавать динамические и адаптивные веб-приложения.

  - Be able to navigate within browser history

    Для навигации по истории браузера с помощью History API вы можете использовать следующие методы:  
     `window.history.pushState(data, title, url)`: этот метод добавляет новое состояние в стек истории, изменяя URL-адрес, отображаемый в адресной строке, без перезагрузки страницы.  
     `window.history.replaceState(data, title, url)`: аналогично `pushState`, но заменяет текущее состояние в стеке новым.  
     `window.history.go(delta)`: этот метод позволяет перемещаться назад (отрицательная дельта) или вперед (положительная дельта) по стеку истории.  
     Вы можете прослушивать событие `popstate`, чтобы определять, когда пользователь просматривает свою историю, а затем соответствующим образом обрабатывать изменения состояния.

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

      Object.creates = function (obj) {
        function Constructor() {}
        Constructor.prototype = obj;
        return new Constructor();
      };

      const person = {
        isHuman: false,
        printIntroduction: function () {
          console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
        },
      };

      const me = Object.creates(person);
      me.name = 'Matthew';
      me.isHuman = true;
      me.printIntroduction(); // Expected output: "My name is Matthew. Am I human? true"
      console.log(me.__proto__); // Object { isHuman: false, printIntroduction: [Function: printIntroduction] }

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
