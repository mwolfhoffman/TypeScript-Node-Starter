/**
 * This is the index file for the API routes. 
 *  * app.ts imports this file to use for ALL the API routes. 
 *  * Because this file uses the file system, you can now add new route ts files
 *  * to this folder without importing them into the app.ts
 */

import * as fs from 'fs';
import * as path from 'path';

exports.router = require('express').Router();

let files = fs.readdirSync(__dirname);

files.forEach((file:any)=>{

  if (!file.endsWith('.js')) return;
  if (file.endsWith('index.js')) return;

  let controller = require('./' + file);

  if (!controller.router) return;

  exports.router.use(controller.mountPath || '', controller.router);
});