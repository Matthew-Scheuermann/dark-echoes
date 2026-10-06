import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, clickSelectedEpisode] = useState();

  console.log(selectedEpisode);

  return (
    <>
      <h1>Dark Echoes</h1>
      <main>
        <episodeList />
      </main>
    </>
  );
}
