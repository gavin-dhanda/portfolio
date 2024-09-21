import styles from './items.module.css';

const ProjectBlock = ({ title, subtitle, description, imagelink}) => {
    return (
    <div className={styles.experience}>
      <div
        style={{
        display: "flex",
        justifyContent: "space-between", 
        width: "100%", 
        alignItems: "center",
      }}>
        <div style={{ flex : 1.2 }}>
          <h2 style={{ marginTop: "1em" }} className={styles.coolGradient}>{title}</h2>
          <h3 style={{ margin: 0 }}>{subtitle}</h3>
          {description}
        </div>
        <div style={{ flex : 0.1 }}></div>
        <span style={{ flex : 0.7 }}>
          <img src={imagelink} alt="Project Image" className={styles.projectImage}></img>
        </span>
      </div>
    </div>
);}

export default ProjectBlock;