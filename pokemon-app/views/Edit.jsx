const React = require("react");
class Edit extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    const id = this.props.id;
    console.log(this.props);
    const myStyle = {
      color: "#ffffff",
      backgroundColor: "#000000",
    };
    return (
      <div>
        <h1 style={myStyle}> EDIT POKEMON</h1>
        <h2> {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h2>
        <img src={`${pokemon.img}.jpg`} alt="" />
        <br></br>
        <form action={`/pokemon/${id}`} method="POST">
          New Name: <input type="text" name="name" />
          <br />
          New Image: <input type="text" name="img" />
          <br />
          <input type="submit" name="" value="Comfirm Change" />
        </form>
        <a href={`/pokemon/${id}`}>back</a>
      </div>
    );
  }
}
module.exports = Edit;
