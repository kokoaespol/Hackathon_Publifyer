export default class VideoService {
    constructor() {}
  
    async getScript() {
        return {
            "ambiente": "Para esta publicacion podrias enfocarte en mostrar productos relacionados dado el tema podria ser al aire libre Guia",
            "guion": "Podrias guiarte usando esta informacion, no olvides mencionar tus palabras clave resaltadas.",
            "palabrasClave": ["palabra1", "palabra2", "palabra3"],
            "titulo": "Titulo de la publicacion",
            "descripcion": "Descripcion de la publicacion",
            "hashtags": ["hashtag1", "hashtag2", "hashtag3"],
        }
    }
  }
  