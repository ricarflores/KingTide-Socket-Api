# KingTide-Socket-Api
Socket and API for Prueba Tecnica

# Importan !!!
By default this project use a mongo data base in atlas, maybe sometimes the response would we slown

# Install dependencies

```sh
npm install
```

# Init Server

```sh
npm run tsc
```
After executing the command

```sh
npm run start
```

# Init fro develop

```sh
npm run tsc
```

```sh
npm run dev
```

# API Descriptio
For the API use need to sent a API KEY in the headers like authorization

If you no include the API KEY in the requets you will recibe a 401 response

## For test end point
    - Use postman collection to access to the endpoint
    - General URL : http://localhost:4000/api/mensajes/

| EndPoint | Type | Params  |
| ------------- | ------------- | ------------- |
| public  | GET  |   | 
| create/apiKey | GET  |  |
| apiKey/:apiKey | GET  | apiKey  |
| apiKey/delete/:apiKey | GET  | apiKey  |
| private | GET  |   |
