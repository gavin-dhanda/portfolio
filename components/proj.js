import styles from './experience.module.css';

const ProjectBlock = ({ title, subtitle, description, imagelink}) => {
    return (
    <div className={styles.experience}>
  
  <div
    style={{
      display: "flex",
      justifyContent: "space-between", 
      width: "100%", 
    }}>
    <div>
    <h2 style={{ marginTop: "1em" }} className={styles.coolGradient}>{title}</h2>
  <h3 style={{ margin: 0 }}>{subtitle}</h3>
  {description}
    </div>
  <span>
    <img src={imagelink} alt="Project Image" className={styles.projectImage}></img>
  </span>
</div>
</div>
);}

export default ProjectBlock;