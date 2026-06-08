export default function StoryModal({ person, onClose }) {
  if (!person) return null;

  return (
    <div className="modal">
        <div className="modal-content">
            <h1>{person.name}</h1>
            <p>{person.story}</p>
            <button onClick={onClose}>Close</button>
        </div>
    </div>
  );
}