// process.stdout.write("hello from spinner1.js... \rheyyy\n");

const spinnerChars = "|/-\\|/-\\|/-\\|";

const spinner = function (string) {

let delay = 100

for (const char of string) {
  setTimeout(() => {
    process.stdout.write(`\r${char}    `);
  }, delay);
  delay += 200;
};  

setTimeout(() => {
  process.stdout.write("\n");
}, delay);

  // setTimeout(() => {
  //   process.stdout.write("\r-   ");
  // }, 500);

  // setTimeout(() => {
  //   process.stdout.write("\r\\   ");
  // }, 700);

  // setTimeout(() => {
  //   process.stdout.write("\r|   ");
  // }, 900);

  // setTimeout(() => {
  //   process.stdout.write("\r/   ");
  // }, 1100);

  // setTimeout(() => {
  //   process.stdout.write("\r-   ");
  // }, 1300);

  // setTimeout(() => {
  //   process.stdout.write("\r\\   ");
  // }, 1500);

  // setTimeout(() => {
  //   process.stdout.write("\n   ");
  // }, 1700);

};

spinner(spinnerChars);