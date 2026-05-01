export default function SearchBar({ onSearch }) {
  function handleKey(e) {
    if (e.key === "Enter") {
      onSearch(e.target.value.trim());
    }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar jugador..."
        className="search-input"
        onKeyDown={handleKey}
      />
    </div>
  );
}
