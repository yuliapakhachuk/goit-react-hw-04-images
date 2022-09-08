import { useState } from "react";
import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";

export function App() {

  const [search, setSearch] = useState("");

  const filterChanging = (searchValue) => { setSearch(searchValue) }

    return (
      <div className="App">
        <Searchbar 
          onSubmit={filterChanging}
        />
        <ImageGallery
          queryName={search}
        />
      </div>
    );
};
