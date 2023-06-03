class Plataforma:
    def __init__(self, nombre, detalle):
        self.nombre = nombre
        self.detalle = detalle

class Canal:
    def __init__(self, nombre, detalle):
        self.nombre = nombre
        self.detalle = detalle

class Streamer:
    def __init__(self, nombre, detalle):
        self.nombre = nombre
        self.detalle = detalle

class Stream:
    def __init__(self, nombre, detalle):
        self.nombre = nombre
        self.detalle = detalle

class Repositorio:
    def __init__(self):
        self.plataformas = []
        self.canales = []
        self.streamers = []
        self.streams = []

    def mostrar_listado_plataformas(self):
        for plataforma in self.plataformas:
            print(f"Nombre: {plataforma.nombre}")
            print(f"Detalle: {plataforma.detalle}")
            print()

    def mostrar_detalle_plataforma(self, nombre_plataforma):
        for plataforma in self.plataformas:
            if plataforma.nombre == nombre_plataforma:
                print(f"Nombre: {plataforma.nombre}")
                print(f"Detalle: {plataforma.detalle}")
                print()
                return
        print(f"No se encontró la plataforma con el nombre: {nombre_plataforma}")

    def mostrar_listado_canales(self):
        for canal in self.canales:
            print(f"Nombre: {canal.nombre}")
            print(f"Detalle: {canal.detalle}")
            print()

    def mostrar_detalle_canal(self, nombre_canal):
        for canal in self.canales:
            if canal.nombre == nombre_canal:
                print(f"Nombre: {canal.nombre}")
                print(f"Detalle: {canal.detalle}")
                print()
                return
        print(f"No se encontró el canal con el nombre: {nombre_canal}")

    def mostrar_listado_streamers(self):
        for streamer in self.streamers:
            print(f"Nombre: {streamer.nombre}")
            print(f"Detalle: {streamer.detalle}")
            print()

    def mostrar_detalle_streamer(self, nombre_streamer):
        for streamer in self.streamers:
            if streamer.nombre == nombre_streamer:
                print(f"Nombre: {streamer.nombre}")
                print(f"Detalle: {streamer.detalle}")
                print()
                return
        print(f"No se encontró el streamer con el nombre: {nombre_streamer}")

    def mostrar_listado_streams(self):
        for stream in self.streams:
            print(f"Nombre: {stream.nombre}")
            print(f"Detalle: {stream.detalle}")
            print()

    def mostrar_detalle_stream(self, nombre_stream):
        for stream in self.streams:
            if stream.nombre == nombre_stream:
                print(f"Nombre: {stream.nombre}")
                print(f"Detalle: {stream.detalle}")
                print()
                return
        print(f"No se encontró el stream con el nombre: {nombre_stream}")

    def agregar_plataforma(self, plataforma):
        self.plataformas.append(plataforma)

    def agregar_canal(self, canal):
        self.canales.append(canal)

    def agregar_streamer(self, streamer):
        self.streamers.append(streamer)

    def agregar_stream(self, stream):
        self.streams.append(stream)

    def agregar_canal_a_streamer(self, nombre_canal, nombre_streamer):
        canal_encontrado = None
        for canal in self.canales:
            if canal.nombre == nombre_canal:
                canal_encontrado = canal
                break

        streamer_encontrado = None
        for streamer in self.streamers:
            if streamer.nombre == nombre_streamer:
                streamer_encontrado = streamer
                break

        if canal_encontrado and streamer_encontrado:
            streamer_encontrado.canales.append(canal_encontrado)
            print(f"Se agregó el canal {nombre_canal} al streamer {nombre_streamer}")
        else:
            print(f"No se pudo agregar el canal {nombre_canal} al streamer {nombre_streamer}")

    def agregar_stream_a_streamer(self, nombre_stream, nombre_streamer):
        stream_encontrado = None
        for stream in self.streams:
            if stream.nombre == nombre_stream:
                stream_encontrado = stream
                break

        streamer_encontrado = None
        for streamer in self.streamers:
            if streamer.nombre == nombre_streamer:
                streamer_encontrado = streamer
                break

        if stream_encontrado and streamer_encontrado:
            streamer_encontrado.streams.append(stream_encontrado)
            print(f"Se agregó el stream {nombre_stream} al streamer {nombre_streamer}")
        else:
            print(f"No se pudo agregar el stream {nombre_stream} al streamer {nombre_streamer}")

# Ejemplo de uso
repositorio = Repositorio()

# Agregar plataformas
repositorio.agregar_plataforma(Plataforma("Twitch", "Plataforma de streaming en vivo"))
repositorio.agregar_plataforma(Plataforma("YouTube", "Plataforma de videos en streaming"))

# Agregar canales
repositorio.agregar_canal(Canal("Canal 1", "Descripción del canal 1"))
repositorio.agregar_canal(Canal("Canal 2", "Descripción del canal 2"))

# Agregar streamers
repositorio.agregar_streamer(Streamer("Streamer 1", "Descripción del streamer 1"))
repositorio.agregar_streamer(Streamer("Streamer 2", "Descripción del streamer 2"))

# Agregar streams
repositorio.agregar_stream(Stream("Stream 1", "Descripción del stream 1"))
repositorio.agregar_stream(Stream("Stream 2", "Descripción del stream 2"))

# Agregar canal a un streamer
repositorio.agregar_canal_a_streamer("Canal 1", "Streamer 1")

# Agregar stream a un streamer
repositorio.agregar_stream_a_streamer("Stream 2", "Streamer 2")

# Mostrar listado de plataformas
repositorio.mostrar_listado_plataformas()

# Mostrar detalle de una plataforma
repositorio.mostrar_detalle_plataforma("Twitch")

# Mostrar listado de canales
repositorio.mostrar_listado_canales()

# Mostrar detalle de un canal
repositorio.mostrar_detalle_canal("Canal 1")

# Mostrar listado de streamers
repositorio.mostrar_listado_streamers()

# Mostrar detalle de un streamer
repositorio.mostrar_detalle_streamer("Streamer 1")

# Mostrar listado de streams
repositorio.mostrar_listado_streams()

# Mostrar detalle de un stream
repositorio.mostrar_detalle_stream("Stream 2")

