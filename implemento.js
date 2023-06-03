var Plataforma = /** @class */ (function () {
    function Plataforma(nombre, detalle) {
        this.nombre = nombre;
        this.detalle = detalle;
    }
    return Plataforma;
}());
var Canal = /** @class */ (function () {
    function Canal(nombre, detalle) {
        this.nombre = nombre;
        this.detalle = detalle;
    }
    return Canal;
}());
var Streamer = /** @class */ (function () {
    function Streamer(nombre, detalle) {
        this.nombre = nombre;
        this.detalle = detalle;
    }
    return Streamer;
}());
var Stream = /** @class */ (function () {
    function Stream(nombre, detalle) {
        this.nombre = nombre;
        this.detalle = detalle;
    }
    return Stream;
}());
// Clase principal que contiene la lógica
var StreamingService = /** @class */ (function () {
    function StreamingService() {
        this.plataformas = [];
        this.canales = [];
        this.streamers = [];
        this.streams = [];
    }
    // Métodos de visualización
    StreamingService.prototype.mostrarListadoPlataformas = function () {
        console.log("Listado de plataformas:");
        this.plataformas.forEach(function (plataforma) {
            console.log("".concat(plataforma.nombre, " - ").concat(plataforma.detalle));
        });
    };
    StreamingService.prototype.mostrarDetallePlataforma = function (nombre) {
        var plataforma = this.plataformas.find(function (plataforma) { return plataforma.nombre === nombre; });
        if (plataforma) {
            console.log("Detalle de la plataforma ".concat(plataforma.nombre, ":"));
            console.log(plataforma.detalle);
        }
        else {
            console.log("No se encontr\u00F3 la plataforma ".concat(nombre, "."));
        }
    };
    StreamingService.prototype.mostrarListadoCanales = function () {
        console.log("Listado de canales:");
        this.canales.forEach(function (canal) {
            console.log("".concat(canal.nombre, " - ").concat(canal.detalle));
        });
    };
    StreamingService.prototype.mostrarDetalleCanal = function (nombre) {
        var canal = this.canales.find(function (canal) { return canal.nombre === nombre; });
        if (canal) {
            console.log("Detalle del canal ".concat(canal.nombre, ":"));
            console.log(canal.detalle);
        }
        else {
            console.log("No se encontr\u00F3 el canal ".concat(nombre, "."));
        }
    };
    StreamingService.prototype.mostrarListadoStreamers = function () {
        console.log("Listado de streamers:");
        this.streamers.forEach(function (streamer) {
            console.log("".concat(streamer.nombre, " - ").concat(streamer.detalle));
        });
    };
    StreamingService.prototype.mostrarDetalleStreamer = function (nombre) {
        var streamer = this.streamers.find(function (streamer) { return streamer.nombre === nombre; });
        if (streamer) {
            console.log("Detalle del streamer ".concat(streamer.nombre, ":"));
            console.log(streamer.detalle);
        }
        else {
            console.log("No se encontr\u00F3 el streamer ".concat(nombre, "."));
        }
    };
    StreamingService.prototype.mostrarListadoStreams = function () {
        console.log("Listado de streams:");
        this.streams.forEach(function (stream) {
            console.log("".concat(stream.nombre, " - ").concat(stream.detalle));
        });
    };
    StreamingService.prototype.mostrarDetalleStream = function (nombre) {
        var stream = this.streams.find(function (stream) { return stream.nombre === nombre; });
        if (stream) {
            console.log("Detalle del stream ".concat(stream.nombre, ":"));
            console.log(stream.detalle);
        }
        else {
            console.log("No se encontr\u00F3 el stream ".concat(nombre, "."));
        }
    };
    // Métodos de agregación
    StreamingService.prototype.agregarPlataforma = function (nombre, detalle) {
        var plataforma = new Plataforma(nombre, detalle);
        this.plataformas.push(plataforma);
        console.log("Se agreg\u00F3 la plataforma ".concat(plataforma.nombre, "."));
    };
    StreamingService.prototype.agregarCanal = function (nombre, detalle) {
        var canal = new Canal(nombre, detalle);
        this.canales.push(canal);
        console.log("Se agreg\u00F3 el canal ".concat(canal.nombre, "."));
    };
    StreamingService.prototype.agregarStreamer = function (nombre, detalle) {
        var streamer = new Streamer(nombre, detalle);
        this.streamers.push(streamer);
        console.log("Se agreg\u00F3 el streamer ".concat(streamer.nombre, "."));
    };
    StreamingService.prototype.agregarStream = function (nombre, detalle) {
        var stream = new Stream(nombre, detalle);
        this.streams.push(stream);
        console.log("Se agreg\u00F3 el stream ".concat(stream.nombre, "."));
    };
    StreamingService.prototype.agregarCanalAStreamer = function (streamerNombre, canalNombre) {
        var streamer = this.streamers.find(function (streamer) { return streamer.nombre === streamerNombre; });
        var canal = this.canales.find(function (canal) { return canal.nombre === canalNombre; });
        if (streamer && canal) {
            // Agregar canal al streamer
            console.log("Se agreg\u00F3 el canal ".concat(canal.nombre, " al streamer ").concat(streamer.nombre, "."));
        }
        else {
            console.log("No se encontr\u00F3 el streamer ".concat(streamerNombre, " o el canal ").concat(canalNombre, "."));
        }
    };
    StreamingService.prototype.agregarStreamAStreamer = function (streamerNombre, streamNombre) {
        var streamer = this.streamers.find(function (streamer) { return streamer.nombre === streamerNombre; });
        var stream = this.streams.find(function (stream) { return stream.nombre === streamNombre; });
        if (streamer && stream) {
            // Agregar stream al streamer
            console.log("Se agreg\u00F3 el stream ".concat(stream.nombre, " al streamer ").concat(streamer.nombre, "."));
        }
        else {
            console.log("No se encontr\u00F3 el streamer ".concat(streamerNombre, " o el stream ").concat(streamNombre, "."));
        }
    };
    return StreamingService;
}());
// Uso de la clase StreamingService
var streamingService = new StreamingService();
// Agregar plataformas
streamingService.agregarPlataforma("Twitch", "Plataforma de streaming en vivo");
streamingService.agregarPlataforma("YouTube", "Plataforma de videos en línea");
// Agregar canales
streamingService.agregarCanal("Canal 1", "Canal de prueba 1");
streamingService.agregarCanal("Canal 2", "Canal de prueba 2");
// Agregar streamers
streamingService.agregarStreamer("Streamer 1", "Streamer de prueba 1");
streamingService.agregarStreamer("Streamer 2", "Streamer de prueba 2");
// Agregar streams
streamingService.agregarStream("Stream 1", "Stream de prueba 1");
streamingService.agregarStream("Stream 2", "Stream de prueba 2");
// Agregar canal a streamer
streamingService.agregarCanalAStreamer("Streamer 1", "Canal 1");
// Agregar stream a streamer
streamingService.agregarStreamAStreamer("Streamer 2", "Stream 2");
// Mostrar listados y detalles
streamingService.mostrarListadoPlataformas();
streamingService.mostrarDetallePlataforma("Twitch");
streamingService.mostrarListadoCanales();
streamingService.mostrarDetalleCanal("Canal 1");
streamingService.mostrarListadoStreamers();
streamingService.mostrarDetalleStreamer("Streamer 2");
streamingService.mostrarListadoStreams();
streamingService.mostrarDetalleStream("Stream 1");
