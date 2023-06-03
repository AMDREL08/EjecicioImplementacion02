class Plataforma {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  class Canal {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  class Streamer {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  class Steam {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  // Clase principal que contiene la lógica
  
  class StreamingService {
    plataformas: Plataforma[] = [];
    canales: Canal[] = [];
    streamers: Streamer[] = [];
    streams: Stream[] = [];
  
    // Métodos de visualización
  
    mostrarListadoPlataformas(): void {
      console.log("Listado de plataformas:");
      this.plataformas.forEach((plataforma) => {
        console.log(`${plataforma.nombre} - ${plataforma.detalle}`);
      });
    }
  
    mostrarDetallePlataforma(nombre: string): void {
      const plataforma = this.plataformas.find(
        (plataforma) => plataforma.nombre === nombre
      );
      if (plataforma) {
        console.log(`Detalle de la plataforma ${plataforma.nombre}:`);
        console.log(plataforma.detalle);
      } else {
        console.log(`No se encontró la plataforma ${nombre}.`);
      }
    }
  
    mostrarListadoCanales(): void {
      console.log("Listado de canales:");
      this.canales.forEach((canal) => {
        console.log(`${canal.nombre} - ${canal.detalle}`);
      });
    }
  
    mostrarDetalleCanal(nombre: string): void {
      const canal = this.canales.find((canal) => canal.nombre === nombre);
      if (canal) {
        console.log(`Detalle del canal ${canal.nombre}:`);
        console.log(canal.detalle);
      } else {
        console.log(`No se encontró el canal ${nombre}.`);
      }
    }
  
    mostrarListadoStreamers(): void {
      console.log("Listado de streamers:");
      this.streamers.forEach((streamer) => {
        console.log(`${streamer.nombre} - ${streamer.detalle}`);
      });
    }
  
    mostrarDetalleStreamer(nombre: string): void {
      const streamer = this.streamers.find((streamer) => streamer.nombre === nombre);
      if (streamer) {
        console.log(`Detalle del streamer ${streamer.nombre}:`);
        console.log(streamer.detalle);
      } else {
        console.log(`No se encontró el streamer ${nombre}.`);
      }
    }
  
    mostrarListadoStreams(): void {
      console.log("Listado de streams:");
      this.streams.forEach((stream) => {
        console.log(`${stream.nombre} - ${stream.detalle}`);
      });
    }
  
    mostrarDetalleStream(nombre: string): void {
      const stream = this.streams.find((stream) => stream.nombre === nombre);
      if (stream) {
        console.log(`Detalle del stream ${stream.nombre}:`);
        console.log(stream.detalle);
      } else {
        console.log(`No se encontró el stream ${nombre}.`);
      }
    }
  
    // Métodos de agregación
  
    agregarPlataforma(nombre: string, detalle: string): void {
      const plataforma = new Plataforma(nombre, detalle);
      this.plataformas.push(plataforma);
      console.log(`Se agregó la plataforma ${plataforma.nombre}.`);
    }
  
    agregarCanal(nombre: string, detalle: string): void {
      const canal = new Canal(nombre, detalle);
      this.canales.push(canal);
      console.log(`Se agregó el canal ${canal.nombre}.`);
    }
  
    agregarStreamer(nombre: string, detalle: string): void {
      const streamer = new Streamer(nombre, detalle);
      this.streamers.push(streamer);
      console.log(`Se agregó el streamer ${streamer.nombre}.`);
    }
  
    agregarStream(nombre: string, detalle: string): void {
      const stream = new Stream(nombre, detalle);
      this.streams.push(stream);
      console.log(`Se agregó el stream ${stream.nombre}.`);
    }
  
    agregarCanalAStreamer(streamerNombre: string, canalNombre: string): void {
      const streamer = this.streamers.find(
        (streamer) => streamer.nombre === streamerNombre
      );
      const canal = this.canales.find((canal) => canal.nombre === canalNombre);
      if (streamer && canal) {
        // Agregar canal al streamer
        console.log(
          `Se agregó el canal ${canal.nombre} al streamer ${streamer.nombre}.`
        );
      } else {
        console.log(
          `No se encontró el streamer ${streamerNombre} o el canal ${canalNombre}.`
        );
      }
    }
  
    agregarStreamAStreamer(streamerNombre: string, streamNombre: string): void {
      const streamer = this.streamers.find(
        (streamer) => streamer.nombre === streamerNombre
      );
      const stream = this.streams.find((stream) => stream.nombre === streamNombre);
      if (streamer && stream) {
        // Agregar stream al streamer
        console.log(
          `Se agregó el stream ${stream.nombre} al streamer ${streamer.nombre}.`
        );
      } else {
        console.log(
          `No se encontró el streamer ${streamerNombre} o el stream ${streamNombre}.`
        );
      }
    }
  }
  
  // Uso de la clase StreamingService
  
  const StreamingService = new StreamingService();
  
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

 

  class Plataforma {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  class Canal {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  class Streamer {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  class Steam {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  // Clase principal que contiene la lógica
  
  class StreamingService {
    plataformas: Plataforma[] = [];
    canales: Canal[] = [];
    streamers: Streamer[] = [];
    streams: Stream[] = [];
  
    // Métodos de visualización
  
    mostrarListadoPlataformas(): void {
      console.log("Listado de plataformas:");
      this.plataformas.forEach((plataforma) => {
        console.log(`${plataforma.nombre} - ${plataforma.detalle}`);
      });
    }
  
    mostrarDetallePlataforma(nombre: string): void {
      const plataforma = this.plataformas.find(
        (plataforma) => plataforma.nombre === nombre
      );
      if (plataforma) {
        console.log(`Detalle de la plataforma ${plataforma.nombre}:`);
        console.log(plataforma.detalle);
      } else {
        console.log(`No se encontró la plataforma ${nombre}.`);
      }
    }
  
    mostrarListadoCanales(): void {
      console.log("Listado de canales:");
      this.canales.forEach((canal) => {
        console.log(`${canal.nombre} - ${canal.detalle}`);
      });
    }
  
    mostrarDetalleCanal(nombre: string): void {
      const canal = this.canales.find((canal) => canal.nombre === nombre);
      if (canal) {
        console.log(`Detalle del canal ${canal.nombre}:`);
        console.log(canal.detalle);
      } else {
        console.log(`No se encontró el canal ${nombre}.`);
      }
    }
  
    mostrarListadoStreamers(): void {
      console.log("Listado de streamers:");
      this.streamers.forEach((streamer) => {
        console.log(`${streamer.nombre} - ${streamer.detalle}`);
      });
    }
  
    mostrarDetalleStreamer(nombre: string): void {
      const streamer = this.streamers.find((streamer) => streamer.nombre === nombre);
      if (streamer) {
        console.log(`Detalle del streamer ${streamer.nombre}:`);
        console.log(streamer.detalle);
      } else {
        console.log(`No se encontró el streamer ${nombre}.`);
      }
    }
  
    mostrarListadoStreams(): void {
      console.log("Listado de streams:");
      this.streams.forEach((stream) => {
        console.log(`${stream.nombre} - ${stream.detalle}`);
      });
    }
  
    mostrarDetalleStream(nombre: string): void {
      const stream = this.streams.find((stream) => stream.nombre === nombre);
      if (stream) {
        console.log(`Detalle del stream ${stream.nombre}:`);
        console.log(stream.detalle);
      } else {
        console.log(`No se encontró el stream ${nombre}.`);
      }
    }
  
    // Métodos de agregación
  
    agregarPlataforma(nombre: string, detalle: string): void {
      const plataforma = new Plataforma(nombre, detalle);
      this.plataformas.push(plataforma);
      console.log(`Se agregó la plataforma ${plataforma.nombre}.`);
    }
  
    agregarCanal(nombre: string, detalle: string): void {
      const canal = new Canal(nombre, detalle);
      this.canales.push(canal);
      console.log(`Se agregó el canal ${canal.nombre}.`);
    }
  
    agregarStreamer(nombre: string, detalle: string): void {
      const streamer = new Streamer(nombre, detalle);
      this.streamers.push(streamer);
      console.log(`Se agregó el streamer ${streamer.nombre}.`);
    }
  
    agregarStream(nombre: string, detalle: string): void {
      const stream = new Stream(nombre, detalle);
      this.streams.push(stream);
      console.log(`Se agregó el stream ${stream.nombre}.`);
    }
  
    agregarCanalAStreamer(streamerNombre: string, canalNombre: string): void {
      const streamer = this.streamers.find(
        (streamer) => streamer.nombre === streamerNombre
      );
      const canal = this.canales.find((canal) => canal.nombre === canalNombre);
      if (streamer && canal) {
        // Agregar canal al streamer
        console.log(
          `Se agregó el canal ${canal.nombre} al streamer ${streamer.nombre}.`
        );
      } else {
        console.log(
          `No se encontró el streamer ${streamerNombre} o el canal ${canalNombre}.`
        );
      }
    }
  
    agregarStreamAStreamer(streamerNombre: string, streamNombre: string): void {
      const streamer = this.streamers.find(
        (streamer) => streamer.nombre === streamerNombre
      );
      const stream = this.streams.find((stream) => stream.nombre === streamNombre);
      if (streamer && stream) {
        // Agregar stream al streamer
        console.log(
          `Se agregó el stream ${stream.nombre} al streamer ${streamer.nombre}.`
        );
      } else {
        console.log(
          `No se encontró el streamer ${streamerNombre} o el stream ${streamNombre}.`
        );
      }
    }
  }
  
  // Uso de la clase StreamingService
  
  const StreamingService = new StreamingService();
  
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



  class Plataforma {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  class Canal {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  class Streamer {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  class Steam {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  // Clase principal que contiene la lógica
  
  class StreamingService {
    plataformas: Plataforma[] = [];
    canales: Canal[] = [];
    streamers: Streamer[] = [];
    streams: Stream[] = [];
  
    // Métodos de visualización
  
    mostrarListadoPlataformas(): void {
      console.log("Listado de plataformas:");
      this.plataformas.forEach((plataforma) => {
        console.log(`${plataforma.nombre} - ${plataforma.detalle}`);
      });
    }
  
    mostrarDetallePlataforma(nombre: string): void {
      const plataforma = this.plataformas.find(
        (plataforma) => plataforma.nombre === nombre
      );
      if (plataforma) {
        console.log(`Detalle de la plataforma ${plataforma.nombre}:`);
        console.log(plataforma.detalle);
      } else {
        console.log(`No se encontró la plataforma ${nombre}.`);
      }
    }
  
    mostrarListadoCanales(): void {
      console.log("Listado de canales:");
      this.canales.forEach((canal) => {
        console.log(`${canal.nombre} - ${canal.detalle}`);
      });
    }
  
    mostrarDetalleCanal(nombre: string): void {
      const canal = this.canales.find((canal) => canal.nombre === nombre);
      if (canal) {
        console.log(`Detalle del canal ${canal.nombre}:`);
        console.log(canal.detalle);
      } else {
        console.log(`No se encontró el canal ${nombre}.`);
      }
    }
  
    mostrarListadoStreamers(): void {
      console.log("Listado de streamers:");
      this.streamers.forEach((streamer) => {
        console.log(`${streamer.nombre} - ${streamer.detalle}`);
      });
    }
  
    mostrarDetalleStreamer(nombre: string): void {
      const streamer = this.streamers.find((streamer) => streamer.nombre === nombre);
      if (streamer) {
        console.log(`Detalle del streamer ${streamer.nombre}:`);
        console.log(streamer.detalle);
      } else {
        console.log(`No se encontró el streamer ${nombre}.`);
      }
    }
  
    mostrarListadoStreams(): void {
      console.log("Listado de streams:");
      this.streams.forEach((stream) => {
        console.log(`${stream.nombre} - ${stream.detalle}`);
      });
    }
  
    mostrarDetalleStream(nombre: string): void {
      const stream = this.streams.find((stream) => stream.nombre === nombre);
      if (stream) {
        console.log(`Detalle del stream ${stream.nombre}:`);
        console.log(stream.detalle);
      } else {
        console.log(`No se encontró el stream ${nombre}.`);
      }
    }
  
    // Métodos de agregación
  
    agregarPlataforma(nombre: string, detalle: string): void {
      const plataforma = new Plataforma(nombre, detalle);
      this.plataformas.push(plataforma);
      console.log(`Se agregó la plataforma ${plataforma.nombre}.`);
    }
  
    agregarCanal(nombre: string, detalle: string): void {
      const canal = new Canal(nombre, detalle);
      this.canales.push(canal);
      console.log(`Se agregó el canal ${canal.nombre}.`);
    }
  
    agregarStreamer(nombre: string, detalle: string): void {
      const streamer = new Streamer(nombre, detalle);
      this.streamers.push(streamer);
      console.log(`Se agregó el streamer ${streamer.nombre}.`);
    }
  
    agregarStream(nombre: string, detalle: string): void {
      const stream = new Stream(nombre, detalle);
      this.streams.push(stream);
      console.log(`Se agregó el stream ${stream.nombre}.`);
    }
  
    agregarCanalAStreamer(streamerNombre: string, canalNombre: string): void {
      const streamer = this.streamers.find(
        (streamer) => streamer.nombre === streamerNombre
      );
      const canal = this.canales.find((canal) => canal.nombre === canalNombre);
      if (streamer && canal) {
        // Agregar canal al streamer
        console.log(
          `Se agregó el canal ${canal.nombre} al streamer ${streamer.nombre}.`
        );
      } else {
        console.log(
          `No se encontró el streamer ${streamerNombre} o el canal ${canalNombre}.`
        );
      }
    }
  
    agregarStreamAStreamer(streamerNombre: string, streamNombre: string): void {
      const streamer = this.streamers.find(
        (streamer) => streamer.nombre === streamerNombre
      );
      const stream = this.streams.find((stream) => stream.nombre === streamNombre);
      if (streamer && stream) {
        // Agregar stream al streamer
        console.log(
          `Se agregó el stream ${stream.nombre} al streamer ${streamer.nombre}.`
        );
      } else {
        console.log(
          `No se encontró el streamer ${streamerNombre} o el stream ${streamNombre}.`
        );
      }
    }
  }
  
  // Uso de la clase StreamingService
  
  const StreamingService = new StreamingService();
  
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



  class Plataforma {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  class Canal {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  class Streamer {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  class Steam {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  // Clase principal que contiene la lógica
  
  class StreamingService {
    plataformas: Plataforma[] = [];
    canales: Canal[] = [];
    streamers: Streamer[] = [];
    streams: Stream[] = [];
  
    // Métodos de visualización
  
    mostrarListadoPlataformas(): void {
      console.log("Listado de plataformas:");
      this.plataformas.forEach((plataforma) => {
        console.log(`${plataforma.nombre} - ${plataforma.detalle}`);
      });
    }
  
    mostrarDetallePlataforma(nombre: string): void {
      const plataforma = this.plataformas.find(
        (plataforma) => plataforma.nombre === nombre
      );
      if (plataforma) {
        console.log(`Detalle de la plataforma ${plataforma.nombre}:`);
        console.log(plataforma.detalle);
      } else {
        console.log(`No se encontró la plataforma ${nombre}.`);
      }
    }
  
    mostrarListadoCanales(): void {
      console.log("Listado de canales:");
      this.canales.forEach((canal) => {
        console.log(`${canal.nombre} - ${canal.detalle}`);
      });
    }
  
    mostrarDetalleCanal(nombre: string): void {
      const canal = this.canales.find((canal) => canal.nombre === nombre);
      if (canal) {
        console.log(`Detalle del canal ${canal.nombre}:`);
        console.log(canal.detalle);
      } else {
        console.log(`No se encontró el canal ${nombre}.`);
      }
    }
  
    mostrarListadoStreamers(): void {
      console.log("Listado de streamers:");
      this.streamers.forEach((streamer) => {
        console.log(`${streamer.nombre} - ${streamer.detalle}`);
      });
    }
  
    mostrarDetalleStreamer(nombre: string): void {
      const streamer = this.streamers.find((streamer) => streamer.nombre === nombre);
      if (streamer) {
        console.log(`Detalle del streamer ${streamer.nombre}:`);
        console.log(streamer.detalle);
      } else {
        console.log(`No se encontró el streamer ${nombre}.`);
      }
    }
  
    mostrarListadoStreams(): void {
      console.log("Listado de streams:");
      this.streams.forEach((stream) => {
        console.log(`${stream.nombre} - ${stream.detalle}`);
      });
    }
  
    mostrarDetalleStream(nombre: string): void {
      const stream = this.streams.find((stream) => stream.nombre === nombre);
      if (stream) {
        console.log(`Detalle del stream ${stream.nombre}:`);
        console.log(stream.detalle);
      } else {
        console.log(`No se encontró el stream ${nombre}.`);
      }
    }
  
    // Métodos de agregación
  
    agregarPlataforma(nombre: string, detalle: string): void {
      const plataforma = new Plataforma(nombre, detalle);
      this.plataformas.push(plataforma);
      console.log(`Se agregó la plataforma ${plataforma.nombre}.`);
    }
  
    agregarCanal(nombre: string, detalle: string): void {
      const canal = new Canal(nombre, detalle);
      this.canales.push(canal);
      console.log(`Se agregó el canal ${canal.nombre}.`);
    }
  
    agregarStreamer(nombre: string, detalle: string): void {
      const streamer = new Streamer(nombre, detalle);
      this.streamers.push(streamer);
      console.log(`Se agregó el streamer ${streamer.nombre}.`);
    }
  
    agregarStream(nombre: string, detalle: string): void {
      const stream = new Stream(nombre, detalle);
      this.streams.push(stream);
      console.log(`Se agregó el stream ${stream.nombre}.`);
    }
  
    agregarCanalAStreamer(streamerNombre: string, canalNombre: string): void {
      const streamer = this.streamers.find(
        (streamer) => streamer.nombre === streamerNombre
      );
      const canal = this.canales.find((canal) => canal.nombre === canalNombre);
      if (streamer && canal) {
        // Agregar canal al streamer
        console.log(
          `Se agregó el canal ${canal.nombre} al streamer ${streamer.nombre}.`
        );
      } else {
        console.log(
          `No se encontró el streamer ${streamerNombre} o el canal ${canalNombre}.`
        );
      }
    }
  
    agregarStreamAStreamer(streamerNombre: string, streamNombre: string): void {
      const streamer = this.streamers.find(
        (streamer) => streamer.nombre === streamerNombre
      );
      const stream = this.streams.find((stream) => stream.nombre === streamNombre);
      if (streamer && stream) {
        // Agregar stream al streamer
        console.log(
          `Se agregó el stream ${stream.nombre} al streamer ${streamer.nombre}.`
        );
      } else {
        console.log(
          `No se encontró el streamer ${streamerNombre} o el stream ${streamNombre}.`
        );
      }
    }
  }
  
  // Uso de la clase StreamingService
  
  const StreamingService = new StreamingService();
  
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



  class Plataforma {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  class Canal {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  class Streamer {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  class Steam {
    constructor(public nombre: string, public detalle: string) {}
  }
  
  // Clase principal que contiene la lógica
  
  class StreamingService {
    plataformas: Plataforma[] = [];
    canales: Canal[] = [];
    streamers: Streamer[] = [];
    streams: Stream[] = [];
  
    // Métodos de visualización
  
    mostrarListadoPlataformas(): void {
      console.log("Listado de plataformas:");
      this.plataformas.forEach((plataforma) => {
        console.log(`${plataforma.nombre} - ${plataforma.detalle}`);
      });
    }
  
    mostrarDetallePlataforma(nombre: string): void {
      const plataforma = this.plataformas.find(
        (plataforma) => plataforma.nombre === nombre
      );
      if (plataforma) {
        console.log(`Detalle de la plataforma ${plataforma.nombre}:`);
        console.log(plataforma.detalle);
      } else {
        console.log(`No se encontró la plataforma ${nombre}.`);
      }
    }
  
    mostrarListadoCanales(): void {
      console.log("Listado de canales:");
      this.canales.forEach((canal) => {
        console.log(`${canal.nombre} - ${canal.detalle}`);
      });
    }
  
    mostrarDetalleCanal(nombre: string): void {
      const canal = this.canales.find((canal) => canal.nombre === nombre);
      if (canal) {
        console.log(`Detalle del canal ${canal.nombre}:`);
        console.log(canal.detalle);
      } else {
        console.log(`No se encontró el canal ${nombre}.`);
      }
    }
  
    mostrarListadoStreamers(): void {
      console.log("Listado de streamers:");
      this.streamers.forEach((streamer) => {
        console.log(`${streamer.nombre} - ${streamer.detalle}`);
      });
    }
  
    mostrarDetalleStreamer(nombre: string): void {
      const streamer = this.streamers.find((streamer) => streamer.nombre === nombre);
      if (streamer) {
        console.log(`Detalle del streamer ${streamer.nombre}:`);
        console.log(streamer.detalle);
      } else {
        console.log(`No se encontró el streamer ${nombre}.`);
      }
    }
  
    mostrarListadoStreams(): void {
      console.log("Listado de streams:");
      this.streams.forEach((stream) => {
        console.log(`${stream.nombre} - ${stream.detalle}`);
      });
    }
  
    mostrarDetalleStream(nombre: string): void {
      const stream = this.streams.find((stream) => stream.nombre === nombre);
      if (stream) {
        console.log(`Detalle del stream ${stream.nombre}:`);
        console.log(stream.detalle);
      } else {
        console.log(`No se encontró el stream ${nombre}.`);
      }
    }
  
    // Métodos de agregación
  
    agregarPlataforma(nombre: string, detalle: string): void {
      const plataforma = new Plataforma(nombre, detalle);
      this.plataformas.push(plataforma);
      console.log(`Se agregó la plataforma ${plataforma.nombre}.`);
    }
  
    agregarCanal(nombre: string, detalle: string): void {
      const canal = new Canal(nombre, detalle);
      this.canales.push(canal);
      console.log(`Se agregó el canal ${canal.nombre}.`);
    }
  
    agregarStreamer(nombre: string, detalle: string): void {
      const streamer = new Streamer(nombre, detalle);
      this.streamers.push(streamer);
      console.log(`Se agregó el streamer ${streamer.nombre}.`);
    }
  
    agregarStream(nombre: string, detalle: string): void {
      const stream = new Stream(nombre, detalle);
      this.streams.push(stream);
      console.log(`Se agregó el stream ${stream.nombre}.`);
    }
  
    agregarCanalAStreamer(streamerNombre: string, canalNombre: string): void {
      const streamer = this.streamers.find(
        (streamer) => streamer.nombre === streamerNombre
      );
      const canal = this.canales.find((canal) => canal.nombre === canalNombre);
      if (streamer && canal) {
        // Agregar canal al streamer
        console.log(
          `Se agregó el canal ${canal.nombre} al streamer ${streamer.nombre}.`
        );
      } else {
        console.log(
          `No se encontró el streamer ${streamerNombre} o el canal ${canalNombre}.`
        );
      }
    }
  
    agregarStreamAStreamer(streamerNombre: string, streamNombre: string): void {
      const streamer = this.streamers.find(
        (streamer) => streamer.nombre === streamerNombre
      );
      const stream = this.streams.find((stream) => stream.nombre === streamNombre);
      if (streamer && stream) {
        // Agregar stream al streamer
        console.log(
          `Se agregó el stream ${stream.nombre} al streamer ${streamer.nombre}.`
        );
      } else {
        console.log(
          `No se encontró el streamer ${streamerNombre} o el stream ${streamNombre}.`
        );
      }
    }
  }
  
  // Uso de la clase StreamingService
  
  const StreamingService = new StreamingService();
  
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
