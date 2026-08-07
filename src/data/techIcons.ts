// Maps a tech/tool name to an authentic, colorful brand icon.
// Two sources, used only where a real logo exists — nothing here is faked:
//   - skillicons.dev: multi-tone brand icons (e.g. Python's blue/yellow snake)
//   - simpleicons (cdn.simpleicons.org): flat brand-colored icons
// Anything without a real logo (concepts like "NLP", "ETL", or libraries with
// no official mark like Matplotlib/Seaborn) is intentionally left unmapped —
// it just renders as a plain text pill instead of a fabricated icon.

type IconSource = "skillicons" | "simpleicons";

interface IconEntry {
  source: IconSource;
  slug: string;
}

export const TECH_ICON_MAP: Record<string, IconEntry> = {
  Python: { source: "skillicons", slug: "py" },
  "C++": { source: "skillicons", slug: "cpp" },
  "C#": { source: "skillicons", slug: "cs" },
  Git: { source: "skillicons", slug: "git" },
  GitHub: { source: "skillicons", slug: "github" },
  Flask: { source: "skillicons", slug: "flask" },
  FastAPI: { source: "skillicons", slug: "fastapi" },
  HTML: { source: "skillicons", slug: "html" },
  CSS: { source: "skillicons", slug: "css" },
  JavaScript: { source: "skillicons", slug: "js" },
  PyTorch: { source: "skillicons", slug: "pytorch" },
  TensorFlow: { source: "skillicons", slug: "tensorflow" },
  "Scikit-Learn": { source: "skillicons", slug: "sklearn" },
  OpenCV: { source: "skillicons", slug: "opencv" },
  "VS Code": { source: "skillicons", slug: "vscode" },
  PostgreSQL: { source: "skillicons", slug: "postgres" },

  NumPy: { source: "simpleicons", slug: "numpy" },
  Pandas: { source: "simpleicons", slug: "pandas" },
  "Power BI": { source: "simpleicons", slug: "powerbi" },
  "Hugging Face": { source: "simpleicons", slug: "huggingface" },
};

export function getTechIconUrl(name: string): string | null {
  const entry = TECH_ICON_MAP[name];
  if (!entry) return null;
  return entry.source === "skillicons"
    ? `https://skillicons.dev/icons?i=${entry.slug}`
    : `https://cdn.simpleicons.org/${entry.slug}`;
}