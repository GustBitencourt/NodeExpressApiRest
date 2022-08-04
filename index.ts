import express, { Request, Response } from "express";

const server = express();

server.get('/', (request: Request, response: Response) => {

    return response.json({ message: 'Welcome to my aplication' });
})


server.listen(5000, () => {
    console.log("Server is running on port 5000 http://localhost:5000");
})

