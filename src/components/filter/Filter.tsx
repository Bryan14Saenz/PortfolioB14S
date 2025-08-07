// Import For Context
import { useFilterContext } from "../../context/FilterContext";
// Import For Style
import "./filter.scss";

// Filter Component
export const Filter = () => {
  // Context
  const { language, filter, setFilter, setIndex } = useFilterContext();

  return (
    <div className="filter">
      {language.map((language) => (
        <button
          key={language}
          className={filter === language ? "activo" : ""}
          onClick={() => {
            setFilter(language);
            setIndex(0);
          }}
        >
          {language}
        </button>
      ))}
    </div>
  );
};
