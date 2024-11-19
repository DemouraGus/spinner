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
};

spinner(spinnerChars);