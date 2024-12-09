import PlayerCard from "./PlayerCard"
const PlayerList = () => {
  const players = [
    {
      img: " Marcus Rashford.jpg",
      name: "Marcus Rashford",
      position: "midfielder",
      team: "Manchester United"
    },
    {
      img: " Erling Haaland.jpg",
      name: "Erling Haaland",
      position: "forward",
      team: "Manchester City"
    },
    {
      img: " Kevin De Bruyne.jpg",
      name: "Kevin De Bruyne",
      position: "midfielder",
      team: "Manchester City"
    },
    {
      img: " Harry Kane.jpg",
      name: "Harry Kane",
      position: "forward",
      team: "Tottenham Hotspur"
    },
    {
      img: " Marcus Rashford.jpg",
      name: "Marcus Rashford",
      position: "midfielder",
      team: "Manchester United"
    },
    {
      img: " Erling Haaland.jpg",
      name: "Erling Haaland",
      position: "forward",
      team: "Manchester City"
    },
    {
      img: " Kevin De Bruyne.jpg",
      name: "Kevin De Bruyne",
      position: "midfielder",
      team: "Manchester City"
    },
    {
      img: " Harry Kane.jpg",
      name: "Harry Kane",
      position: "forward",
      team: "Tottenham Hotspur"
    }
  ];

  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      padding: "10px",
    }
  }
  return (
    <div style={styles.grid}>
      {players.map((player) => (
        <PlayerCard
          img={player.img}
          name={player.name}
          position={player.position}
          team={player.team}
        />
      ))}
    </div>
  )
}

export default PlayerList