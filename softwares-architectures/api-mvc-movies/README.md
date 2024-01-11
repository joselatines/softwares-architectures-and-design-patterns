# MVC Architecture Example

This is a basic API REST using MVC Architecture. I created this single project to better understand the basics of the MVC architecture.


![MVC Architecture Schema](//static/mvc.jpg "MVC Architecture Schema")

This app is using Flask as a framework. To start the app, use the following code:

```bash
flask --app main run
```

# Routes
If you are using Visual Studio Code, you can test this app by installing the extension `REST Client - Huachao Mao`, which allows you to simply make HTTP requests. `Use the api.http` file

These are the routes that are in the app, providing CRUD endpoints:

## Get all movies

```
GET http://127.0.0.1:5000/movies HTTP/1.1
```

## Create Movie
```
POST http://127.0.0.1:5000/movies HTTP/1.1
Content-Type: application/json

{
    "title": "Sample title movie",
    "genres": ["terror", "fun"]
}

```

## Update movie

```
PUT http://127.0.0.1:5000/movies/{id} HTTP/1.1
Content-Type: application/json

{
    "title": "Sample title movie2",
    "genres": ["comedy"]
}

```

## Get one movie
```
GET http://127.0.0.1:5000/movies/{id} HTTP/1.1
```

## Delete one movie
```
DELETE http://127.0.0.1:5000/movies/{id} HTTP/1.1
```
