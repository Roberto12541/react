import "./App.css";

function App() {
  return (
    <>
      <div className="outer-wrapper">
        <div className="wrapper">
          <div className="slide one text-4xl">
            <span className="text-5xl">Level Select</span>
            <div className="flex flex-col gap-14">
              <a href="#cuatro">Level 0</a>
              <a href="#lectura">Level 1</a>
              <a href="#video">Level 2</a>
            </div>
          </div>
          <div className="slide four" id="cuatro">
            <h1 className="text-center text-5xl text-white">Etapas del proceso de escritura</h1>
            <div className="escritura">
              <div className="etapa">
                <img src="./public/planeacion.png" alt="" className="w-[50%]" />
                <h2 className="text-2xl">Planeación</h2>
                <p>Organización tus ideas, frases, estructura.</p>
              </div>
              <div className="etapa">
                <img src="./src/assets/img/reescritura.png" alt="" className="w-[50%]" />
                <h2 className="text-2xl">Preescritura</h2>
                <p className="text-center">Seleccionar género, reconocer audiencia, identificar motivos, etc.</p>
              </div>
              <div className="etapa">
                <img src="./src/assets/img/borrador.png" alt="" className="w-[50%]" />
                <h2 className="text-2xl">Borrador</h2>
                <p className="text-center">Coloca todas tus ideas en papel en forma de lista o como texto.</p>
              </div>
              <div className="etapa">
                <img src="./src/assets/img/revision.png" alt="" className="w-[50%]" />
                <h2 className="text-2xl">Revisión</h2>
                <p className="text-center">Realizar una revisión de las ideas indentificadas asi como del texto.</p>
              </div>
              <div className="etapa">
                <img src="./src/assets/img/redaccion.png" alt="" className="w-[50%]" />
                <h2 className="text-2xl">Redacción</h2>
                <p className="text-center">Lee cada frase, oración y párrafo para verificar si en ellos lograste lo que querías expresar.</p>
              </div>
              <div className="etapa p-4">
                <h2 className="text-2xl">Reescritura</h2>
                <p className="text-center">Es igual
                  en la escritura, sólo que aquí las palabras, la estructura del mismo, habla por
                  sí solo, otorgando algo coherente, interesante y, por supuesto, algo que te
                  satisfaga.</p>
              </div>
              <div className="etapa">
                <img src="./src/assets/img/estilso.png" alt="" className="w-[50%]" />
                <h2 className="text-2xl">Estilo</h2>
                <p className="text-center">En él te definirás como escritor, dejaras tu marca con sobre la manera en que será visto.</p>
              </div>
              <div className="etapa">
                <img src="./src/assets/img/proceso.png" alt="" className="w-[100%]" />
              </div>
            </div>
          </div>
          <div className="slide two" id="lectura">
            <span className="text-6xl">Etapas de la escritura</span>
            <div className="flex gap-40">
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute" />
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                  <div style={{ position: 'relative', paddingBottom: '200%', paddingTop: 0, height: 0 }}>
                    <iframe title="Etapas De La Lectura" frameBorder={0} width="800px" height="1600px" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://view.genial.ly/647fdae095c6ea00123518a8" type="text/html" allowscriptaccess="always" allowFullScreen="true" scrolling="yes" allownetworking="all" />
                  </div>
                </div>
              </div>
              <img src="./src/assets/img/mariolector.png" alt="" />
            </div>
            {/* <div style={{ width: '40%' }}> */}

            {/* <div style={{ position: 'relative', paddingBottom: '200%', paddingTop: 0, height: 0 }}>
                <iframe title="Etapas De La Lectura" frameBorder={0} width="800px" height="1600px" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://view.genial.ly/647fdae095c6ea00123518a8" type="text/html" allowscriptaccess="always" allowFullScreen="true" scrolling="yes" allownetworking="all" /> 
              </div> */}
            {/* </div> */}
          </div>
          <div className="slide three" id="video">
            <span className="text-6xl text-center">Analisis de cancion</span>
            <div className="">
              <div>
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-xl h-[272px] max-w-[401px] md:h-[394px] md:max-w-[712px]">
                  <div className="rounded-xl overflow-hidden h-[240px] md:h-[362px]">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CvwA8hCrtkE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]" />
                <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]" />
              </div>
            </div>
            <div className="botones">
              <a href="https://www.youtube.com/watch?v=T3WJE1mgZs4&ab_channel=DiscosMusart" target="_blank">
                <img src="./src/assets/img/caja.png" alt="" className="" />
                <span className="text-3xl">Cancion</span>
              </a>
              <a href="https://genius.com/Joan-sebastian-secreto-de-amor-lyrics" target="_blank">
                <img src="./src/assets/img/caja.png" alt="" className="" />
                <span className="text-3xl">Letra</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
