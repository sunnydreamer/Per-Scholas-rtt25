const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Admin extends React.Component {
  render() {
    const { products } = this.props;
    const { cart } = this.props;
    return (
      <DefaultLayout
        title={"Flea Market"}
        cart={cart.length}
        subtitle={"Admin"}
      >
        <div>
          <div className="productShow">
            <div className="AdminImgContainer">
              <a href="/new">
                <div className="goBtn">Women</div>
              </a>
            </div>

            <div className="AdminImgContainer">
              <a href="/update">
                <div className="goBtn">Men</div>
              </a>
            </div>
            <div className="AdminImgContainer">
              <a href="/update">
                <div className="goBtn">Home</div>
              </a>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Admin;
