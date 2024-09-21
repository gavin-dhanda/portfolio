// Create an image template for each project
import styles from './projects.module.css';

const ProjectImage = ({ src, alt, gitLink }) => {
  return (
    <div>
        <div className={styles.linkBox}>
            <h5> <a href={"/"} >Home</a> </h5>
            <h5> <a href={"/projects"} >Back</a> </h5>
            <h5> <a href={gitLink} target="_blank" rel="noreferrer">GitHub</a> </h5>
        </div>
        <img src={src} alt={alt} className={styles.projImage}/>
    </div>
  );
}


const ProjectPage = ({ src, alt, gitLink }) => {
  return (
    <div>
    <ProjectImage src={src} alt={alt} gitLink={gitLink} />
    <h2 style={{marginTop: "0.5em"}}> Project Description </h2>
    </div>
  );
}

export default ProjectPage;