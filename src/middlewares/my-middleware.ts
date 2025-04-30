import {Request, Response, NextFunction} from 'express';


export function myMiddleware(request: Request, response: Response, next: NextFunction ){

  console.log("Request URL: ", request.url)

  console.log("Request Method: ", request.method)

 
  }

  