import request, { SuperTest, Test } from "supertest";
//import app from "../src/app"
import TestAgent from 'supertest/lib/agent';
import express from "express";
import { authenticate } from '../service/authenticateService';
const app = express();

export enum UserLevel {
    ADMIN, USER, ANON
}

export enum Method {
GET = "GET", PUT = "PUT", POST = "POST", DELETE = "DELETE", PATCH = "PATCH"
}

const createRequest = <T>(
  req:TestAgent<Test>,
  path: string,
  method: Method,
  postBody: T | null
): request.Test => {
  let baseRequest;

  switch (method) {
    case Method.GET:
      baseRequest = req.get(path);
      break;
    case Method.POST:
      baseRequest = req.post(path);
      break;
    case Method.PUT:
      baseRequest = req.put(path);
      break;
    case Method.DELETE:
      baseRequest = req.delete(path);
      break;
    case Method.PATCH:
      baseRequest = req.patch(path);
      break;
    default:
      throw new Error(`Unhandled method: ${method}`);
  }

  if (postBody !== null) {
    baseRequest
      .send(JSON.stringify(postBody))
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
  }

  return baseRequest;
};

export const callApi = async <T>(path: string, method: Method, level: UserLevel, postBody: T | null = null) : Promise<request.Response> => {
    const req = request(app);
    const meth = createRequest(req, path, method, postBody);

    if (level === UserLevel.ADMIN || level === UserLevel.USER) {
        const email = level === UserLevel.ADMIN ? 'alexis.recalde@hotmail.com' : 'travian22';
        const tokenResponse = await authenticate(email, 'foobah1234');
        const jwtToken = tokenResponse.access_token;
        meth.set('Authorization', 'Bearer ' + jwtToken);
    }
    return meth;
};


