

const BlogCard = ({title, body}) => {
  const style = {
    card: {
      width: "300px",
      height: "300px",
      border: "2px solid black",
      borderRadius: "10px",
      margin: "10px",
      padding: "10px",
      backgroundColor: "black",
      color: "white",

    },
  };

  return (
    <div style={style.card}>
      <h4 style={{color: "green"}}> {title}</h4>
      <p> {body}</p>
      </div>
  )
}

export default BlogCard