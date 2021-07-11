const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  // debugger;
  console.log(person.name);
  // console.groupCollapsed();
  // console.group(`${person.name}`);
  // console.log(person.country);
  // console.log(person.cool);
  // console.log('Done!!');
  // console.groupEnd(`${person.name}`);
});

/// *** Console Methods ***///
// console.log();
// console.info();
// console.error();
// console.warn();
// console.table();
// console.count();
// console.group();
// console.groupEnd();
// console.groupCollapsed();
// function doALotOfStuff() {
//   console.group('Doing Some Stuff');
//   console.log(`I'm one`);
//   console.warn('Watch out!');
//   console.error('Hey');
//   console.groupEnd('Doing Some Stuff');
// }

/// *** Callstack ***///
// function bootstrap() {
//   console.log('Starting the app');
//   go();
// }
// bootstrap();

/// *** Grabbing Elements ***///
// $0 => when inspecting an element switch to console and this command will give you the element
// 0 is the last element, 1 is the second to last, etc.
// $ is a shorthand selector that only works in the console for document.querySelector();
// $('p') will first element
// $$('p') will match all Elements

/// *** Breakpoints ***///
// debugger; when the developer tools are open it will pause the code
// On the sources tab you can see the current state of each variable

// Scope

// Network Requests
// Used fetchDadJoke() to look a the Network table...very interesting.
// Use Apple.com => XHR to look at the data being sent about me.

// Break On Attribute
// Right click on the button then "Break on => attribute modification"
// Can send Event listener break points suchs as XHR or Fetch.

// Some Setup Code

function doctorize(name) {
  // console.count(`Running Doctorize for ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function (e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
