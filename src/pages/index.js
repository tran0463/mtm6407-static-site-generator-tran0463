import * as React from "react"
import * as styles from "./styles/themeStyles"
import { Link } from "gatsby"

const links = [
  {
    text: "Mondstadt",
    url: "/mondstadt",
    description:
      "Mondstadt is one of the seven regions in Teyvat, and the first in which the Traveler starts to look for their lost sibling. It is the nation that worships Lord Barbatos, the Anemo Archon.",
    color: "#49c9b0",
  },
  {
    text: "Liyue",
    url: "/liyue",
    description:
      "Liyue (Chinese: 璃月 Líyuè) is one of the seven regions in Teyvat. It is the nation that worships Rex Lapis, the Geo Archon.",
    color: "#de6026",
  },
  {
    text: "Inazuma",
    url: "/inazuma",
    description:
      "Inazuma (Japanese: 稲妻 Inazuma) is one of the seven regions in Teyvat. It is an archipelagic region that worships Raiden Shogun, the Electro Archon, who is also the leader of its governing body, the Inazuma Shogunate. Inazuma is located approximately 4 km southeast from Liyue Harbor and is a close neighbor with the Dark Sea.",
    color: "#9346eb",
  },
  {
    text: "Sumeru",
    url: "/sumeru",
    description:
      "Sumeru is one of the seven regions in Teyvat. It is the nation that worships Lesser Lord Kusanali, the Dendro Archon. ",
    color: "#3b9936",
  }
]

const IndexPage = () => {
  return (
    <main style={styles.pageStyles}>
      <h1 style={styles.headingStyles}>
        Genshin Impact
        <br />
        <span style={styles.headingAccentStyles}>— Available nations in Genshin Impact</span>
      </h1>
      <p style={styles.paragraphStyles}>
      Currently, only four nations and its regions are available: Mondstadt, Liyue, Inazuma, and Sumeru.
      </p>
      <ul style={styles.listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...styles.listItemStyles, color: link.color }}>
            <span>
              <Link
                style={styles.linkStyle}
                to={`${link.url}`}
              >
                {link.text}
              </Link>
              {link.badge && (
                <span style={styles.badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={styles.descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
