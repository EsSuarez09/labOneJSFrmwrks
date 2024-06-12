import { readFile } from "node:fs";// I am using import/ESModule

// Read the content of the file "messages.txt" with UTF-8 encoding
readFile("./messages.txt", "utf-8", (err, data) => {
    console.log("\nI used import/ESModule to import readFile from fileSytstem, I initialized my npm to generated JSON file then added type which is module.\n");
    
    if (err) {//Throw the error, if there's an error in reading the file
        throw err;
    }else{ // If none, print the messages of the txt file to the console
        console.log("\n----------------------This is my messages---------------------\n");
        console.log(data);
    }
});