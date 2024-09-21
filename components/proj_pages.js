// Create an image template for each project
import styles from './projects.module.css';

const ProjectImage = ({ src, alt, gitLink }) => {
  return (
    <div>
      <img src={src} alt={alt} className={styles.projImage}/>
      <h5 style={{textAlign: 'center', marginTop: 0}}> 
        <a href={gitLink} target="_blank" rel="noreferrer">GitHub Repository</a> </h5>
    </div>
  );
}

export default ProjectImage;