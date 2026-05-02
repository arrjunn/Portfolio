import SectionWrapper from "./SectionWrapper";
import { GithubIcon } from "./icons";
import { ArrowUpRight, Star, GitFork } from "lucide-react";
import { siteConfig } from "@/lib/data";

interface GitHubRepo {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics?: string[];
  pushed_at: string;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  private: boolean;
}

const GITHUB_USER = "arrjunn";
const MAX_REPOS = 6;

// Repos to hide from the activity feed (e.g. this site, scratch repos).
// Match by exact lowercase name. Edit this list to suppress a repo.
const EXCLUDE_REPOS = new Set<string>([
  "portfolio",
  "arrjunn",
  ".github",
]);

async function getRecentRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=50`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return [];
    const repos: GitHubRepo[] = await res.json();
    return repos
      .filter(
        (r) =>
          !r.fork &&
          !r.archived &&
          !r.private &&
          !EXCLUDE_REPOS.has(r.name.toLowerCase())
      )
      .slice(0, MAX_REPOS);
  } catch {
    return [];
  }
}

function formatRelativeTime(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const day = 86_400_000;
  if (diffMs < day) return "today";
  if (diffMs < 2 * day) return "yesterday";
  if (diffMs < 30 * day) return `${Math.floor(diffMs / day)} days ago`;
  if (diffMs < 365 * day) {
    const months = Math.floor(diffMs / (30 * day));
    return `${months} month${months === 1 ? "" : "s"} ago`;
  }
  const years = Math.floor(diffMs / (365 * day));
  return `${years} year${years === 1 ? "" : "s"} ago`;
}

const langColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "C++": "#f34b7d",
  C: "#555555",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  Shell: "#89e051",
  Jupyter: "#DA5B0B",
  Vue: "#41b883",
  Svelte: "#ff3e00",
};

export default async function GitHubActivity() {
  const repos = await getRecentRepos();

  if (repos.length === 0) return null;

  return (
    <SectionWrapper
      eyebrow="From the workshop"
      title="Recent on GitHub"
      description={`Auto-pulled from my latest public repos at github.com/${GITHUB_USER}. Refreshes hourly — push something and it shows up.`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <a
            key={repo.full_name}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-border-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 transition-all duration-200 flex flex-col"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2 min-w-0">
                <GithubIcon size={14} className="text-text-tertiary flex-shrink-0" />
                <h3 className="text-sm font-semibold text-text-primary group-hover:text-accent-primary transition-colors truncate">
                  {repo.name}
                </h3>
              </div>
              <ArrowUpRight
                size={14}
                className="text-text-tertiary group-hover:text-accent-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0"
              />
            </div>

            <p className="text-xs text-text-secondary leading-relaxed line-clamp-3 mb-4 flex-1">
              {repo.description ?? "No description provided."}
            </p>

            <div className="flex items-center justify-between gap-3 text-[10px] font-mono text-text-tertiary">
              <span className="flex items-center gap-3">
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: langColors[repo.language] ?? "#999" }}
                    />
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="flex items-center gap-1">
                    <Star size={10} />
                    {repo.stargazers_count}
                  </span>
                )}
                {repo.forks_count > 0 && (
                  <span className="flex items-center gap-1">
                    <GitFork size={10} />
                    {repo.forks_count}
                  </span>
                )}
              </span>
              <span className="text-text-tertiary/70">
                updated {formatRelativeTime(repo.pushed_at)}
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center text-xs font-mono text-text-tertiary/70">
        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-text-tertiary hover:text-text-primary transition-colors"
        >
          see all repos on github
          <ArrowUpRight size={11} />
        </a>
      </div>
    </SectionWrapper>
  );
}
