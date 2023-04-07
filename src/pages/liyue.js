import * as React from "react"
import * as styles from "./styles/themeStyles"
import { Link } from "gatsby"

export default function Component () {
  return (
    <main style={styles.pageStyles}>
        <h1 style={styles.headingStyles}>Liyue</h1>
        <div>
            <img src={require('./images/Liyue.webp').default} style={styles.imageStyle}/>
            <img src={require('./images/Sea_of_Clouds.webp').default } style={styles.imageStyle}/>
            <img src={require('./images/Minlin.webp').default} style={styles.imageStyle}/>
            <img src={require('./images/The_Chasm.webp').default} style={styles.imageStyle}/></div>
            <h2 style={styles.headingStyles}>Culture</h2>
        <div style={styles.contentStyle}>
            <p style={styles.paragraphStyles}>
            Compared to Mondstadt's lush plains, Liyue's rocky and mountainous geography is less suited for agriculture. Nevertheless, places like Qingce Village have managed to build terraced rice fields, whose crops can then be taken to Liyue Harbor to be sold. Sunsettia trees can be found across Liyue.
            <br/>
            <br/>
            Over 3,000 years ago, Guili Plains and its surrounding areas were bountiful and one of its rulers, Guizhong, led her people in making agriculture their livelihood. However, during the Archon War, the area was destroyed to such an extent that even in modern times, the land has never completely recovered. While some trees and grasses have managed to grow, the land is largely uninhabitable by humans. 
            </p>
        </div>
        <h4 style={styles.headingStyles}>
        <Link to="../">← Home</Link> </h4> 
    </main>
 
  )
}