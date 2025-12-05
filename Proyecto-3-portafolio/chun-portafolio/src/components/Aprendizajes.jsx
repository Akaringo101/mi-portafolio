export default function Aprendizajes() {
  const secciones = [
    {
      titulo: "Herramientas y Archivos",
      lecciones: [
        "Nunca se debe subir la carpeta node_modules al repositorio. Ya que esa carpeta hace que el proyecto pese mucho y además puede causar errores innecesarios.",
        "El archivo package.json es básicamente la “ficha técnica” del proyecto: ahí se guardan las dependencias que usa, la configuración principal y los comandos para desarrollarlo o construirlo.",
        "React es una biblioteca de JavaScript que te permite crear interfaces de usuario usando componentes reutilizables. Hace que tu página actualice solo lo necesario cuando cambian los datos, por eso es ideal para aplicaciones dinámicas e interactivas.",
        "Vite es una herramienta que mejora el proceso de desarrollo web: carga súper rápido, actualiza los cambios al instante y genera una versión optimizada para producción. En palabras simples, te hace el trabajo más fluido y rápido.",
        "Tailwind CSS es un framework de estilos basado en utilidades. Te da clases listas para usar, lo que permite diseñar interfaces de forma rápida, consistente y sin tener que escribir CSS desde cero."
      ],
    },
    {
      titulo: "Diferencias entre HTML, CSS y JavaScript",
      lecciones: [
        "HTML → Estructura: Define la organización y el contenido de la página (títulos, párrafos, imágenes, botones).",
        "CSS → Estilo: Controla la apariencia visual: colores, tamaños, diseño, animaciones, etc",
        "JavaScript → Comportamiento: Agrega lógica, interactividad y dinamismo (formularios, botones funcionales, animaciones controladas, peticiones al servidor, etc.).",
        "Todas estas herramientas se complementan para el buen funcionamiento de la página"
      ],
    },
    {
      titulo: "Ajuste de Diseño Web",
      lecciones: [
        "Para mayor orden de las secciones y la información, se separan en diferentes archivos .jsx",
        "Para ajustar la imagen se usa 'object-[el tamaño y donde quiero que empiece a centrar la imagen]'",
        "Para las imagenes hay dos formas de agregarlo; la primera y más facil es usar el url de la imagen y la segunda es descargarlo, poner las imagenes en una carpeta por aparte y escribir el nombre del archivo en el espacio.",
        "Es normal equivocarse y apesar que no estoy familiarizada con el diseño web, me gustó mucho desarrollarlo y la verdad me gusta cómo quedo :)"
      ],
    }
  ];

  return (
    <section className="px-6 md:px-24 py-14 fade-up">
      <h2 className="text-4xl text-sakuraDark font-semibold mb-6 drop-shadow">
        Aprendizajes
      </h2>

      <div className="space-y-6">
        {secciones.map((seccion, idx) => (
          <div key={idx} className="p-6 bg-bubble rounded-2xl shadow-kawaii">
            <h3 className="text-2xl text-sakuraDark font-semibold mb-4">
              {seccion.titulo}
            </h3>
            <ul className="text-lg leading-8 text-[#4a4453] space-y-3">
              {seccion.lecciones.map((leccion, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-sakuraDark font-bold mr-2">•</span>
                  <span>{leccion}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}