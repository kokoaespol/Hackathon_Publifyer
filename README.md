# Genie

## API Routes

### Auth

Log in
```
POST /api/v1/login
{
    "email": string,
    "password": string
}
```
Response
```
200 Ok
{
  "uid": string,
  "name": string,
  "email": string,
  "twitterUsername": string?
  "instagramUsername": string?
  "tikTokUsername": string?
}
```

### Users

Create a new user:
```
POST /api/v1/users

{
    "email": string,
    "name": string,
    "password": string,
    "twitterUsername": string?,
    "instagramUsername": string?,
    "tikTokUsername": string?
}
```
Response
```
Created 201
Bad Request 400
Conflict 409
Internal Server Error 500
```

### Genies

Crear un nuevo Genie:
```
POST /api/v1/genies/new

{
    "brand": string,
    "subject": string,
    "idea": string,
    "targetAudience": string,
    "keywords": list<string>,
    "durationInSeconds": int
}
```
Response:
```
Created 201
{
    "status": int,
    "ambiente": string,
    "guion": string
}
```

Get all Genies
```
GET /api/v1/genies
```
Response
```
Ok 200
[
    {
        "id": string,
        "meta": {
            "brand": string,
            "subject": string,
            "idea": string,
            "targetAudience": string,
            "keywords": list<string>,
            "durationInSeconds": int
        }
    }
]
```

### Transcriptions

Pedir una nueva transcripción:
```
POST /api/v1/transcription

Multi-part form data
video: Video file
```
Response
```
Ok 200
{
    "status": int,
    "transcription": string
}
```
