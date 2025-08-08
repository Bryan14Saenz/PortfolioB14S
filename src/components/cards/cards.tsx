// Import For Context
import { useFilterContext } from "../../context/FilterContext";


export const Cards = () => {
  // Context
  const { repoView } = useFilterContext();

  // Card Repo
  const cards = repoView.map((repo) => (
    <button
      key={repo.id}
      onClick={() => window.open(repo.html_url, "_blank")}
      className="relative cursor-pointer w-[250px] p-4 mt-2 mx-auto z-5 rounded-xl border border-[inherit] text-left hover:scale-105 transition-all duration-300"
    >
      <h2 className="text-md font-bold">{repo.name}</h2>
      <p className="mt-2 text-sm text-gray-600">
        {repo.description || "No description available"}
      </p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-1 text-xs text-gray-400">
          <span>⭐ {repo.stargazers_count}</span>
          <span>🍴 {repo.forks_count}</span>
          {repo.language && <span>📝 {repo.language}</span>}
        </div>
        <span className="text-xs text-gray-500">
          {new Date(repo.updated_at).toLocaleDateString()}
        </span>
      </div>
    </button>
  ));

  return <div className="flex flex-col justify-center items-center">{cards}</div>;
};
