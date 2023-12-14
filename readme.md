# Auth API

using typeScript , express Js, Mongoose , JWT

## Sing Up

- https://auth-job-task.vercel.app/api/auth/sing-up
- format
- {
  "name": "Mamun",
  "email": "mamun123@gmail.com",
  "password": "mamunvai"}

## Login

- https://auth-job-task.vercel.app/api/auth/sing-in
- format
- {
  "email": "mamun123@gmail.com",
  "password": "123456"}

## Reset Password

- https://auth-job-task.vercel.app/api/auth/forget-password
- format
- {
  "email": "mamun123@gmail.com",
  "newPassword": "123456"}

# Post API

## Create Post

- https://auth-job-task.vercel.app/api/post (POST METHOD)
- must be send headers token example, Authorization: Token
- format
- {
  "title": "How to work Database",
  "imgUrl": "database.img",
  "description": "yyyyyyyyyyyyy"}

## Get All Post

- https://auth-job-task.vercel.app/api/post (GET METHOD)

## Get Post Details

- https://auth-job-task.vercel.app/api/post/6579ff717b22a1fe1e5d7654 (GET METHOD)

## Update Post

- https://auth-job-task.vercel.app/api/post/6579ff717b22a1fe1e5d7654 (Patch METHOD)
- format
- {
  "title": "Database Work Nice",
  "imgUrl": "node or database"}

## Delete POST

- https://auth-job-task.vercel.app/api/post/6579ff717b22a1fe1e5d7654 (Delete METHOD)

## Post Like

- https://auth-job-task.vercel.app/api/post/like (POST METHOD)
- must be send headers token example, Authorization: "dojeoeooieroefc"
- format
- {
  "postId":"657a957f25bf81a4d1549804"}

## Post Comment

- https://auth-job-task.vercel.app/api/post/comment (POST METHOD)
- must be send headers token example, Authorization: "dojeoeooieroefc"
- format
- {
  "postId":"657a957f25bf81a4d1549804",
  "comment": "Very Nice"
  }

## My Post (Extra Work)

- https://auth-job-task.vercel.app/api/post/comment (GET METHOD)
- must be send headers token example, Authorization: "dojeoeooieroefc"
