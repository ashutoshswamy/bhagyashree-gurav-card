import { FaInstagram } from "react-icons/fa";
import { FiArrowUpRight, FiGlobe } from "react-icons/fi";

const links = [
  {
    title: "Solvian Group",
    subtitle: "Instagram",
    href: "https://www.instagram.com/solvian.group?hvrq=MWY0eDl3OWNwNHQ1eQ==",
    icon: FaInstagram,
    tone: "coral",
  },
  {
    title: "Terminal 45 / BHS",
    subtitle: "Instagram",
    href: "https://www.instagram.com/terminal45_bhs?knvt=dnZjZWkzbjdvcG96",
    icon: FaInstagram,
    tone: "ink",
  },
  {
    title: "ATX Fitness Gym",
    subtitle: "Instagram",
    href: "https://www.instagram.com/atxfitnessgym?jplx=cHd6Zm4ydHBqeTBs",
    icon: FaInstagram,
    tone: "mint",
  },
  {
    title: "ATX Kothrud",
    subtitle: "Instagram",
    href: "https://www.instagram.com/atxkothrud?knvt=NmdkYmlrN3o3czVs",
    icon: FaInstagram,
    tone: "blue",
  },
  {
    title: "Solvian Consultancy",
    subtitle: "Visit the website",
    href: "https://www.solvianconsultancy.com",
    icon: FiGlobe,
    tone: "gold",
  },
] as const;

export default function Home() {
  return (
    <main className="page-shell">
      <section className="profile" aria-labelledby="profile-name">
        <h1 id="profile-name">Bhagyashree Gurav</h1>
        <p className="intro">
          A small collection of places to find my work, communities, and spaces online.
        </p>
      </section>

      <nav className="link-list" aria-label="Bhagyashree Gurav links">
        {links.map((link) => (
          <a
            className="link-card"
            href={link.href}
            key={link.title}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className={`link-mark link-mark-${link.tone}`} aria-hidden="true">
              <link.icon size={24} />
            </span>
            <span className="link-copy">
              <span className="link-title">{link.title}</span>
              <span className="link-subtitle">{link.subtitle}</span>
            </span>
            <span className="link-arrow" aria-hidden="true">
              <FiArrowUpRight size={21} />
            </span>
          </a>
        ))}
      </nav>
    </main>
  );
}
