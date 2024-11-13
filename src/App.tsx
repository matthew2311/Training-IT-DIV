import "./App.css";
import ClassComponent from "./components/class/Class";
import FunctionalComponent from "./components/functional/Functional";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import NotFound from "./Pages/NotFound";
import axios from "axios";
import moment from "moment";
import TodoList from "./components/TodoList";
import TodoListDetail from "./components/TodoListDetail";

// Data Types
// 1. Number
// let Number = 15;
// console.log(Number);
// 2. String
// let String = "Hello World!";
// console.log(String);
// // 3. Boolean
// let Boolean = false;
// console.log(Boolean);
// // 4. Null
// let Null = null;
// console.log(Null);
// // 5. Undefined
// let Undefined;
// console.log(Undefined);
// // 6. Symbol
// let SymbolExample = Symbol("Unique");
// console.log(SymbolExample);
// // 7. Object
// let ObjectExample = { name: "John", age: 30 };
// console.log(ObjectExample);

// Arithmetic Operators
// console.log(5 + 2); // Add
// console.log(5 - 2); // Subtract
// console.log(5 * 2); // Multiply
// console.log(10 / 2); // Divide
// console.log(10 % 2); // Modulus

// String Concat
// let string = "Matthew";
// console.log(string + " Disini");

// console.log(`${string} Disini`);

// String Methods
// let text = "Hello World!";
// console.log(text.length); // String Length
// console.log(text.toUpperCase()); // Convert to Uppercase
// console.log(text.toLowerCase()); // Convert to Lowercase
// console.log(text.indexOf("World"));
// console.log(text.replace("World", "Dunia")); // Replace

// Built in Objects
// Math
// console.log(Math.random() * 100);
// console.log(Math.floor(95.8));
// console.log(Math.ceil(95.1));
// console.log(Math.round(95.1));
// console.log(Math.sqrt(25));

// Date
// let currentDate = new Date();
// console.log(currentDate);

// Array
// let array = ["Satu", "Dua", "Tiga"];
// console.log(array);
// console.log(array[0]);
// console.log(array.length);
// array.push("Empat");
// console.log(array);
// array.pop();
// console.log(array);

// Variables
// Var - Let - Const
// var Hello = "Satu";
// Hello = "Dua";
// console.log(Hello);

// let Hello2 = "Tiga";
// Hello2 = "Empat";
// console.log(Hello2);

// const String = "Hello";
// console.log(String);

// Mathematical Assignment Operators
// let count = 0;
// count += 5;
// count -= 2;
// count *= 10;
// count /= 2;
// count %= 3;
// console.log(count);

// typeof
// console.log(typeof 100);
// console.log(typeof "Hello World!");
// console.log(typeof true);
// console.log(typeof undefined);

// if else
// let age = 20;
// if (age >= 18) {
//   console.log("Anda Lebih Dari 18");
// } else if (age >= 10 && age <= 17) {
//   console.log("Anda berumur " + age);
// } else {
//   console.log("Anda Kurang Dari 18");
// }

// switch case
// let day = 3;
// switch (day) {
//   case 1:
//     console.log("Senin");
//     break;
//   case 2:
//     console.log("Selasa");
//     break;
//   default:
//     console.log("Bukan hari senin atau selasa");
//     break;
// }

// tenary operator
// let age = 15;
// console.log(
//   age >= 18
//     ? "Anda Lebih Dari 18"
//     : age >= 10 && age < 18
//     ? `Anda Berumur ${age}`
//     : "Anda Kurang Dari 18"
// );

// Logical Operators
// && ||
// let age = 100;
// if (age >= 10 && age < 15) {
//   console.log("Berhasil Masuk ke &&");
// } else if (age > 0 || age === 15) {
//   console.log("Berhasil Masuk ke ||");
// }

// Array of Object
// interface Person {
//   name: String;
//   age?: Number;
// }

// const People: Person[] = [
//   {
//     name: "Matthew",
//     age: 20,
//   },
//   {
//     name: "Hansen",
//     age: 25,
//   },
//   {
//     name: "Wellson",
//     age: 30,
//   },
//   {
//     name: "Excel",
//   }
// ];

// function hallo(people: Person[]) {
//   people.forEach(person => {
//     console.log(`Hello ${person.name}`)
//   });

//   people.map(person => {
//     return (
//       console.log(`Hello ${person.name}`)
//     );
//   });
// }

// hallo(People);

// console.log(People);

// Function
// function hallo(name: string) {
//   console.log(name);
// }

// hallo("Matthew");

function App() {

  // const functionDummy = (value: string) => {
  //   console.log('belajar react js')

  //   return 'halo'
  // }

  // const DemoApi = () => {
  //   // //get
  //   // axios.get('https://jsonplaceholder.typicode.com/users')
  //   //   .then(res => console.log(res.data))
  //   //   .catch(err => console.log(err))

  //   // //post
  //   // const payload = {
  //   //   name: "Matthew",
  //   //   email: "matthew@binus.ac.id"
  //   // };

  //   // axios.post('https://jsonplaceholder.typicode.com/users', payload)
  //   //   .then(res => console.log(res.data))
  //   //   .catch(err => console.log(err))

  //   // //put
  //   // axios.put('https://jsonplaceholder.typicode.com/users/1', {
  //   //   name: "Matthew Update",
  //   // })
  //   //   .then(res => console.log(res.data))
  //   //   .catch(err => console.log(err))

  // }

  // const DemoMoment = () => {

  //   // const now = moment();

  //   // const specificDate = moment("13-11-2024", "DD-MM-YYYY");

  //   // const nextWeek = moment().add(1, 'weeks');

  //   // const lastMonth = moment().subtract(1, 'months');

  //   // const date1 = moment("2023-11-13");
  //   // const date2 = moment("2024-11-13");
  //   // const diff = date2.diff(date1, 'days');

  //   const validateDate = moment("2023-02-29", "YYYY-MM-DD").isValid();
    
  //   console.log(validateDate);
    
  //   return (
  //     <h1>{validateDate}</h1>
  //   )
  // }

  return (
    // <div className="App">
    //   // Lifecycle, class & functional components
    //   {/* <ClassComponent
    //     title="Halo Class Component"
    //     isShow={true}
    //     numberArray={[]}
    //     stringArray={[
    //       'title 1',
    //       'title 2',
    //       'title 3',
    //       'title 4',
    //     ]}
    //     testObject={{
    //       varString: 'test',
    //       varNumber: 0,
    //       varBoolean: true
    //     }}
    //     testObjectArray={[]}
    //     testFunc={functionDummy}
    //   />
    //   <FunctionalComponent
    //     title='Halo functional component'
    //   /> */}
    // </div>
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="*" element={<NotFound/>}></Route>
    //   </Routes>
    // </BrowserRouter>
    // <button onClick={DemoApi}>Hit Api</button>
    // <DemoMoment></DemoMoment>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodoList />}></Route>
        <Route path = '/tododetail/:id' element={<TodoListDetail />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;