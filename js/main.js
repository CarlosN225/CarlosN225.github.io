/* =========================================================
   Portafolio · Carlos Núñez Durán
   Todo el contenido editable está en los arreglos de abajo.
   ========================================================= */
{
  /* ---------- 1. TUS DATOS (edita aquí) ---------- */
  const GITHUB = "https://github.com/CarlosN225";
  const IMG = "images/proyectos/";   // carpeta de las capturas

  const PERFIL = {
    edad: "21 años",                  // ej. "23 años" → si está vacío no se muestra
    lugar: "Nicolás Romero, Edomex"
  };

  const CONTACTO = {
    correo:   "ncarlosc13@gmail.com",
    whatsapp: "525533940285",         // 52 + número, sin espacios
    linkedin: "https://www.linkedin.com/in/carlos-nu%C3%B1ez-dur%C3%A1n-641147406/",
    facebook: "https://www.facebook.com/carlos.nunezduran.3/",
    github:   GITHUB
  };

  const RASGOS = ["Autodidacta", "Resolutivo", "Versátil", "Resiliente", "Comprometido"];

  /*  Cada proyecto:
      - imagenes: capturas dentro de images/proyectos/. La primera es la portada.
        Si el archivo todavía no existe, sale una portada azul clarito con el ícono.
      - repo: nombre del repositorio en tu GitHub (null = el botón lleva a tu perfil).
      - sitio / extra: botones opcionales (página publicada, video, etc.).            */
  const PROYECTOS = [
    {
      id: "inventia", nombre: "Inventia", tipo: "Escritorio", fecha: "2026", icono: "box",
      rol: "Coordinador · Frontend y UI/UX",
      resumen: "Inventario para dulcerías que funciona sin internet",
      descripcion: "Aplicación de escritorio para que las dulcerías dejen la libreta: controla entradas, salidas, ventas tipo ticket, compras, promociones y caducidades, y avisa por correo cuando algo se está acabando.",
      puntos: [
        "Funciona 100% local con SQLite y se instala como .exe",
        "Coordiné a un equipo de 7 con Kanban, ramas y Pull Requests",
        "Prueba piloto en dulcerías reales, con contratos firmados"
      ],
      stack: ["React", "Bootstrap", "Python", "pywebview", "SQLite", "PyInstaller"],
      imagenes: ["inventia-1.jpg", "inventia-2.jpg", "inventia-3.jpg", "inventia-4.jpg", "inventia-5.jpg", "inventia-6.jpg", "inventia-7.jpg", "inventia-8.jpg", "inventia-9.jpg", "inventia-10.jpg", "inventia-11.jpg", "inventia-12.jpg", "inventia-13.jpg", "inventia-14.jpg", "inventia-15.jpg", "inventia-16.jpg"], repo: "Inventia-App-Escritorio"
    },
    {
      id: "la-cruderia", nombre: "La Crudería", tipo: "Web", fecha: "May – ago 2025", icono: "utensils",
      rol: "Estadía profesional · Cliente externo",
      resumen: "Sitio oficial de un restaurante y salón de eventos",
      descripcion: "Sitio web oficial de un restaurante buffet y salón de eventos, hecho desde cero: análisis de requerimientos, diseño, desarrollo, pruebas y entrega al cliente.",
      puntos: [
        "Formulario de cotización conectado a base de datos",
        "Mapa interactivo, chat en vivo y botón de WhatsApp Business",
        "Diseño responsivo; trabajo en dupla con Kanban"
      ],
      stack: ["Wix", "HTML", "CSS", "JavaScript"],
      imagenes: ["la-cruderia-1.jpg", "la-cruderia-2.jpg", "la-cruderia-3.jpg", "la-cruderia-4.jpg"], repo: null
    },
    {
      id: "food-express", nombre: "Food Express", tipo: "Móvil", fecha: "2026", icono: "bike",
      rol: "Desarrollo full stack · Equipo Scrum",
      resumen: "Delivery con el repartidor en vivo en el mapa",
      descripcion: "App de comida a domicilio para Nicolás Romero: el cliente pide, paga y sigue a su repartidor en tiempo real; el repartidor puede llevar varios pedidos en una sola ruta.",
      puntos: [
        "Seguimiento en vivo con Google Maps y Routes API",
        "Entregas simultáneas con varias paradas en ruta",
        "Cifrado AES de datos sensibles y recuperación de contraseña con Firebase"
      ],
      stack: ["Flutter", "Dart", "FastAPI", "MySQL", "Google Maps", "Firebase"],
      imagenes: ["food-express-1.jpg", "food-express-2.jpg", "food-express-3.jpg", "food-express-4.jpg", "food-express-5.jpg"], repo: "App-Delivery-Food-Express"
    },
    {
      id: "aurum-beauty", nombre: "Aurum Beauty", tipo: "Web", fecha: "Oct 2024", icono: "sparkle",
      rol: "Freelance en dupla",
      resumen: "Tienda en línea de maquillaje y belleza",
      descripcion: "Tienda en línea de cosméticos programada desde cero, sin frameworks: catálogo, carrito de compras, nosotros, contacto y preguntas frecuentes.",
      puntos: [
        "Hecha a mano con HTML, CSS y JavaScript",
        "Carrito de compras e inicio de sesión"
      ],
      stack: ["HTML", "CSS", "JavaScript"],
      imagenes: ["aurum-beauty-1.jpg", "aurum-beauty-2.jpg", "aurum-beauty-3.jpg", "aurum-beauty-4.jpg", "aurum-beauty-5.jpg", "aurum-beauty-6.jpg", "aurum-beauty-7.jpg", "aurum-beauty-8.jpg", "aurum-beauty-9.jpg", "aurum-beauty-10.jpg", "aurum-beauty-11.jpg"], repo: null
    },
    {
      id: "dogge-creew", nombre: "Dogge Creew", tipo: "IoT", fecha: "2024 – 2026", icono: "paw",
      rol: "Líder del proyecto · App y hardware",
      resumen: "Dispensador de croquetas para perritos de la calle",
      descripcion: "Dispensador de comida para perros en situación de calle, controlado desde una app Android por Bluetooth. Lo hicimos entre informática y mecatrónica, y después lo llevé de Arduino a ESP32 con celda de carga.",
      puntos: [
        "Participante y finalista de FECIEM 2026 en Sistemas Embebidos",
        "App con modo manual y automático, registro de perritos con foto y buscador de veterinarias",
        "Prototipo instalado en el campus de la UTFV"
      ],
      stack: ["Android Studio", "Java", "XML", "Arduino", "ESP32", "C/C++", "Firebase"],
      imagenes: ["dogge-creew-1.jpg", "dogge-creew-2.jpg", "dogge-creew-3.jpg", "dogge-creew-4.jpg", "dogge-creew-5.jpg", "dogge-creew-6.jpg", "dogge-creew-7.jpg", "dogge-creew-8.jpg", "dogge-creew-9.jpg", "dogge-creew-10.jpg", "dogge-creew-11.jpg", "dogge-creew-12.jpg", "dogge-creew-13.jpg", "dogge-creew-14.jpg"], repo: null,
      extra: { label: "Ver video", url: "https://youtu.be/Nv5vb6E6cjI", icono: "play" }
    },
    {
      id: "fila-pet", nombre: "Fila Pet", tipo: "Web", fecha: "2023", icono: "recycle",
      rol: "Sitio del proyecto · Bachillerato",
      resumen: "Hiladora que convierte botellas de PET en filamento",
      descripcion: "Sitio web de Fila Pet, una máquina automática que convierte botellas de PET en filamento. Muestra qué es, quiénes somos, el proceso de producción y tiene registro e inicio de sesión.",
      puntos: [
        "El proyecto ganó el 2.º lugar en la Expo Emprendimiento CECyTEM, categoría Ecológica",
        "Pasó a la Expo Estatal de Emprendimiento en Toluca"
      ],
      stack: ["HTML", "CSS", "JavaScript"],
      imagenes: ["fila-pet-1.jpg", "fila-pet-2.jpg", "fila-pet-3.jpg", "fila-pet-4.jpg", "fila-pet-5.jpg", "fila-pet-6.jpg", "fila-pet-7.jpg", "fila-pet-8.jpg", "fila-pet-9.jpg", "fila-pet-10.jpg"], repo: null
    },
    {
      id: "code-dragons", nombre: "Code Dragons 2026", tipo: "Web", fecha: "Mar – abr 2026", icono: "code",
      rol: "Concursante y desarrollador del sitio",
      resumen: "Concurso estatal de programación y su sitio oficial",
      descripcion: "Diseñé y programé el sitio oficial del concurso estatal de programación: convocatoria, cronograma, registro de equipos y premios. También competí en él.",
      puntos: [
        "5 problemas de algoritmia en 3 horas, en equipo de 3",
        "Aprendí Python por mi cuenta para competir"
      ],
      stack: ["HTML", "CSS", "JavaScript", "Python"],
      imagenes: ["code-dragons-1.jpg", "code-dragons-2.jpg", "code-dragons-3.jpg", "code-dragons-4.jpg", "code-dragons-5.jpg"], repo: null,
      sitio: "https://codedragons.site"
    },
    {
      id: "asistedragon", nombre: "AsisteDragon", tipo: "Móvil", fecha: "2026", icono: "scan",
      rol: "Desarrollo Android",
      resumen: "Lee tu horario en PDF y arma tu asistencia",
      descripcion: "App Android de asistencia universitaria que lee los horarios en PDF con el OCR de Mistral y los convierte en clases listas para registrar asistencia.",
      puntos: [
        "OCR en dos pasos, después de probar ML Kit y Gemini",
        "Llave de API protegida con local.properties y BuildConfig",
        "Integración continua con GitHub Actions: compila, prueba y genera el APK"
      ],
      stack: ["Java", "Android", "Firebase", "Mistral OCR", "CameraX", "GitHub Actions"],
      imagenes: ["asistedragon-1.jpg"], repo: "AsisteDragon"
    },
    {
      id: "monitor-ecg", nombre: "Monitor ECG", tipo: "IoT", fecha: "Mar 2026", icono: "pulse",
      rol: "Proyecto de innovación",
      resumen: "Señales del corazón en tiempo real",
      descripcion: "Sistema que muestra en tiempo real la señal del corazón (ECG) captada con Arduino y un sensor AD8232, y calcula métricas de variabilidad cardiaca en Python.",
      puntos: [
        "1.er lugar en Arduino Day School 2026, categoría Innovación",
        "Filtros Butterworth y detección de picos R",
        "Gráficas en vivo con PyQtGraph"
      ],
      stack: ["Arduino", "AD8232", "Python", "PyQtGraph", "NumPy", "SciPy"],
      imagenes: ["monitor-ecg-1.jpg", "monitor-ecg-2.jpg", "monitor-ecg-3.jpg", "monitor-ecg-4.jpg", "monitor-ecg-5.jpg", "monitor-ecg-6.jpg", "monitor-ecg-7.jpg"], repo: null
    },
    {
      id: "elly-boutique", nombre: "Elly Boutique", tipo: "Escritorio", fecha: "Ene – abr 2024", icono: "bag",
      rol: "Proyecto individual · Full stack",
      resumen: "Sistema de gestión para una boutique real",
      descripcion: "Sistema de gestión completo para una boutique: inventario, ventas con facturas imprimibles, proveedores y empleados. Se entregó como ejecutable instalado en el negocio.",
      puntos: [
        "Ciclo completo: análisis, 6 tipos de diagramas UML, programación y pruebas",
        "Documentación de requerimientos con el estándar IEEE 830"
      ],
      stack: ["Java", "Swing", "MySQL", "NetBeans", "phpMyAdmin"],
      imagenes: ["elly-boutique-1.jpg", "elly-boutique-2.jpg", "elly-boutique-3.jpg", "elly-boutique-4.jpg", "elly-boutique-5.jpg", "elly-boutique-6.jpg", "elly-boutique-7.jpg", "elly-boutique-8.jpg", "elly-boutique-9.jpg", "elly-boutique-10.jpg", "elly-boutique-11.jpg", "elly-boutique-12.jpg"], repo: null
    },
    {
      id: "sigoa", nombre: "SIGOA", tipo: "Web", fecha: "2026", icono: "building",
      rol: "Diseñador UX/UI",
      resumen: "Obras y proyectos de arquitectura en una PWA",
      descripcion: "PWA para despachos de arquitectura: clientes, cotizaciones, contratos, obras y portal del cliente. Diseñé la línea visual de todas las pantallas.",
      puntos: [
        "Funciona sin conexión: avances y fotos se sincronizan al volver la señal",
        "Navegación móvil con barra inferior e indicador de conexión"
      ],
      stack: ["Angular", "Node.js", "Express", "MySQL", "PWA"],
      imagenes: ["sigoa-1.jpg", "sigoa-2.jpg", "sigoa-3.jpg", "sigoa-4.jpg", "sigoa-5.jpg", "sigoa-6.jpg", "sigoa-7.jpg", "sigoa-8.jpg", "sigoa-9.jpg", "sigoa-10.jpg"], repo: null, privado: true
    },
    {
      id: "body-pong", nombre: "Body Pong", tipo: "Juegos", fecha: "", icono: "face",
      rol: "Proyecto personal",
      resumen: "Pong que se juega moviendo la cabeza",
      descripcion: "Juego de Pong controlado con la cara: la cámara sigue la nariz con MediaPipe FaceMesh. Tiene partidas por tiempo y niveles de dificultad.",
      puntos: ["Visión artificial en tiempo real con la webcam", "Partidas por tiempo y selección de dificultad"],
      stack: ["Python", "OpenCV", "MediaPipe", "Pygame"],
      imagenes: ["body-pong-1.jpg", "body-pong-2.jpg", "body-pong-3.jpg"], repo: null
    },
    {
      id: "friki", nombre: "Friki", tipo: "Juegos", fecha: "2026", icono: "gamepad",
      rol: "Desarrollo en equipo", estado: "En desarrollo",
      resumen: "Un gato callejero que solo quiere llegar a casa",
      descripcion: "Juego de plataformas en Unity: Friki esquiva a los vecinos que quieren adoptarlo porque creen que trae suerte… hasta que el último nivel revela que en realidad buscan la perla de su collar.",
      puntos: ["5 niveles, uno por integrante del equipo", "Personajes y escenarios modelados en Blender"],
      stack: ["Unity", "C#", "Blender"],
      imagenes: ["friki-1.jpg"], repo: null
    }
  ];

  const EXPERIENCIA = [
    { when: "Nov 2026 – ene 2027", title: "Inclusive Academy, 2.ª generación", text: "Nestlé IT & Digital Mexico City Hub × Inclúyeme", hl: true },
    { when: "Sep – nov 2026", title: "Coordinador del proyecto Inventia", text: "Equipo de 7 y prueba piloto con dulcerías reales" },
    { when: "Mar – abr 2026", title: "Code Dragons 2026", text: "Concursante estatal y desarrollador del sitio oficial" },
    { when: "May – ago 2025", title: "Estadía profesional", text: "Sitio web de La Crudería, cliente externo" },
    { when: "Oct 2024", title: "Freelance", text: "Tienda en línea Aurum Beauty" },
    { when: "Ene – abr 2024", title: "Sistema Elly Boutique", text: "Gestión completa para una boutique real" }
  ];
  const LOGROS = [
    { when: "Oct 2026", title: "Participante y finalista de FECIEM 2026", text: "Tercera fase en Toluca con Dogge Creew, categoría Sistemas Embebidos", hl: true },
    { when: "Mar 2026", title: "1.er lugar, Arduino Day School 2026", text: "Categoría Innovación, con el Monitor ECG", hl: true },
    { when: "2023", title: "2.º lugar, Expo Emprendimiento CECyTEM", text: "Hiladora de PET; pasó a la expo estatal en Toluca" },
    { when: "Jun 2023", title: "Certificación IT Specialist", text: "HTML5 Application Development · Certiport" }
  ];
  const FORMACION = [
    { when: "2025 – 2027", title: "Ingeniería en Desarrollo y Gestión de Software", text: "Universidad Tecnológica Fidel Velázquez", hl: true },
    { when: "2023 – 2025", title: "TSU en Desarrollo de Software Multiplataforma", text: "Universidad Tecnológica Fidel Velázquez" },
    { when: "2020 – 2023", title: "Técnico en Programación", text: "CECyTEM Plantel Nicolás Romero II" }
  ];

  const HABILIDADES = [
    { titulo: "Lenguajes", icono: "code", items: ["Java", "JavaScript", "Python", "PHP", "SQL", "C/C++", "Dart"] },
    { titulo: "Web", icono: "monitor", items: ["HTML5", "CSS3", "React", "Angular", "Bootstrap", "Wix"] },
    { titulo: "Móvil", icono: "phone", items: ["Android Studio", "Kotlin", "XML", "Flutter", "Firebase"] },
    { titulo: "Backend", icono: "server", items: ["FastAPI", "Django", "Node.js", "Express"] },
    { titulo: "Bases de datos", icono: "db", items: ["MySQL", "SQLite", "MongoDB", "Firebase", "phpMyAdmin"] },
    { titulo: "Escritorio", icono: "box", items: ["Java Swing", "NetBeans", "pywebview", "PyInstaller"] },
    { titulo: "IoT y señales", icono: "chip", items: ["Arduino", "ESP32", "HC-05", "AD8232", "PyQtGraph", "NumPy"] },
    { titulo: "Herramientas", icono: "git", items: ["Git", "GitHub", "GitHub Actions", "VS Code", "Unity", "Blender"] },
    { titulo: "Cómo trabajo", icono: "route", items: ["Scrum", "Kanban", "UML", "IEEE 830", "Ramas y Pull Requests", "CI/CD"], ancho: true }
  ];

  const TIPOS = ["Todos", "Web", "Móvil", "Escritorio", "IoT", "Juegos"];

  /* ---------- 2. ICONOS (trazo, estilo Lucide) ---------- */
  const I = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
    route: '<circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H17a3.5 3.5 0 0 0 0-7H7a3.5 3.5 0 0 1 0-7h8.5"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5z"/><path d="m3 13 9 5 9-5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 10.5V17M8 7.2v.01M12 17v-6.5M12 13.5a2.5 2.5 0 0 1 5 0V17"/>',
    whatsapp: '<path d="M3.5 20.5 5 16.3A8.5 8.5 0 1 1 8 19.2l-4.5 1.3z"/><path d="M9.2 8.6c-.4.8.1 2.4 1.6 3.9s3.1 2 3.9 1.6l.6-1.2-1.7-.9-.8.6c-.7-.3-1.4-1-1.7-1.7l.6-.8-.9-1.7-1.6.2z"/>',
    facebook: '<path d="M15 3h-2a4 4 0 0 0-4 4v3H6.5v3.5H9V21h3.5v-7.5H15l.6-3.5h-3.1V7.5a1 1 0 0 1 1-1H15z"/>',
    pin: '<path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    left: '<path d="m15 6-6 6 6 6"/>', right: '<path d="m9 6 6 6-6 6"/>',
    alert: '<path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4M12 17h.01"/>',
    zoom: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4M11 8v6M8 11h6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    ext: '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
    play: '<circle cx="12" cy="12" r="9"/><path d="m10 8.5 5.5 3.5-5.5 3.5z"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/>',
    tag: '<path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    box: '<path d="M21 8 12 3 3 8v8l9 5 9-5V8z"/><path d="m3 8 9 5 9-5"/><path d="M12 13v8"/>',
    bike: '<circle cx="5.5" cy="17" r="3"/><circle cx="18.5" cy="17" r="3"/><path d="M5.5 17h5l3.5-7h3l1.5 7"/><path d="M14 10l-2-4H9"/>',
    paw: '<circle cx="6.5" cy="10" r="1.8"/><circle cx="10" cy="6" r="1.8"/><circle cx="14" cy="6" r="1.8"/><circle cx="17.5" cy="10" r="1.8"/><path d="M12 11.5c-3 0-5.5 3.6-5.5 5.8 0 1.5 1.2 2.7 2.7 2.7 1 0 1.8-.6 2.8-.6s1.8.6 2.8.6c1.5 0 2.7-1.2 2.7-2.7 0-2.2-2.5-5.8-5.5-5.8z"/>',
    scan: '<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"/><path d="M8 9h8M8 12h8M8 15h5"/>',
    building: '<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/>',
    utensils: '<path d="M7 3v8a2 2 0 0 0 2 2v8M11 3v8a2 2 0 0 1-2 2M7 3v5M11 3v5"/><path d="M17 21V3c-2.2 1.2-3.5 3.6-3.5 7v3H17"/>',
    code: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>',
    pulse: '<path d="M3 12h4l2-5 4 10 2-5h6"/>',
    bag: '<path d="M5 8h14l-1 13H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
    recycle: '<path d="M7 19H4.5a1.5 1.5 0 0 1-1.3-2.3L5.5 13"/><path d="M11 19h8.5a1.5 1.5 0 0 0 1.3-2.3L19.5 14.5"/><path d="m14 16-3 3 3 3"/><path d="M8.3 8.8 10.7 4.7a1.5 1.5 0 0 1 2.6 0l1.4 2.5"/><path d="m4.8 10 3.5-1.2 1.2 3.5"/><path d="m18.7 9.2-1.2 3.6-3.6-1.1"/>',
    face: '<circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01"/><path d="M8.5 15c1.8 1.6 5.2 1.6 7 0"/>',
    gamepad: '<rect x="2" y="7" width="20" height="11" rx="5.5"/><path d="M7 10.5v4M5 12.5h4"/><path d="M15.5 12h.01M18 14h.01"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/>',
    store: '<path d="M3 9l1.5-5h15L21 9"/><path d="M4 9v11h16V9"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M10 20v-5h4v5"/>',
    handshake: '<path d="m11 17 2 2a1.4 1.4 0 0 0 2-2"/><path d="m14 14 2.5 2.5a1.4 1.4 0 0 0 2-2L15 11l-2.5 1.5a2 2 0 0 1-2.5-3L13 7.5a3 3 0 0 1 3 0L21 10"/><path d="M3 10l5-3 2 1"/><path d="m5 13 4 4a1.4 1.4 0 0 0 2-2"/><path d="M3 10v4M21 10v4"/>',
    chip: '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
    cap: '<path d="m2 9 10-5 10 5-10 5-10-5z"/><path d="M6 11v5c3 2.2 9 2.2 12 0v-5"/>',
    phone: '<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>',
    monitor: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
    server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
    db: '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    git: '<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="8" r="2.5"/><path d="M6 8.5v7M18 10.5c0 3.5-4 4.5-9.5 6"/>'
  };
  const svg = (name, cls = "ic") => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${I[name] || ""}</svg>`;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const isMobile = () => window.matchMedia("(max-width: 860px)").matches;
  const ph = (icono) => `<span class="ph">${svg(icono)}</span>`;
  const pic = (p, file, alt = "") => file
    ? `<img src="${IMG + file}" alt="${esc(alt)}" loading="lazy" data-ph="${p.icono}">`
    : ph(p.icono);

  // Imágenes que todavía no existen: portada clarita o iniciales en la foto
  document.addEventListener("error", (e) => {
    const img = e.target;
    if (img.tagName !== "IMG") return;
    if (img.dataset.ph) img.outerHTML = ph(img.dataset.ph);
    else if (img.hasAttribute("data-avatar")) img.parentElement.classList.add("noimg");
  }, true);
  $$("img[data-avatar]").forEach((img) => { if (img.complete && !img.naturalWidth) img.parentElement.classList.add("noimg"); });

  const paintIcons = (root = document) => $$("i[data-i]", root).forEach((el) => { el.outerHTML = svg(el.dataset.i); });

  /* ---------- 3. PERFIL Y REDES DEL MENÚ ---------- */
  $("#pMeta").textContent = [PERFIL.edad, PERFIL.lugar].filter(Boolean).join(" · ");
  const wa = `https://wa.me/${CONTACTO.whatsapp}`;
  $("#socials").innerHTML = [
    ["github", CONTACTO.github, "GitHub"], ["linkedin", CONTACTO.linkedin, "LinkedIn"],
    ["whatsapp", wa, "WhatsApp"], ["facebook", CONTACTO.facebook, "Facebook"], ["mail", `mailto:${CONTACTO.correo}`, "Correo"]
  ].map(([ic, href, label]) => `<a href="${href}" target="_blank" rel="noopener" aria-label="${label}" title="${label}">${svg(ic)}</a>`).join("");
  $("#heroMail").href = `mailto:${CONTACTO.correo}`;
  $("#traits").innerHTML = RASGOS.map((r) => `<span>${esc(r)}</span>`).join("");

  /* ---------- 4. NAVEGACIÓN ENTRE SECCIONES ---------- */
  const VIEWS = $$("[data-view]").map((v) => v.dataset.view);
  const sidebar = $("#sidebar"), scrim = $("#scrim"), menuBtn = $("#menuBtn");

  function closeMenu() { sidebar.classList.remove("open"); scrim.classList.remove("on"); menuBtn.setAttribute("aria-expanded", "false"); }
  const openMenu = () => { sidebar.classList.add("open"); scrim.classList.add("on"); menuBtn.setAttribute("aria-expanded", "true"); };

  const show = (name, push = true) => {
    if (!VIEWS.includes(name)) name = "inicio";
    closeSheet();
    $$("[data-view]").forEach((v) => v.classList.toggle("on", v.dataset.view === name));
    $$(".nav a").forEach((a) => {
      const on = a.dataset.go === name;
      a.classList.toggle("on", on);
      on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current");
    });
    if (push && location.hash !== `#${name}`) history.replaceState(null, "", `#${name}`);
    closeMenu();
    $(`[data-view="${name}"]`).scrollTop = 0;
    if (isMobile()) window.scrollTo(0, 0);
    if (name === "proyectos") requestAnimationFrame(layout);
  };

  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-go]");
    if (!link) return;
    e.preventDefault();
    show(link.dataset.go);
  });
  window.addEventListener("hashchange", () => show(location.hash.slice(1), false));
  menuBtn.addEventListener("click", () => (sidebar.classList.contains("open") ? closeMenu() : openMenu()));
  scrim.addEventListener("click", closeMenu);

  /* ---------- 5. PROYECTOS: tarjetas por página ---------- */
  let filtro = "Todos", pagina = 0, porPagina = 6, abierto = null;
  const grid = $("#pgrid"), pager = $("#pager"), sheet = $("#sheet"), sheetScrim = $("#sheetScrim");
  const lista = () => PROYECTOS.filter((p) => filtro === "Todos" || p.tipo === filtro);

  $("#filters").innerHTML = TIPOS.filter((t) => t === "Todos" || PROYECTOS.some((p) => p.tipo === t))
    .map((t) => `<button role="tab" data-f="${esc(t)}" aria-selected="${t === filtro}">${esc(t)}</button>`).join("");

  // Cuántas tarjetas caben según el tamaño de la ventana (para no scrollear)
  function layout() {
    if (isMobile()) { porPagina = Infinity; renderGrid(); return; }
    const w = grid.clientWidth, h = grid.clientHeight;
    const cols = w >= 900 ? 3 : w >= 520 ? 2 : 1;
    const rows = h >= 420 ? 2 : 1;
    grid.style.setProperty("--cols", cols);
    grid.style.setProperty("--rows", rows);
    const nuevo = cols * rows;
    if (nuevo !== porPagina) { porPagina = nuevo; pagina = 0; }
    renderGrid();
  }

  function renderGrid(anim = false) {
    const items = lista();
    const paginas = Math.max(1, Math.ceil(items.length / porPagina));
    pagina = Math.min(pagina, paginas - 1);
    const vis = isMobile() ? items : items.slice(pagina * porPagina, pagina * porPagina + porPagina);
    grid.innerHTML = vis.map((p) => `
      <li><button class="pcard" data-p="${p.id}" aria-label="Ver ${esc(p.nombre)}">
        <span class="thumb"><span class="pill">${esc(p.estado || p.tipo)}</span>${pic(p, p.imagenes[0])}</span>
        <span class="ptxt"><strong>${esc(p.nombre)}<em>${esc(p.fecha)}</em></strong><small>${esc(p.resumen)}</small></span>
      </button></li>`).join("");
    if (anim) { grid.classList.remove("swap"); void grid.offsetWidth; grid.classList.add("swap"); }

    pager.innerHTML = paginas > 1 ? `
      <span>${pagina + 1} / ${paginas}</span>
      <button class="icon-btn" data-pg="-1" aria-label="Página anterior" ${pagina === 0 ? "disabled" : ""}>${svg("left")}</button>
      <div class="dots">${Array.from({ length: paginas }, (_, i) => `<button data-to="${i}" aria-label="Página ${i + 1}" aria-current="${i === pagina}"></button>`).join("")}</div>
      <button class="icon-btn" data-pg="1" aria-label="Página siguiente" ${pagina === paginas - 1 ? "disabled" : ""}>${svg("right")}</button>` : "";
  }

  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest("[data-f]");
    if (!b) return;
    filtro = b.dataset.f; pagina = 0;
    $$("#filters button").forEach((x) => x.setAttribute("aria-selected", x === b));
    renderGrid(true);
  });
  pager.addEventListener("click", (e) => {
    const step = e.target.closest("[data-pg]"), to = e.target.closest("[data-to]");
    if (step) pagina += +step.dataset.pg;
    else if (to) pagina = +to.dataset.to;
    else return;
    renderGrid(true);
  });
  grid.addEventListener("click", (e) => {
    const c = e.target.closest("[data-p]");
    if (c) openSheet(c.dataset.p);
  });
  // Rueda del mouse sobre las tarjetas = cambiar de página
  let wheelLock = false;
  grid.addEventListener("wheel", (e) => {
    if (isMobile() || wheelLock || Math.abs(e.deltaY) < 20) return;
    const paginas = Math.ceil(lista().length / porPagina);
    const next = pagina + (e.deltaY > 0 ? 1 : -1);
    if (next < 0 || next >= paginas) return;
    e.preventDefault(); pagina = next; renderGrid(true);
    wheelLock = true; setTimeout(() => (wheelLock = false), 600);
  }, { passive: false });

  const ro = new ResizeObserver(() => layout());
  ro.observe(grid);

  // Tarjetita de aviso arriba
  const toast = (msg) => {
    const t = $("#toast");
    t.innerHTML = `${svg("alert")}<span>${esc(msg)}</span>`;
    t.classList.add("on");
    clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("on"), 2600);
  };

  /* ---------- 6. PANEL DE DETALLE ---------- */
  function openSheet(id) {
    abierto = id;
    renderSheet();
    sheet.hidden = false;
    requestAnimationFrame(() => { sheet.classList.add("on"); sheetScrim.classList.add("on"); });
    setTimeout(() => $("[data-close]", sheet)?.focus({ preventScroll: true }), 50);
  }
  function closeSheet() {
    if (!abierto) return;
    abierto = null;
    sheet.classList.remove("on"); sheetScrim.classList.remove("on");
    setTimeout(() => { if (!abierto) sheet.hidden = true; }, 400);
  }
  const round = (href, icono, tip, main = false) =>
    `<a class="round${main ? " main" : ""}" href="${href}" target="_blank" rel="noopener" aria-label="${esc(tip)}" data-tip="${esc(tip)}">${svg(icono)}</a>`;

  function renderSheet() {
    const items = lista();
    const i = items.findIndex((x) => x.id === abierto);
    const p = items[i] || PROYECTOS.find((x) => x.id === abierto);
    const acciones = [
      p.privado ? `<span class="priv">${svg("lock")}Repo privado del equipo</span>` : "",
      p.repo && !p.privado
        ? round(`${GITHUB}/${p.repo}`, "github", "Ver en GitHub", true)
        : `<button class="round main off" data-norepo aria-label="Ver en GitHub" data-tip="Ver en GitHub">${svg("github")}</button>`,
      p.sitio ? round(p.sitio, "globe", "Ver sitio") : "",
      p.extra ? round(p.extra.url, p.extra.icono || "ext", p.extra.label) : ""
    ].join("");

    sheet.innerHTML = `
      <div class="gallery">
        <div class="collage" id="collage"></div>
        <p class="gal-note" id="galNote"></p>
      </div>
      <div class="info">
        <div class="sheet-top">
          <span>Proyecto ${i + 1} de ${items.length}</span>
          <button class="icon-btn" data-nav="-1" aria-label="Proyecto anterior">${svg("left")}</button>
          <button class="icon-btn" data-nav="1" aria-label="Proyecto siguiente">${svg("right")}</button>
          <button class="icon-btn" data-close aria-label="Cerrar">${svg("close")}</button>
        </div>
        <div class="title-row"><h3 id="sheetTitle">${esc(p.nombre)}</h3><div class="ractions">${acciones}</div></div>
        <div class="meta">
          <span>${svg("user")}${esc(p.rol)}</span>
          ${p.fecha ? `<span>${svg("clock")}${esc(p.fecha)}</span>` : ""}
          <span>${svg("tag")}${esc(p.estado || p.tipo)}</span>
        </div>
        <p class="pdesc">${esc(p.descripcion)}</p>
        <ul class="points">${p.puntos.map((t) => `<li>${svg("check")}<span>${esc(t)}</span></li>`).join("")}</ul>
        <p class="stack">${p.stack.map(esc).join("<span>·</span>")}</p>
      </div>`;
    renderCollage(p);
  }

  /* ---------- 6b. COLLAGE DE CAPTURAS ----------
     Acomoda todas las capturas en filas que llenan el espacio, sin recortar ni deformar ninguna:
     prueba todas las formas de repartirlas en filas y se queda con la que deja las imágenes más grandes. */
  const aspectos = {};
  const medir = (src) => new Promise((ok) => {
    if (src in aspectos) return ok(aspectos[src]);
    const im = new Image();
    im.onload = () => ok(aspectos[src] = im.naturalWidth / im.naturalHeight);
    im.onerror = () => ok(aspectos[src] = null);
    im.src = src;
  });
  let collageItems = [];

  async function renderCollage(p) {
    const id = p.id;
    const srcs = p.imagenes.map((f) => IMG + f);
    const asp = await Promise.all(srcs.map(medir));
    if (abierto !== id) return;
    collageItems = srcs.map((src, i) => ({ src, a: asp[i] })).filter((x) => x.a);
    const note = $("#galNote", sheet);
    if (note) note.textContent = collageItems.length > 1 ? `${collageItems.length} capturas · toca una para ampliarla`
      : collageItems.length ? "Toca la captura para ampliarla" : "";
    layoutCollage();
  }

  function layoutCollage() {
    const box = $("#collage", sheet);
    if (!box) return;
    const p = PROYECTOS.find((x) => x.id === abierto);
    if (!collageItems.length) { box.innerHTML = `<div class="collage-ph">${ph(p ? p.icono : "grid")}</div>`; return; }
    const MAX = 8;                                   // máximo de capturas visibles en el collage
    const todas = collageItems.length, vis = collageItems.slice(0, MAX), extra = todas - vis.length;
    const W = box.clientWidth, H = box.clientHeight, g = 14, n = vis.length;
    if (!W || !H) return;
    let best = null;
    for (let mask = 0; mask < 1 << (n - 1); mask++) {
      const rows = [[0]];
      for (let i = 1; i < n; i++) (mask & (1 << (i - 1))) ? rows.push([i]) : rows[rows.length - 1].push(i);
      const sums = rows.map((r) => r.reduce((s, i) => s + vis[i].a, 0));
      const hs = rows.map((r, k) => (W - g * (r.length - 1)) / sums[k]);           // alto de cada fila a todo lo ancho
      const totalH = hs.reduce((a, b) => a + b, 0);
      const k = Math.min(1, (H - g * (rows.length - 1)) / totalH);                 // escala para que quepa a lo alto
      const areas = rows.flatMap((r, ri) => r.map((i) => (hs[ri] * k) ** 2 * vis[i].a));
      const total = areas.reduce((a, b) => a + b, 0);
      const score = total * (Math.min(...areas) / Math.max(...areas)) ** 0.35;    // grande y parejo
      if (!best || score > best.score) best = { rows, hs, k, score };
    }
    const { rows, hs, k } = best;
    const rowH = hs.map((h) => h * k);
    const usedH = rowH.reduce((a, b) => a + b, 0) + g * (rows.length - 1);
    let y = (H - usedH) / 2, html = "";
    rows.forEach((r, ri) => {
      const h = rowH[ri];
      const rowW = r.reduce((s, i) => s + vis[i].a * h, 0) + g * (r.length - 1);
      let x = (W - rowW) / 2;
      r.forEach((i) => {
        const w = vis[i].a * h;
        const mas = extra > 0 && i === n - 1 ? `<span class="more">+${extra + 1}</span>` : "";
        html += `<button class="tile" data-lb="${i}" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px" aria-label="${mas ? `Ver ${extra + 1} capturas más` : `Ampliar captura ${i + 1}`}">
          <img src="${vis[i].src}" alt="Captura ${i + 1} de ${esc(p.nombre)}" loading="lazy">${mas || `<span class="zi">${svg("zoom")}</span>`}</button>`;
        x += w + g;
      });
      y += h + g;
    });
    box.innerHTML = html;
  }
  const roSheet = new ResizeObserver(() => { if (abierto) layoutCollage(); });
  roSheet.observe(sheet);

  /* ---------- 6c. VISOR (modal) CON ZOOM ---------- */
  const lb = document.createElement("div");
  lb.className = "lb"; lb.hidden = true;
  lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true"); lb.setAttribute("aria-label", "Captura ampliada");
  lb.innerHTML = `
    <div class="lb-top">
      <span class="lb-count" id="lbCount"></span>
      <button class="icon-btn" data-z="-1" aria-label="Alejar">${svg("minus")}</button>
      <button class="icon-btn" data-z="1" aria-label="Acercar">${svg("plus")}</button>
      <button class="icon-btn" data-lbclose aria-label="Cerrar">${svg("close")}</button>
    </div>
    <button class="lb-nav l" data-lbn="-1" aria-label="Anterior">${svg("left")}</button>
    <div class="lb-stage" id="lbStage"><img id="lbImg" alt="" draggable="false"></div>
    <button class="lb-nav r" data-lbn="1" aria-label="Siguiente">${svg("right")}</button>`;
  document.body.appendChild(lb);
  const lbImg = $("#lbImg", lb), lbStage = $("#lbStage", lb);
  let lbI = 0, zs = 1, tx = 0, ty = 0;

  const applyZoom = (anim = true) => {
    lbImg.style.transition = anim ? "transform .2s ease" : "none";
    lbImg.style.transform = `translate(${tx}px, ${ty}px) scale(${zs})`;
    lb.classList.toggle("zoomed", zs > 1);
  };
  const zoomAt = (nz, cx = 0, cy = 0) => {          // cx, cy: punto respecto al centro de la pantalla
    nz = Math.min(4, Math.max(1, nz));
    tx = cx - (cx - tx) * (nz / zs); ty = cy - (cy - ty) * (nz / zs);
    zs = nz;
    if (zs === 1) { tx = 0; ty = 0; }
    applyZoom();
  };
  const showLb = (i) => {
    lbI = (i + collageItems.length) % collageItems.length;
    zs = 1; tx = 0; ty = 0; applyZoom(false);
    lbImg.src = collageItems[lbI].src;
    $("#lbCount", lb).textContent = `${lbI + 1} / ${collageItems.length}`;
    $$(".lb-nav", lb).forEach((b) => (b.hidden = collageItems.length < 2));
  };
  const openLb = (i) => { showLb(i); lb.hidden = false; requestAnimationFrame(() => lb.classList.add("on")); };
  const closeLb = () => { lb.classList.remove("on"); setTimeout(() => (lb.hidden = true), 250); };
  const lbOpen = () => !lb.hidden;

  lb.addEventListener("click", (e) => {
    if (e.target.closest("[data-lbclose]") || e.target === lbStage) return closeLb();
    const n = e.target.closest("[data-lbn]"); if (n) return showLb(lbI + +n.dataset.lbn);
    const z = e.target.closest("[data-z]"); if (z) return zoomAt(zs * (+z.dataset.z > 0 ? 1.5 : 1 / 1.5));
  });
  lbStage.addEventListener("wheel", (e) => {
    e.preventDefault();
    const r = lbStage.getBoundingClientRect();
    zoomAt(zs * (e.deltaY < 0 ? 1.2 : 1 / 1.2), e.clientX - r.left - r.width / 2, e.clientY - r.top - r.height / 2);
  }, { passive: false });
  // Clic: acerca/aleja en ese punto · Arrastrar: mover cuando está con zoom
  let drag = null;
  lbImg.addEventListener("pointerdown", (e) => {
    drag = { x: e.clientX, y: e.clientY, tx, ty, moved: false };
    lbImg.setPointerCapture(e.pointerId);
  });
  lbImg.addEventListener("pointermove", (e) => {
    if (!drag || zs === 1) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (Math.abs(dx) + Math.abs(dy) > 4) drag.moved = true;
    tx = drag.tx + dx; ty = drag.ty + dy; applyZoom(false);
  });
  lbImg.addEventListener("pointerup", (e) => {
    if (drag && !drag.moved) {
      const r = lbStage.getBoundingClientRect();
      zs > 1 ? zoomAt(1) : zoomAt(2, e.clientX - r.left - r.width / 2, e.clientY - r.top - r.height / 2);
    }
    drag = null;
  });

  const moveSheet = (d) => {
    const items = lista();
    const i = items.findIndex((x) => x.id === abierto);
    abierto = items[(i + d + items.length) % items.length].id;
    renderSheet();
  };
  sheet.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) return closeSheet();
    const nav = e.target.closest("[data-nav]");
    if (nav) return moveSheet(+nav.dataset.nav);
    const t = e.target.closest("[data-lb]");
    if (t) return openLb(+t.dataset.lb);
    const nr = e.target.closest("[data-norepo]");
    if (nr) {
      nr.classList.remove("shake"); void nr.offsetWidth; nr.classList.add("shake");
      toast("Este proyecto aún no se encuentra en GitHub");
    }
  });
  sheetScrim.addEventListener("click", closeSheet);

  document.addEventListener("keydown", (e) => {
    if (lbOpen()) {
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") showLb(lbI + (e.key === "ArrowRight" ? 1 : -1));
      if (e.key === "+" || e.key === "=") zoomAt(zs * 1.5);
      if (e.key === "-") zoomAt(zs / 1.5);
      return;
    }
    if (e.key === "Escape") { closeSheet(); closeMenu(); }
    if (abierto && (e.key === "ArrowRight" || e.key === "ArrowLeft")) moveSheet(e.key === "ArrowRight" ? 1 : -1);
  });

  /* ---------- 7. TRAYECTORIA Y HABILIDADES ---------- */
  const tl = (arr) => arr.map((x) => `
    <li class="${x.hl ? "hl" : ""}"><span class="when">${esc(x.when)}</span><strong>${esc(x.title)}</strong><p>${esc(x.text)}</p></li>`).join("");
  $("#tlExp").innerHTML = tl(EXPERIENCIA);
  $("#tlLog").innerHTML = tl(LOGROS);
  $("#tlEdu").innerHTML = tl(FORMACION);

  $("#skills").innerHTML = HABILIDADES.map((g) => `
    <div class="skill${g.ancho ? " wide" : ""}">${svg(g.icono)}<dt>${esc(g.titulo)}</dt><dd>${g.items.map((s) => `<span>${esc(s)}</span>`).join("")}</dd></div>`).join("");

  /* ---------- 8. ARRANQUE ---------- */
  $("#navCount").textContent = PROYECTOS.length;
  $("#statProjects").textContent = PROYECTOS.length;
  paintIcons();
  show(location.hash.slice(1) || "inicio", false);
  layout();
}
