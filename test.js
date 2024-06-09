const fs = require('fs');

fs.readFile('index.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
//   console.log(data);

  const lines = data.split('\n');
  console.log(lines[15]);
  if (lines[15].trim() == "<p>Ceci est mon site.</p>") {
    console.log("The second line is '<p>Ceci est mon site.</p>'");
  } else {
    throw new Error("The second line is not '<p>Ceci est mon site.</p>'");
  }; 
});
