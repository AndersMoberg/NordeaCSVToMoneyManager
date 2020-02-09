async function start() {
    if(process.argv.length <= 2) {
        console.log("You need to supply a path to a CSV file!");
        console.log("npm start filepath.csv");
        process.exit(1);
    }
    let contents = await require('./nordeaCSVToJS').getJSONObject(process.argv[2]);
    console.log(contents);
}

start();