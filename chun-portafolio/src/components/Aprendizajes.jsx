export default function Aprendizajes() {
  return (
    <section className="px-6 md:px-24 py-14 fade-up">
      <h2 className="text-4xl text-sakuraDark font-semibold mb-6 drop-shadow">
        Aprendizajes
      </h2>

      <div className="p-6 bg-bubble rounded-2xl shadow-kawaii">
        <p className="text-lg leading-8 text-[#4a4453] mb-6">
          Desarrollar la página fue un verdadero desafío, porque había herramientas que no conocía y al principio me costó 
          entenderlas. Sin embargo, al aplicarlas y experimentar un poco, pude comprender mejor cómo funcionaban y 
          cuál era la estructura general necesaria para crear un sitio web.
          <br /><br />
          Además, este proyecto utilizó herramientas adicionales del framework, por lo que publicarlo y editarlo también fue retador 
          porque había que hacer pasos adicionales en los archivos de Vite y package.json para para que coincidieran con la ruta del repositorio y así GitHub Pages pudiera funcionar correctamente.
          Por otro lado, había que prestar atención a la carpeta de 'node_modules' porque al subirlo, causaba fallos en el repositorio y aumentaba innecesariamente el peso del proyecto.
          <br /><br />
          A pesar de todo los enredos, realmente disfruté trabajar en este proyecto; incluso cuando parecía un desastre al inicio, 
          me gustó mucho el resultado final y me motivó seguir aprendiendo sobre el desarrollo web.
        </p>

        <div className="flex justify-center">
          <img 
            src="/mi-portafolio/Gato.png" 
            alt="Aprendizaje del proyecto" 
            className="absolute bottom-4 right-4 w-36 opacity-90"
          />
        </div>
      </div>
    </section>
  );
}