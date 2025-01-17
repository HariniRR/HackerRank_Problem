'use strict';
const fs = require('fs');
const https = require('https');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;
process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});
function readLine() {
    return inputString[currentLine++];
}
/*
 * Complete the 'getTemperature' function below.
 *
 * URL for cut and paste
 * https://jsonmock.hackerrank.com/api/weather?name=<name>
 *
 * The function is expected to return an Integer.
 * The function accepts a singe parameter name.
 */
async function getTemperature(name) {
    return new Promise((resolve, reject) => {
        const url = https://jsonmock.hackerrank.com/api/weather?name=${encodeURIComponent(name)};
        console.log(Fetching data from URL: ${url});

        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const jsonResponse = JSON.parse(data);
                    console.log('Response received:', jsonResponse);

                    if (jsonResponse && jsonResponse.data && jsonResponse.data.length > 0) {
                        const weatherInfo = jsonResponse.data[0].weather;
                        console.log(Weather info found: ${weatherInfo});

                        // Improved regex to handle different formats
                        const temperatureMatch = weatherInfo.match(/(-?\d+)/);
                        if (temperatureMatch) {
                            const temperature = parseInt(temperatureMatch[0], 10);
                            console.log(Temperature found: ${temperature});
                            resolve(temperature);
                        } else {
                            console.log('No valid temperature found in weather info.');
                            resolve(null);
                        }
                    } else {
                        console.log('No data found for the given city.');
                        resolve(null);
                    }
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                    reject(error);
                }
            });
        }).on('error', (error) => {
            console.error('Error with HTTPS request:', error);
            reject(error);
        });
    });
}
async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const name = readLine();

    const result = await getTemperature(name);
    
    ws.write(result.toString());

    ws.end();
}
