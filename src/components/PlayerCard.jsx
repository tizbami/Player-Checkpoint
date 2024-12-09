
const PlayerCard = ({ img, name, position, team }) => {
  const styles = {
    div: {
      width: "300px",
      height: "300px",
      border: "2px solid black",
      borderRadius: "10px",
      margin: "10px",
      padding: "10px",
      backgroundColor: "black",
      color: "white",
    },
    img: {
      width: "100%",
      height: "100%",
      borderRadius: "10px",
    },
    h4: {
      color: "green",
    },
  };
  

  return (
    <div style={styles.div}>
      <img src={img} alt={name}  style={styles.img}/>
      <h4 style={styles.h4}>{name}</h4>
      <p>{position}</p>
      <p>{team}</p>
    </div>
  )
}

export default PlayerCard