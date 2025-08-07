// Const Url For Api Github
export const url = "https://api.github.com/users/bryan14saenz/repos";

// Interface For Data
export interface Data {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}