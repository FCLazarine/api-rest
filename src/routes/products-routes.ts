import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware.js"
import { Request, Response } from "express";
import express from "express";



const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))




const productsRouter = Router();

app.use("/products", productsRouter)

app.get("/products/:id", (request, response) => {
  const {id} = request.params as {id: string}
  
  response.send(`Produto ${id}`)
})

app.get("/products/:id/reviews", (request, response) => {
  const {id} = request.params as {id: string}
  
  response.send(`Reviews do produto ${id}`)
})

app.get("/products/:id/reviews/:reviewId", (request, response) => {
  const {id, reviewId} = request.params as {id: string, reviewId: string}
  
  response.send(`Review ${reviewId} do produto ${id}`)
})

app.get("/products/:id/reviews/:reviewId/comments", (request, response) => {
  const {id, reviewId} = request.params as {id: string, reviewId: string}
  
  response.send(`Comentarios da review ${reviewId} do produto ${id}`)
})

app.get("/products/:id/reviews/:reviewId/comments/:commentId", (request, response) => {
  const {id, reviewId, commentId} = request.params as {id: string, reviewId: string, commentId: string}
  
  response.send(`Comentario ${commentId} da review ${reviewId} do produto ${id}`)
})

app.get("/products/:id/reviews/:reviewId/comments/:commentId/replies", (request, response) => {
  const {id, reviewId, commentId} = request.params as {id: string, reviewId: string, commentId: string}
  
  response.send(`Respostas do comentario ${commentId} da review ${reviewId} do produto ${id}`)
})

app.get("/products/:id/reviews/:reviewId/comments/:commentId/replies/:replyId", (request, response) => {
  const {id, reviewId, commentId, replyId} = request.params as {id: string, reviewId: string, commentId: string, replyId: string}
  
  response.send(`Resposta ${replyId} do comentario ${commentId} da review ${reviewId} do produto ${id}`)
})







