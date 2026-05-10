import Navbar from "../organisms/Navbar";
import Foother from "../organisms/Foother";
import MapSection from "../organisms/MapSection";

function HomeMap() {

  return (
    <>
      <Navbar />
      <main>
        <MapSection />
      </main>
      <Foother />

    </>
  );
}

export default HomeMap;