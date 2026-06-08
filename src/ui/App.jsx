import { useState } from "react";
import Scene from "../world/Scene";
import StoryModal from "./StoryModal";

export default function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <>
      <Scene onPersonClick={setSelectedPerson} />

      <StoryModal
        person={selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />

    </>
  );
}