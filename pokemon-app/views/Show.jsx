const React = require("react");
class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    const id = this.props.id;
    console.log(id);
    const myStyle = {
      color: "#ffffff",
      backgroundColor: "#000000",
    };
    return (
      <div>
        <h1 style={myStyle}> "Gotta Catch 'Em All"</h1>
        <h2> {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h2>
        <img src={`${pokemon.img}.jpg`} alt="" />
        <br></br>
        <button>
          <a href={`/pokemon/${id}/edit`}>edit </a>
        </button>

        <button>
          <a href={`/pokemon/${id}/delete`}>delete</a>
        </button>

        <br></br>
        <a href="/pokemon">back</a>
      </div>
    );
  }
}
module.exports = Show;
