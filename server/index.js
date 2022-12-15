import * as d3 from 'd3';
import * as fs from 'fs';
import { renameKey}  from './utils/index.js';
import { conn } from './config/connection.js';
import { RecipeTrend } from './models/recipe.js';

let csvFileName = "recipes.csv";
let csvFile = fs.readFileSync(`data/${csvFileName}`, 'utf8');




RecipeTrend.insertMany(csvFile)
    .then((resp) => {
        console.log("Added to database:")
        process.exit();
    })
    .catch((err) => {
        console.log(err);
        process.exit(1);
    })
