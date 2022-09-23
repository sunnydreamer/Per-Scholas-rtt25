const React = require("react");

class Show extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <div>
        <nav>
          <a href="/logs"> Back to Logs</a>
        </nav>
        Title: {log.title}
        <br />
        Entry: {log.entry}
        <br />
        shipIsBroken:{log.shipIsBroken ? "True" : "False"}
      </div>
    );
  }
}
module.exports = Show;
