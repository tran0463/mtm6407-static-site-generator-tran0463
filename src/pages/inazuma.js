import * as React from "react"
import * as styles from "./styles/themeStyles"
import { Link } from "gatsby"

export default function Component () {
  return (
    <main style={styles.pageStyles}>
        <h1 style={styles.headingStyles}>Inazuma</h1>
        <div>
            <img src={require('./images/Inazuma.webp').default} style={styles.imageStyle}/>
            <img src={require('./images/Enkanomiya.webp').default } style={styles.imageStyle}/>
            <img src={require('./images/Kannazuka.webp').default} style={styles.imageStyle}/>
            <img src={require('./images/Seirai_Island.webp').default} style={styles.imageStyle}/></div>
            <h2 style={styles.headingStyles}>Culture</h2>
        <div style={styles.contentStyle}>
            <p style={styles.paragraphStyles}>
            Following the abolishment of the Vision Hunt Decree and expulsion of corrupt officials, life began to slowly improve for the better, although the Sakoku Decree meant that the economy was still struggling. After Ei abolished the Sakoku Decree, life took a turn for the better as the nation is finally able to conduct general trade and an outpouring of foreign visitors.
            <br/>
            <br/>
            Inazuman samurai society often revolves around an honor system of sorts; samurai families, being relatively common in Inazuma, have an immense amount of pride and honor, often sending their children to serve in the Shogun's armies to glory and fame. Samurai are known to engage in duels from time to time. They are particularly prideful of their own skills; being bested in battle or duel by another or being helped by an outsider is typically considered to be shameful.
            </p>
        </div>
        <h4 style={styles.headingStyles}>
        <Link to="../">← Home</Link> </h4> 
    </main>
 
  )
}