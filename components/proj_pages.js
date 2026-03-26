import styles from './projects.module.css';

const ProjectPage = ({ src, alt, gitLink }) => {
  const fileType = src.split(".").pop();

  return (
    <div>
      {fileType === "jpg" &&
        <img src={src} alt={alt} className={styles.projImage} />}

      {fileType === "mp4" &&
        <video controls className={styles.projImage}>
          <source src={src} type="video/mp4" />
          Your browser does not support video.
        </video>}

      <div className={styles.linkBox}>
        <a href="/projects" className={styles.linkPill}>← All Projects</a>
        {gitLink !== "" && (
          <a href={gitLink} target="_blank" rel="noreferrer" className={styles.linkPill}>
            View on GitHub →
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectPage;
