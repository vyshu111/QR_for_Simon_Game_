import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
    {
        message:"Enter your URL: ",
        name:"URL"
    }])
  .then((answers) => {
    const url=answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-image.png'));
    fs.writeFile("URL.text",url,(err)=>{
        if(err) throw err;
        console.log("File has saved");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
     
    }
  });