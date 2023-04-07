import * as React from "react"
import * as styles from "./styles/themeStyles"
import { Link } from "gatsby"

export default function Component () {
  return (
    <main style={styles.pageStyles}>
        <h1 style={styles.headingStyles}>Sumeru</h1>
        <div>
            <img src={require('./images/Sumeru.webp').default} style={styles.imageStyle}/>
            <img src={require('./images/Ardravi_Valley.webp').default } style={styles.imageStyle}/>
            <img src={require('./images/Ashavan_Realm.webp').default} style={styles.imageStyle}/>
            <img src={require('./images/Lost_Nursery.webp').default} style={styles.imageStyle}/>
            <img src={require('./images/Hypostyle_Desert.webp').default} style={styles.imageStyle}/>
            <img src={require('./images/Land_of_Lower_Setekh.webp').default} style={styles.imageStyle}/>
        </div>
            <h2 style={styles.headingStyles}>Culture</h2>
        <div style={styles.contentStyle}>
            <p style={styles.paragraphStyles}>
            While humans are predominant, there are also a few humanoid races living in Sumeru; the only known group so far is Tighnari's kind, who are considered to be a rare sight. The Aranara, a race of forest spirits, also live in Sumeru.             <br/>
            <br/>
            Sumeru has both forest and desert. The desert is stated to be a harsh place, an endless expanse of sand, scorching sun and sandstorms, and is mostly inhabited by the Eremites. It is also filled with ruins containing many mechanisms from both Khaenri'ah and King Deshret's time.             </p>
        </div>
        <h4 style={styles.headingStyles}>
        <Link to="../">← Home</Link> </h4> 
    </main>
 
  )
}