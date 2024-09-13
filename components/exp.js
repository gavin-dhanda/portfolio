const ExperienceBlock = ({ title, subtitle, timeframe, description  }) => {
    return (
    <div className="experience">
  <h2 style={{lineHeight: "0.1em"}}>{title}</h2>
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