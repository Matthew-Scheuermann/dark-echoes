import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, clickSelectedEpisode] = useState(null);

  function EpisodeList() {
    return (
      <section className="list">
        <h2>Episodes</h2>
        <ol>
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => clickSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ol>
      </section>
    );
  }

  function EpisodeDetails() {
    if (selectedEpisode === null) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Please select an episode.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>Episode {selectedEpisode.id}</h2>
        <h3>{selectedEpisode.title}</h3>
        <p>{selectedEpisode.description}</p>
        <button>Play Episode</button>
      </section>
    );
  }

  return (
    <>
      <h1>Dark Echoes</h1>
      <main>
        <EpisodeList />
        <EpisodeDetails />
      </main>
    </>
  );
}
