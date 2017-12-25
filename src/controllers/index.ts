/**
 * This is the index file for the Controller routes. 
 *  * app.ts imports this file to use for ALL the Controller routes. 
 *  * Because this file uses the file system, you can now add new route ts files
 *  * to this folder without importing them into the app.ts
 */

import * as  fs from 'fs';
import * as path from 'path';
import * as express from 'express';
import { debug } from 'util';

const ControllerRouter = express.Router();

let files = fs.readdirSync(__dirname);

files.forEach((file:any)=>{

  if (!file.endsWith('.js')) return;
  if (file.endsWith('index.js')) return;

  let controller = require('./' + file);

  if (!controller.router) return;

  ControllerRouter.use(controller.mountPath || '', controller.router);
});

export default ControllerRouter;
