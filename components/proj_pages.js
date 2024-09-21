import styles from './projects.module.css';

const ProjectImage = ({ src, alt, gitLink }) => {
  const fileType = src.split(".").pop();

  return (
    <div>
        <div className={styles.linkBox}>
            <h5> <a href={"/"} >Home</a> </h5>
            <h5> <a href={"/projects"} >Back</a> </h5>

            {gitLink !== "" && (
            <h5> <a href={gitLink} target="_blank" rel="noreferrer">GitHub</a> </h5>)}

        </div>
        {fileType === "jpg" && 
        <img src={src} alt={alt} className={styles.projImage}/>}

        {fileType === "mp4" && 
        <video controls className={styles.projImage}>
            <source src={src} type="video/mp4" />
            Your browser does not support video.
        </video>}
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