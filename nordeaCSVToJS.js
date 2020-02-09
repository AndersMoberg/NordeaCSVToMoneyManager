const fs = require('fs').promises;
const parse = require('csv-parse/lib/sync')

async function CSVtoJSON(buffer) {
    return parse(buffer, { columns: true, relax_column_count: true });
}

exports.getJSONObject = async function (inputPath) {
    const fileData = await fs.readFile(inputPath).catch(function(error){
        console.error("Error reading " + inputPath);
        console.error(error);
        process.exit(1);
    });

    return await CSVtoJSON(fileData);
}