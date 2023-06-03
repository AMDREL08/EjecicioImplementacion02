/// youtube 
var Categoria = /** @class */ (function () {
    function Categoria(nombre, descripcion, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
    return Categoria;
}());
var Streamer = /** @class */ (function () {
    function Streamer(nickname, descripcion, redesSociales) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
    }
    return Streamer;
}());
var Canal = /** @class */ (function () {
    function Canal(nombre, banner, streamer, descripcion) {
        this.nombre = nombre;
        this.banner = banner;
        this.streamer = streamer;
        this.descripcion = descripcion;
    }
    return Canal;
}());
var Plataforma = /** @class */ (function () {
    function Plataforma(nombre, logo, descripcion, empresaPatrocinadora, canales) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresaPatrocinadora = empresaPatrocinadora;
        this.canales = canales;
    }
    return Plataforma;
}());
// facbook
var Categoria = /** @class */ (function () {
    function Categoria(nombre, descripcion, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
    return Categoria;
}());
var Streamer = /** @class */ (function () {
    function Streamer(nickname, descripcion, redesSociales) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
    }
    return Streamer;
}());
var Canal = /** @class */ (function () {
    function Canal(nombre, banner, streamer, descripcion) {
        this.nombre = nombre;
        this.banner = banner;
        this.streamer = streamer;
        this.descripcion = descripcion;
    }
    return Canal;
}());
var Plataforma = /** @class */ (function () {
    function Plataforma(nombre, logo, descripcion, empresaPatrocinadora, canales) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresaPatrocinadora = empresaPatrocinadora;
        this.canales = canales;
    }
    return Plataforma;
}());
// tik tok
var Categoria = /** @class */ (function () {
    function Categoria(nombre, descripcion, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
    return Categoria;
}());
var Streamer = /** @class */ (function () {
    function Streamer(nickname, descripcion, redesSociales) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
    }
    return Streamer;
}());
var Canal = /** @class */ (function () {
    function Canal(nombre, banner, streamer, descripcion) {
        this.nombre = nombre;
        this.banner = banner;
        this.streamer = streamer;
        this.descripcion = descripcion;
    }
    return Canal;
}());
var Plataforma = /** @class */ (function () {
    function Plataforma(nombre, logo, descripcion, empresaPatrocinadora, canales) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresaPatrocinadora = empresaPatrocinadora;
        this.canales = canales;
    }
    return Plataforma;
}());
// instagram
var Categoria = /** @class */ (function () {
    function Categoria(nombre, descripcion, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
    return Categoria;
}());
var Streamer = /** @class */ (function () {
    function Streamer(nickname, descripcion, redesSociales) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
    }
    return Streamer;
}());
var Canal = /** @class */ (function () {
    function Canal(nombre, banner, streamer, descripcion) {
        this.nombre = nombre;
        this.banner = banner;
        this.streamer = streamer;
        this.descripcion = descripcion;
    }
    return Canal;
}());
var Plataforma = /** @class */ (function () {
    function Plataforma(nombre, logo, descripcion, empresaPatrocinadora, canales) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresaPatrocinadora = empresaPatrocinadora;
        this.canales = canales;
    }
    return Plataforma;
}());
// twich
var Categoria = /** @class */ (function () {
    function Categoria(nombre, descripcion, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
    return Categoria;
}());
var Streamer = /** @class */ (function () {
    function Streamer(nickname, descripcion, redesSociales) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
    }
    return Streamer;
}());
var Canal = /** @class */ (function () {
    function Canal(nombre, banner, streamer, descripcion) {
        this.nombre = nombre;
        this.banner = banner;
        this.streamer = streamer;
        this.descripcion = descripcion;
    }
    return Canal;
}());
var Plataforma = /** @class */ (function () {
    function Plataforma(nombre, logo, descripcion, empresaPatrocinadora, canales) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresaPatrocinadora = empresaPatrocinadora;
        this.canales = canales;
    }
    return Plataforma;
}());
// Creación de instancias
var categoriaJuegos = new Categoria("Juegos", "Categoría para transmisiones de videojuegos", "imagen-juegos.png");
var categoriaMusica = new Categoria("Música", "Categoría para transmisiones de música en vivo", "imagen-musica.png");
var streamer1 = new Streamer("Streamer1", "¡Bienvenidos a mi canal!", ["twitter.com/streamer1", "instagram.com/streamer1"]);
var streamer2 = new Streamer("Streamer2", "¡Sígueme para ver contenido increíble!", ["twitter.com/streamer2", "instagram.com/streamer2"]);
var canal1 = new Canal("Canal1", "banner-canal1.png", streamer1, "Descripción detallada del Canal1");
var canal2 = new Canal("Canal2", "banner-canal2.png", streamer2, "Descripción detallada del Canal2");
var plataforma = new Plataforma("Nombre de la Plataforma", "logo-plataforma.png", "Descripción de la plataforma", "Empresa Patrocinadora", [canal1, canal2]);
// Uso de las instancias
console.log("Plataforma: ".concat(plataforma.nombre));
console.log("Logo: ".concat(plataforma.logo));
console.log("Descripci\u00F3n: ".concat(plataforma.descripcion));
console.log("Empresa Patrocinadora: ".concat(plataforma.empresaPatrocinadora));
plataforma.canales.forEach(function (canal) {
    console.log("--- Canal: ".concat(canal.nombre, " ---"));
    console.log("Banner: ".concat(canal.banner));
    console.log("Streamer: ".concat(canal.streamer.nickname));
    console.log("Descripci\u00F3n: ".concat(canal.descripcion));
});
// Agregar categorías a los canales
canal1.categorias = [categoriaJuegos];
canal2.categorias = [categoriaJuegos, categoriaMusica];
console.log("Categor\u00EDas del Canal1: ".concat(canal1.categorias.map(function (categoria) { return categoria.nombre; }).join(", ")));
console.log("Categor\u00EDas del Canal2: ".concat(canal2.categorias.map(function (categoria) { return categoria.nombre; }).join(", ")));
// Creación de instancias
var categoriaJuegos = new Categoria("Juegos", "Categoría para transmisiones de videojuegos", "imagen-juegos.png");
var categoriaMusica = new Categoria("Música", "Categoría para transmisiones de música en vivo", "imagen-musica.png");
var streamer1 = new Streamer("Streamer1", "¡Bienvenidos a mi canal!", ["twitter.com/streamer1", "instagram.com/streamer1"]);
var streamer2 = new Streamer("Streamer2", "¡Sígueme para ver contenido increíble!", ["twitter.com/streamer2", "instagram.com/streamer2"]);
var canal1 = new Canal("Canal1", "banner-canal1.png", streamer1, "Descripción detallada del Canal1");
var canal2 = new Canal("Canal2", "banner-canal2.png", streamer2, "Descripción detallada del Canal2");
var plataforma = new Plataforma("Nombre de la Plataforma", "logo-plataforma.png", "Descripción de la plataforma", "Empresa Patrocinadora", [canal1, canal2]);
// Uso de las instancias
console.log("Plataforma: ".concat(plataforma.nombre));
console.log("Logo: ".concat(plataforma.logo));
console.log("Descripci\u00F3n: ".concat(plataforma.descripcion));
console.log("Empresa Patrocinadora: ".concat(plataforma.empresaPatrocinadora));
plataforma.canales.forEach(function (canal) {
    console.log("--- Canal: ".concat(canal.nombre, " ---"));
    console.log("Banner: ".concat(canal.banner));
    console.log("Streamer: ".concat(canal.streamer.nickname));
    console.log("Descripci\u00F3n: ".concat(canal.descripcion));
});
// Agregar categorías a los canales
canal1.categorias = [categoriaJuegos];
canal2.categorias = [categoriaJuegos, categoriaMusica];
console.log("Categor\u00EDas del Canal1: ".concat(canal1.categorias.map(function (categoria) { return categoria.nombre; }).join(", ")));
console.log("Categor\u00EDas del Canal2: ".concat(canal2.categorias.map(function (categoria) { return categoria.nombre; }).join(", ")));
// Creación de instancias
var categoriaJuegos = new Categoria("Juegos", "Categoría para transmisiones de videojuegos", "imagen-juegos.png");
var categoriaMusica = new Categoria("Música", "Categoría para transmisiones de música en vivo", "imagen-musica.png");
var streamer1 = new Streamer("Streamer1", "¡Bienvenidos a mi canal!", ["twitter.com/streamer1", "instagram.com/streamer1"]);
var streamer2 = new Streamer("Streamer2", "¡Sígueme para ver contenido increíble!", ["twitter.com/streamer2", "instagram.com/streamer2"]);
var canal1 = new Canal("Canal1", "banner-canal1.png", streamer1, "Descripción detallada del Canal1");
var canal2 = new Canal("Canal2", "banner-canal2.png", streamer2, "Descripción detallada del Canal2");
var plataforma = new Plataforma("Nombre de la Plataforma", "logo-plataforma.png", "Descripción de la plataforma", "Empresa Patrocinadora", [canal1, canal2]);
// Uso de las instancias
console.log("Plataforma: ".concat(plataforma.nombre));
console.log("Logo: ".concat(plataforma.logo));
console.log("Descripci\u00F3n: ".concat(plataforma.descripcion));
console.log("Empresa Patrocinadora: ".concat(plataforma.empresaPatrocinadora));
plataforma.canales.forEach(function (canal) {
    console.log("--- Canal: ".concat(canal.nombre, " ---"));
    console.log("Banner: ".concat(canal.banner));
    console.log("Streamer: ".concat(canal.streamer.nickname));
    console.log("Descripci\u00F3n: ".concat(canal.descripcion));
});
// Agregar categorías a los canales
canal1.categorias = [categoriaJuegos];
canal2.categorias = [categoriaJuegos, categoriaMusica];
console.log("Categor\u00EDas del Canal1: ".concat(canal1.categorias.map(function (categoria) { return categoria.nombre; }).join(", ")));
console.log("Categor\u00EDas del Canal2: ".concat(canal2.categorias.map(function (categoria) { return categoria.nombre; }).join(", ")));
// Creación de instancias
var categoriaJuegos = new Categoria("Juegos", "Categoría para transmisiones de videojuegos", "imagen-juegos.png");
var categoriaMusica = new Categoria("Música", "Categoría para transmisiones de música en vivo", "imagen-musica.png");
var streamer1 = new Streamer("Streamer1", "¡Bienvenidos a mi canal!", ["twitter.com/streamer1", "instagram.com/streamer1"]);
var streamer2 = new Streamer("Streamer2", "¡Sígueme para ver contenido increíble!", ["twitter.com/streamer2", "instagram.com/streamer2"]);
var canal1 = new Canal("Canal1", "banner-canal1.png", streamer1, "Descripción detallada del Canal1");
var canal2 = new Canal("Canal2", "banner-canal2.png", streamer2, "Descripción detallada del Canal2");
var plataforma = new Plataforma("Nombre de la Plataforma", "logo-plataforma.png", "Descripción de la plataforma", "Empresa Patrocinadora", [canal1, canal2]);
// Uso de las instancias
console.log("Plataforma: ".concat(plataforma.nombre));
console.log("Logo: ".concat(plataforma.logo));
console.log("Descripci\u00F3n: ".concat(plataforma.descripcion));
console.log("Empresa Patrocinadora: ".concat(plataforma.empresaPatrocinadora));
plataforma.canales.forEach(function (canal) {
    console.log("--- Canal: ".concat(canal.nombre, " ---"));
    console.log("Banner: ".concat(canal.banner));
    console.log("Streamer: ".concat(canal.streamer.nickname));
    console.log("Descripci\u00F3n: ".concat(canal.descripcion));
});
// Agregar categorías a los canales
canal1.categorias = [categoriaJuegos];
canal2.categorias = [categoriaJuegos, categoriaMusica];
console.log("Categor\u00EDas del Canal1: ".concat(canal1.categorias.map(function (categoria) { return categoria.nombre; }).join(", ")));
console.log("Categor\u00EDas del Canal2: ".concat(canal2.categorias.map(function (categoria) { return categoria.nombre; }).join(", ")));
// Creación de instancias
var categoriaJuegos = new Categoria("Juegos", "Categoría para transmisiones de videojuegos", "imagen-juegos.png");
var categoriaMusica = new Categoria("Música", "Categoría para transmisiones de música en vivo", "imagen-musica.png");
var streamer1 = new Streamer("Streamer1", "¡Bienvenidos a mi canal!", ["twitter.com/streamer1", "instagram.com/streamer1"]);
var streamer2 = new Streamer("Streamer2", "¡Sígueme para ver contenido increíble!", ["twitter.com/streamer2", "instagram.com/streamer2"]);
var canal1 = new Canal("Canal1", "banner-canal1.png", streamer1, "Descripción detallada del Canal1");
var canal2 = new Canal("Canal2", "banner-canal2.png", streamer2, "Descripción detallada del Canal2");
var plataforma = new Plataforma("Nombre de la Plataforma", "logo-plataforma.png", "Descripción de la plataforma", "Empresa Patrocinadora", [canal1, canal2]);
// Uso de las instancias
console.log("Plataforma: ".concat(plataforma.nombre));
console.log("Logo: ".concat(plataforma.logo));
console.log("Descripci\u00F3n: ".concat(plataforma.descripcion));
console.log("Empresa Patrocinadora: ".concat(plataforma.empresaPatrocinadora));
plataforma.canales.forEach(function (canal) {
    console.log("--- Canal: ".concat(canal.nombre, " ---"));
    console.log("Banner: ".concat(canal.banner));
    console.log("Streamer: ".concat(canal.streamer.nickname));
    console.log("Descripci\u00F3n: ".concat(canal.descripcion));
});
// Agregar categorías a los canales
canal1.categorias = [categoriaJuegos];
canal2.categorias = [categoriaJuegos, categoriaMusica];
console.log("Categor\u00EDas del Canal1: ".concat(canal1.categorias.map(function (categoria) { return categoria.nombre; }).join(", ")));
console.log("Categor\u00EDas del Canal2: ".concat(canal2.categorias.map(function (categoria) { return categoria.nombre; }).join(", ")));
