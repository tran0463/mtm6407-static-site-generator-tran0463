import * as React from "react"
import * as styles from "./styles/themeStyles"
import { Link } from "gatsby"

export default function Component () {
  return (
    <main style={styles.pageStyles}>
        <h1 style={styles.headingStyles}>Mondstadt</h1>
        <div>
            <img src={require('./images/Mondstadt.webp').default} style={styles.imageStyle}/>
            <img src={require('./images/Dragonspine.webp').default } style={styles.imageStyle}/>
            <img src={require('./images/Starfell_Valley.webp').default} style={styles.imageStyle}/></div>
            <h2 style={styles.headingStyles}>Culture</h2>
        <div style={styles.contentStyle}>
            <p style={styles.paragraphStyles}>
                Overall, Mondstadt has a casual, laid-back atmosphere derived from their belief in freedom over all else. There has been little socioeconomic stratification ever since the dissolution of the aristocracy 1000 years ago, although certain families such as the Gunnhildr Clan and the Ragnvindr Family enjoy a good reputation due to their long lineages and notable contributions to Mondstadt. <br/><br/>
            
                Alcohol plays a major role in Mondstadt both socially and economically. As a result, Mondstadt has a large drinking culture, which in turn has led to a relatively high amount of alcoholics. Nimrod talks about the "Four Drunkards," who are allegedly the biggest drinkers in Mondstadt, though he himself is a relapsing alcoholic; this has earned him the consternation of his wife Eury and his confessor Sister Victoria, and Charles has to contact Eury whenever his drinking gets out-of-hand. Diona's hatred of alcohol stems from her father Draff's personality change whenever he is drunk, though she fails to recognize that it is a direct response to his drinking habits. <br/><br/>
            
                After Grace received several complaints from children about drunk fathers stumbling out of wardrobes, the Church of Favonius now sends deaconesses to pray over newly built wardrobes to ward off such incidents. However, beyond hearing confessions and making prayers, the Church of Favonius seems to have little ability to address the real source of the problem, much to the frustration of confessors like Sister Victoria. 
            </p>
        </div>
        <h4 style={styles.headingStyles}>
        <Link to="../">← Home</Link> </h4> 
    </main>
 
  )
}