import * as d3 from 'd3';
import * as fs from 'fs';
import { renameKey}  from './utils/index.js';
// import { conn } from './config/connection.js';
import { VideoTrend } from './models/VideoTrend.js';
// IF YOU HAVE SEVERAL FILES, YOU CAN PULL THEIR NAMES IN USING THIS
// const filesToRead = fs.readdirSync('data');
// console.log(filesToRead);

// THEN YOU CAN MAP THROUGH THEM
// filesToRead.map((csvFileName) => {

// SINCE WE ONLY HAVE ONE CSV, I'LL JUST DO IT THIS WAY
let csvFileName = "trends.csv";
let csvFile = fs.readFileSync(`data/${csvFileName}`, 'utf8');
let rawData = d3.csvParse(csvFile);

// d3.timeParse allows us to take a string and turn it into a datetime
// This here says to expect the string to be in YYYYmm format
let parse = d3.timeParse("%Y%m");

// When we pull in the CSV, typically all data types are all String
//   but our model has more than just string data types
// Therefore, we're looping through the data and:
//      (1) Changing the name of the column to better fit the model
//      (2) Changing the data type 
let cleanedData = rawData.map(d => {
    renameKey(d, "Trend", "trend");
    renameKey(d, "Trend Type", "trend_type");
    renameKey(d, "Music", "music");
    renameKey(d, "Video Style", "video_style");
    renameKey(d, "Part of Song", "part_of_song");
    renameKey(d, "Theme", "theme");
    renameKey(d, "Music Genre", "music_genre");
    renameKey(d, rawData.columns[0], "platform");
    d["time"] = parse(d["Month"]);
    delete d["Month"];
    d["video_length"] = parseInt(d["Video length in S"]); 
    delete d["Video length in S"];

    return d;
});

VideoTrend.insertMany(cleanedData)
    .then((resp) => {
        console.log("Added to database:")
        process.exit();
    })
    .catch((err) => {
        console.log(err);
        process.exit(1);
    })
// }) <- Comes from the commented map statement
