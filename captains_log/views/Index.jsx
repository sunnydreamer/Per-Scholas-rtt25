const React = require("react");

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    console.log(logs);
    return (
      <div>
        <nav>
          <a href="/logs/new">Add New Log</a>
        </nav>
        <ul>
          {logs.map((log, i) => {
            return (
              <li key={i}>
                Log No. {i}
                <br />
                Title: {log.title}
                <br />
                Entry: {log.entry}
                <br />
                shipIsBroken: {log.shipIsBroken ? "true" : "false"}
                <br />
                <a href={`logs/${log._id}`}> Show Detail</a>
                <br />
                <a href={`logs/${log._id}/edit`}> Edit</a>
                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE"></input>
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
