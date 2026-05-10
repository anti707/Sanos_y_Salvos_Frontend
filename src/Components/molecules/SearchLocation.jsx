import { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

function SearchLocation({ onResult }) {

  const [query, setQuery] = useState("");

  const handleSearch = async () => {

    try {

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json`
      );

      const data = await response.json();

      if (data.length > 0) {

        const place = data[0];

        onResult({
          lat: parseFloat(place.lat),
          lon: parseFloat(place.lon),
          name: place.display_name
        });
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search-location">

      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar ubicación..."
      />

      <Button
        text="Buscar"
        onClick={handleSearch}
      />

    </div>
  );
}

export default SearchLocation;