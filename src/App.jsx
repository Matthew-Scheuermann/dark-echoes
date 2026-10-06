import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  return (
    <>
      <h1>Dark Echoes</h1>

      <main>
        <section>
          <ol>
            {episodes.map((episode) => (
              <li key={episode.id}>{episode.title}</li>
            ))}
          </ol>
        </section>
      </main>
    </>
  );
}
