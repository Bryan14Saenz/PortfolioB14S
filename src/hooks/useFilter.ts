// Import For React
import { useState } from "react"
// Import For Hook
import { useFetch } from "./useFetch";
// Import For Services
import { url, type Data } from "../services/api";

// Const RepoPage
const repoPage = 3;

// Hook useFilter
export const useFilter = () => {
  // Call UseFilter
  const { data } = useFetch<Data[]>(url);

  // Filter not null
  const reposWithLanguage = data?.filter(repo => repo.language !== null && repo.language !== undefined) || [];

  // Reformulation A Language
  const language = [
    'Todos',
    ...new Set(reposWithLanguage.map((data) => data.language))
  ]

  // State
  const [filter, setFilter] = useState('Todos');
  const [index, setIndex] = useState(0);

  // Filter For Repo
  const repoFilter = filter === 'Todos'
    ? reposWithLanguage
    : reposWithLanguage.filter((repo) =>
      repo.language && repo.language.toLowerCase() === filter.toLowerCase()
    );

  const totalPage = Math.ceil((repoFilter || []).length / repoPage);

  const repoView = repoFilter.slice(
    index * repoPage,
    index * repoPage + repoPage
  );

  // Eventos de Cambio
  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? totalPage - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === totalPage - 1 ? 0 : prevIndex + 1
    );
  };

  return {
    language,
    filter,
    setFilter,
    setIndex,
    repoView,
    handlePrev,
    handleNext
  };
}