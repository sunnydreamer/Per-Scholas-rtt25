const React = require("react");

class Index extends React.Component {
  render() {
    const { pokemons } = this.props;
    const myStyle = {
      color: "#ffffff",
      backgroundColor: "#000000",
    };
    return (
      <div>
        <h1 style={myStyle}> See All The Pokemon!</h1>
        {pokemons.map((pokemon, i) => {
          return (
            <a href={`/pokemon/${i}`}>
              <li>
                {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
              </li>
            </a>
          );
        })}
      </div>
    );
  }
}

module.exports = Index;
