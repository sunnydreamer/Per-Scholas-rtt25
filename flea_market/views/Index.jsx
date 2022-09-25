const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Index extends React.Component {
  render() {
    const { products } = this.props;
    const { cart } = this.props;
    return (
      <DefaultLayout
        title={"Flea Market"}
        cart={cart.length}
        subtitle={"TRENDING"}
      >
        <div>
          <div className="productShow">
            <div className="showImgContainer" id="showImgWomen">
              <a href="/women">
                <div className="goBtn">Women</div>
              </a>
            </div>

            <div className="showImgContainer" id="showImgMen">
              <a href="/men">
                <div className="goBtn">Men</div>
              </a>
            </div>

            <div className="showImgContainer" id="showImgHome">
              <a href="#">
                <div className="goBtn">Home</div>
              </a>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
