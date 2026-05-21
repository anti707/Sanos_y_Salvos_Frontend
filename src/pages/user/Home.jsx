import { Container } from 'react-bootstrap';
import "../../css/pages/Home.css";
import "../../Components/molecules/CardHorizontal"
import CardHorizontal from "../../Components/molecules/CardHorizontal";
import "../../Components/organisms/CardCarousel"
import CardCarousel from '../../Components/organisms/CardCarousel';
import CardGuia from "../../Components/molecules/CardGuia";
import Acordion from '../../Components/molecules/Acordion';




function Home() {

    const mascotas = [
    {
      id: 1,
      imagen: "https://placedog.net/500",
      titulo: "Max",
      descripcion: "Perrito muy juguetón responde al nombre de max, lleva perdido 1 dia",
      fecha: "Hace 3 minutos",
    },

    {
      id: 3,
      imagen: "https://placedog.net/501",
      titulo: "Rocky",
      descripcion: "perrito amigable con problemas de diabetes, se perdio hace 7 horas en la florida",
      fecha: "Hace 1 hora",
    },

    {
      id: 4,
      imagen: "https://placedog.net/502",
      titulo: "dios  del inframundo",
      descripcion: "perrito jugueton se perdio cerca de los cerrillos",
      fecha: "Hace 3 hora",
    },

    {
      id: 5,
      imagen: "https://placedog.net/503",
      titulo: "lucho",
      descripcion: "perrito muy asustadizo, se perdio por culpa de los juegos artificiales ayer cerca de la victoria",
      fecha: "Hace 1 hora",
    },
  ];

  const guias = [

  {
    id: 1,
    imagen: "https://png.pngtree.com/thumb_back/fh260/background/20210326/pngtree-cute-cartoon-dog-wallpaper-image_595508.jpg",
    titulo: "¿Qué hacer si tu mascota se pierde?",
    descripcion:
      "Aprende los primeros pasos para encontrar a tu mascota rápidamente: avisar a vecinos, publicar en redes sociales y recorrer la zona.",
    fecha: "Hace 10 minutos",
  },

  {
    id: 2,
    imagen: "https://us.123rf.com/450wm/tatianastulbo/tatianastulbo1610/tatianastulbo161000200/67294177-clínica-veterinaria-interior-a-su-vez-a-el-veterinario-médico-trata-a-un-perro-las-personas-con.jpg?ver=6",
    titulo: "Cómo actuar en una emergencia veterinaria",
    descripcion:
      "Conoce señales de alerta, cómo reaccionar ante accidentes y qué incluir en un kit básico de primeros auxilios para mascotas.",
    fecha: "Hace 30 minutos",
  },

  {
    id: 3,
    imagen: "https://img.magnific.com/vector-premium/propietaria-dibujos-animados-sentada-sofa-gatos-perros-casa-escena-adorable-acogedora-sala-estar_746655-9484.jpg?semt=ais_hybrid&w=740&q=80",
    titulo: "Consejos para cuidar perros mayores",
    descripcion:
      "Descubre recomendaciones sobre alimentación, ejercicio y cuidados especiales para mejorar la calidad de vida de perros senior.",
    fecha: "Hace 1 hora",
  },

  {
    id: 4,
    imagen: "https://img.magnific.com/vector-premium/mujer-joven-que-pasa-tiempo-duena-perro-linda-amistad-animales-domesticos-ilustracion-vector-longitud-completa-horizontal-interior-sala-estar-concepto-mascota_48369-40372.jpg",
    titulo: "Cómo ayudar a una mascota con ansiedad",
    descripcion:
      "Aprende técnicas para reducir el estrés y la ansiedad en perros y gatos cuando quedan solos o enfrentan cambios de ambiente.",
    fecha: "Hace 2 horas",
  },

  {
    id: 5,
    imagen: "https://img.magnific.com/vector-premium/mujeres-diferentes-situaciones_753212-2946.jpg?semt=ais_hybrid&w=740&q=80",
    titulo: "Alimentos peligrosos para mascotas",
    descripcion:
      "Infórmate sobre comidas tóxicas para perros y gatos como chocolate, cebolla, uvas y otros alimentos comunes del hogar.",
    fecha: "Hace 3 horas",
  },

  {
    id: 6,
    imagen: "https://img.magnific.com/vector-gratis/hombre-ilustracion-plana-mascotas-interior_23-2148968047.jpg?semt=ais_hybrid&w=740&q=80",
    titulo: "Cómo preparar tu hogar para un nuevo cachorro",
    descripcion:
      "Guía básica para adaptar espacios, elegir juguetes seguros y crear una rutina saludable para tu nueva mascota.",
    fecha: "Hace 5 horas",
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
      </div>

              <div className="my-5" style={{width: "100vw",marginLeft: "calc(-50vw + 50%)",}}>
          <img
            src="https://media.istockphoto.com/id/2168279088/es/vector/estampado-de-pata-azul-y-patrón-de-corazón-sobre-fondo-claro.jpg?s=612x612&w=0&k=20&c=4qpWz_bAHOdB_v3KRRwiwqGwIdb9qerfz2cvjs5NMuc="
            alt="Banner mascotas"
            className="w-80 rounded"
            style={{
              height: "250px",
              objectFit: "scale-down",
            }}
          />
        </div>

      <div className="d-flex flex-column gap-4 align-items-right">
        {mascotas.map((mascota) => (
          <CardHorizontal
            key={mascota.id}
            imagen={mascota.imagen}
            titulo={mascota.titulo}
            descripcion={mascota.descripcion}
            fecha={mascota.fecha}
          />
        ))}
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
            key={guia.id}
            imagen={guia.imagen}
            titulo={guia.titulo}
            descripcion={guia.descripcion}
          />
        ))}
      </div>


      </div>



    </Container>
  );
}

export default Home;