import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../css/pages/Home.css";
import "../../Components/molecules/CardHorizontal"
import CardHorizontal from "../../Components/molecules/CardHorizontal";
import "../../Components/organisms/CardCarousel"
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
      titulo: 'Firulais buscando hogar',
      descripcion: 'Se perdió cerca de la plaza central. Lleva collar azul.',
      fecha: 'Perdido hace 2 días'
    },
    {
      imagen: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
      titulo: 'Michi extraviado',
      descripcion: 'Gato siamés de ojos azules, muy asustadizo.',
      fecha: 'Perdido ayer'
    },
    {
      imagen: 'https://placedog.net/500',
      titulo: 'Max',
      descripcion: 'Perrito muy juguetón responde al nombre de max, lleva perdido 1 dia',
      fecha: 'Perdido ayer'
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
      titulo: "¿Como luchar con la ansiedad de perder una mascota?",
      descripcion:
        "Busca en los alrededores, avisa a vecinos y publica fotos recientes.",
    },
    {
      titulo: "¿Cómo actuar en una emergencia veterinaria?",
      descripcion:
        "Mantén la calma y contacta rápidamente a un veterinario cercano.",
    },
    {
      titulo: "¿Cómo ayudar a una mascota con ansiedad?",
      descripcion:
        "Crea un ambiente tranquilo y mantén rutinas estables.",
    },
    {
      titulo: "¿Cómo calmar mi ansiedad por la perdida?",
      descripcion:
        "Crea un ambiente tranquilo, respira hondo, intenta distraerte.",
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
          <Link to="/Buscar" className="btn-secondary">
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