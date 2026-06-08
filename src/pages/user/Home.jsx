import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../css/pages/Home.css";
import "../../Components/molecules/CardHorizontal"
//import CardCarousel from '../../Components/organisms/CardCarousel';
import CardGuia from "../../Components/molecules/CardGuia";
import Acordion from '../../Components/molecules/Acordion';
import CarouselHorizontal from '../../Components/organisms/CarouselHorizontal';




function Home() {

   // const carouselItems = [
 // {
   // image:
     // "https://picsum.photos/1200/400?1",
    //title: "Bienvenido",
    //description:
      //"Este es el primer slide",
  //},
  //{
    //image:
      //"https://picsum.photos/1200/400?2",
    //title: "Mascotas",
    //description:
      //"Información de mascotas",
  //},
  //{
    //image:
      //"https://picsum.photos/1200/400?3",
    //title: "Contáctanos",
    //description:
      //"Comunícate con nosotros",
  //},
//];


      //<div>
        //<CardCarousel items={carouselItems} />
      //</div>




      const listaMascotas = [
    {
      imagen: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1',
      titulo: 'raco',
      descripcion: 'Se perdió cerca de la plaza central. Lleva collar azul.',
      fecha: '3 horas'
    },
    {
      imagen: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
      titulo: 'michu',
      descripcion: 'Gato siamés de ojos azules, muy asustadizo.',
      fecha: '1 hora'
    },
    {
      imagen: 'https://placedog.net/500',
      titulo: 'Max',
      descripcion: 'Perrito muy juguetón responde al nombre de max, lleva perdido 1 dia',
      fecha: 'ayer'
    },
    {
      imagen: 'https://placedog.net/501',
      titulo: 'eduard',
      descripcion: 'Perrito muy juguetón pero asustadizo, lo hemos buscado por toda la comuna de p.a.c. pero nada, lleva perdido 2 dias',
      fecha: '3 minutos'
    }
  ];


  const guias = [

  {
    id: 1,
    imagen: "https://png.pngtree.com/thumb_back/fh260/background/20210326/pngtree-cute-cartoon-dog-wallpaper-image_595508.jpg",
    titulo: "¿Qué hacer si tu mascota se pierde?",
    descripcion:
      "Aprende los primeros pasos para encontrar a tu mascota rápidamente: avisar a vecinos, publicar en redes sociales y recorrer la zona.",
    link: "https://www.24horas.cl/tendencias/mascotas/que-hago-si-se-perdio-mi-mascota",
  },

  {
    id: 2,
    imagen: "https://us.123rf.com/450wm/tatianastulbo/tatianastulbo1610/tatianastulbo161000200/67294177-clínica-veterinaria-interior-a-su-vez-a-el-veterinario-médico-trata-a-un-perro-las-personas-con.jpg?ver=6",
    titulo: "Cómo actuar en una emergencia veterinaria",
    descripcion:
      "Conoce señales de alerta, cómo reaccionar ante accidentes y qué incluir en un kit básico de primeros auxilios para mascotas.",
    link: "https://vetparquevespucio.cl/joomla/index.php/noticias/tenencia-responsable/ejemplos-de-urgencias-veterinarias-como-actuar-en-caso-de-emergencia",
  },

  {
    id: 3,
    imagen: "https://img.magnific.com/vector-premium/propietaria-dibujos-animados-sentada-sofa-gatos-perros-casa-escena-adorable-acogedora-sala-estar_746655-9484.jpg?semt=ais_hybrid&w=740&q=80",
    titulo: "Consejos para cuidar perros mayores",
    descripcion:
      "Descubre recomendaciones sobre alimentación, ejercicio y cuidados especiales para mejorar la calidad de vida de perros senior.",
    link: "https://mx.virbac.com/cuidados-de-un-perro-viejito",
  },

  {
    id: 4,
    imagen: "https://img.magnific.com/vector-premium/mujer-joven-que-pasa-tiempo-duena-perro-linda-amistad-animales-domesticos-ilustracion-vector-longitud-completa-horizontal-interior-sala-estar-concepto-mascota_48369-40372.jpg",
    titulo: "Cómo ayudar a una mascota con ansiedad",
    descripcion:
      "Aprende técnicas para reducir el estrés y la ansiedad en perros y gatos cuando quedan solos o enfrentan cambios de ambiente.",
    link: "https://www.purina.com/es/articulos/perro/comportamiento/comprender-a-los-perros/como-calmar-la-ansiedad-y-el-miedo-en-los-perros",
  },

  {
    id: 5,
    imagen: "https://img.magnific.com/vector-premium/mujeres-diferentes-situaciones_753212-2946.jpg?semt=ais_hybrid&w=740&q=80",
    titulo: "Alimentos peligrosos para mascotas",
    descripcion:
      "Infórmate sobre comidas tóxicas para perros y gatos como chocolate, cebolla, uvas y otros alimentos comunes del hogar.",
    link: "https://www.purina.es/cuidados/perros/alimentacion/guia/alimentos-toxicos",
  },

  {
    id: 6,
    imagen: "https://img.magnific.com/vector-gratis/hombre-ilustracion-plana-mascotas-interior_23-2148968047.jpg?semt=ais_hybrid&w=740&q=80",
    titulo: "Cómo preparar tu hogar para un nuevo cachorro",
    descripcion:
      "Guía básica para adaptar espacios, elegir juguetes seguros y crear una rutina saludable para tu nueva mascota.",
    link: "https://www.purina.com/es/articulos/perro/cachorro/tener-un-cachorro/presentacion-de-un-nuevo-cachorro",
  },

];

const preguntas = [
    {
      titulo: "¿Como funciona la geolocalizacion?",
      descripcion:
        "En nuestra pagina la geolocalizacion es una herramienta sumamente util para la busqueda de las mascotas, ya que se puede indicar en donde se ha perdido o donde se ha visto la mascota.",
    },
    {
      titulo: "¿Por que deberia realizar una donacion?",
      descripcion:
        "En este caso es completamente voluntario el apoyo que desea realizar, sin embargo al realizarlo estara ayudando a mejorar nuestros servicios para ser mas eficaces en la busqueda de las mascotas perdidas.",
    },
    {
      titulo: "¿Cómo puedo ayudar a otras familias?",
      descripcion:
        "Excelente pregunta, puedes compartir información sobre mascotas perdidas, colaborar en búsquedas o donar recursos, tambien estando pendiente de los nuevos casos que han aparecido tomando todo esto en cuenta podremos colaborar entre todos para una busqueda mas eficaz.",
    },
    {
      titulo: "¿Recibo algun tipo de recompensa al ayudar?",
      descripcion:
        "No, al ayudar estara contribuyendo a una causa noble y sin fines de lucro a menos que la familia dela mascota este ofreciendo cierta recompensa, de parte de nuestra pagina recibira la satisfaccion de haber ayudado a un animalito para re encontrarse con su familia y poniendoles a salvo, no estamos de acuerdo en ofrecer ningun bien monetario para evitar cualquier tipo de intercambio comercial.",
    },
    
  ];

 
  return (
    <Container className="home-container">


      <div className="home-box">
        <h1 className="home-title">guellitas de camino a casa</h1>
        <h2 className="home-sub">
          Somos una agrupacion que vela por el bienestar de tu mascota y la de todos procurando que vuelvan seguros a su hogar,
          notificanos sobre tu perdida a nosotros y a miles de vecinos que desean aportar con esta buena causa.
        </h2>
        <div className="hero-image">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/047/830/221/small/adorable-black-cartoon-cat-peeking-over-a-surface-with-big-eyes-illustration-isolated-on-white-background-png.png"
            alt="gatito"
          />
        </div>
        <div className="home-buttons-container">
          <Link to="/reportar" className="btn-primary">
            Reportar Mascota
          </Link>
          <Link to="/vermascota" className="btn-secondary">
            Ver Mascotas
          </Link>
      </div>

      </div>

      <div className="py-5">
        <CarouselHorizontal 
          tituloSeccion="Casos 🚨" 
          items={listaMascotas} 
      />
    </div>


        <div className="my-5" style={{width: "100vw",marginLeft: "calc(-50vw + 50%)",}}>
          <img
            src="https://cdn.pixabay.com/photo/2022/07/07/13/19/cat-7307184_1280.png"
            alt="Banner mascotas"
            className="w-80 rounded"
            style={{
              height: "250px",
              objectFit: "scale-down",
            }}
          />
        </div> 

      <div className="home-boxx">
          <h2 className="home-titlee">Preguntas frecuentes</h2>
      </div>

        <div>
            <Acordion items={preguntas} />
        </div>
  


      <div className="home-boxx">
        <h2 className="home-titlee">Guias de apoyo</h2>
      </div>

      <div className='guias'>
        <div className="d-flex flex-row flex-wrap gap-4 justify-content-center">
        {guias.map((guia) => (
          <CardGuia
            id={guia.id}
            imagen={guia.imagen}
            titulo={guia.titulo}
            descripcion={guia.descripcion}
            link={guia.link}
          />
        ))}
      </div>


      </div>



    </Container>
  );
}

export default Home;