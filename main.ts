// Definición de clases

class Categoria {
  
 
    nombre: string;
      
      descripcion
    descripcion: string;
      imagen: string;
    
      
    
     
    
    
    constructor(nombre: string, descripcion: string, imagen: string) {
        this.nombre = nombre;
        
       
    this.descripcion = descripcion;
        this.imagen = imagen;
      }
    }
    
    class Streamer {
      nickname: string;
      
      descripcion
    descripcion: string;
      
      redesS
    
     
    redesSociales: string[];
    
      
    
      constructor
    
    
     
    
    
    constructor(nickname: string, descripcion: string, redesSociales: string[]) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        
       
    this.redesSociales = redesSociales;
      }
    }
    
    class Canal {
      nombre: string;
      banner: string;
      streamer: Streamer;
      
      descripcion
    
     
    descripcion: string;
    
      
    
    constructor(nombre: string, banner: string, streamer: Streamer, descripcion: string) {
        this.nombre = nombre;
        
       
    this.banner = banner;
        
       
    this.streamer = streamer;
        this.descripcion = descripcion;
      }
    }
    
    
      
    
     
    class Plataforma {
      
      nombre
    nombre: string;
      logo: string;
      
     
    descripcion: string;
      
      empresaPatro
    empresaPatrocinadora: string;
      
      canales
    canales: Canal[];
    
      
    
      constructor
    constructor(nombre: string, logo: string, descripcion: string, empresaPatrocinadora: string, canales: Canal[]) {
        
       
    this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        
       
    this.empresaPatrocinadora = empresaPatrocinadora;
        this.canales = canales;
      }
    }
    
    
      
    
     
    // Creación de instancias
    
    const categoriaJuegos = new Categoria("Juegos", "Categoría para transmisiones de videojuegos", "imagen-juegos.png");
    const categoriaMusica = new Categoria("Música", "Categoría para transmisiones de música en vivo", "imagen-musica.png");
    
    const streamer1 = new Streamer("Streamer1", "¡Bienvenidos a mi canal!", ["twitter.com/streamer1", "instagram.com/streamer1"]);
    const streamer2 = new Streamer("Streamer2", "¡Sígueme para ver contenido increíble!", ["twitter.com/streamer2", "instagram.com/streamer2"]);
    
    const canal1 = new Canal("Canal1", "banner-canal1.png", streamer1, "Descripción detallada del Canal1");
    const canal2 = new Canal("Canal2", "banner-canal2.png", streamer2, "Descripción detallada del Canal2");
    
    const plataforma = new Plataforma("Nombre de la Plataforma", "logo-plataforma.png", "Descripción de la plataforma", "Empresa Patrocinadora", [canal1, canal2]);
    
    // Uso de las instancias
    
    console.log(`Plataforma: ${plataforma.nombre}`);
    console.log(`Logo: ${plataforma.logo}`);
    console.log(`Descripción: ${plataforma.descripcion}`);
    console.log(`Empresa Patrocinadora: ${plataforma.empresaPatrocinadora}`);
    
    plataforma.
    
    plataforma
    
    
    pl
    canales.forEach((canal) => {
      console.log(`--- Canal: ${canal.nombre} ---`);
      
     
    console.log(`Banner: ${canal.banner}`);
      
     
    console.log(`Streamer: ${canal.streamer.nickname}`);
      console.log(`Descripción: ${canal.descripcion}`);
    });
    
    // Agregar categorías a los canales
    
    canal1.categorias = [categoriaJuegos];
    canal2.categorias = [categoriaJuegos, categoriaMusica];

console.log(`Categorías del Canal1: ${canal1.categorias.map((categoria) => categoria.nombre).join(", ")}`);
console.log(`Categorías del Canal2: ${canal2.categorias.map((categoria) => categoria.nombre).join(", ")}`);



