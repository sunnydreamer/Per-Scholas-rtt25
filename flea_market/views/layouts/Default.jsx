const React = require("React");

class DefaultLayout extends React.Component {
  render() {
    return (
      <>
        <html>
          <head>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="/css/app.css" />
          </head>
          <body>
            <nav className="navbar">
              <div className="navLeft">
                <div className="navItem">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/start-up-27/96/angel_innocent_dollar_money_finance_coin-512.png"
                    alt=""
                    className="logoImg"
                  />
                </div>
                <a href="/index">
                  <div className="title">Flea Market</div>
                </a>
              </div>
              <div className="navRight">
                <div className="navItem">
                  <a href="/cart" className="cart">
                    SHOPPING CART ({this.props.cart})
                  </a>{" "}
                </div>
              </div>
            </nav>
            <div className="trending">
              <div className="subTitle">{this.props.subtitle}</div>

              <div>✨✨✨✨✨✨✨✨✨✨✨</div>
            </div>

            {this.props.children}
          </body>
        </html>
      </>
    );
  }
}

module.exports = DefaultLayout;
