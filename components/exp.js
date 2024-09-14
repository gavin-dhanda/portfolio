import styles from './experience.module.css';

const ExperienceBlock = ({ title, subtitle, timeframe, description }) => {
    return (
    <div className={styles.experience}>
  <h2 style={{ marginTop: "1em" }} className={styles.coolGradient}>{title}</h2>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between", 
      width: "100%", 
    }}>
  <h3 style={{ margin: 0 }}>{subtitle}</h3>
  <span>{timeframe}</span>
</div>
  {description}
</div>
);}

export default ExperienceBlock;