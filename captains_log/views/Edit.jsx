const React = require("react");

class Edit extends React.Component {
  render() {
    return (
      <form action={`/logs/${this.props.log._id}?_method=PUT`} method="POST">
        Title:{" "}
        <input type="text" name="title" defaultValue={this.props.log.title} />
        <br />
        Entry:{" "}
        <input type="text" name="entry" defaultValue={this.props.log.entry} />
        <br />
        shipIsBroken:
        {this.props.log.shipIsBroken ? (
          <input type="checkbox" name="shipIsBroken" defaultChecked />
        ) : (
          <input type="checkbox" name="shipIsBroken" />
        )}
        <br />
        <input type="submit" value="Submit Changes" />
      </form>
    );
  }
}
module.exports = Edit;
