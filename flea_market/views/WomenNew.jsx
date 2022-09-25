const React = require("react");
const DefaultLayout = require("./layouts/Default");

class WomanNew extends React.Component {
  render() {
    const { products } = this.props;
    const { cart } = this.props;
    return (
      <DefaultLayout
        title={"Flea Market"}
        cart={cart.length}
        subtitle={"WOMEN"}
      >
        <div>
          <div className="pageNav">
            <div className="backContainer">
              {" "}
              ⬅️{" "}
              <a className="backInProductPage" href="/index">
                back
              </a>
            </div>
            <div>
              <a href="/women" className="pageAdmin">
                Admin Mode (ON)
              </a>
            </div>
          </div>

          <div className="newProduct">
            <form action="/women/admin" method="POST">
              Image Link:
              <input type="text" name="productImg" required />
              <br />
              <br />
              Product Name: <input type="text" name="productName" required />
              <br />
              <br />
              Price:
              <input type="text" name="price" required />
              <br />
              <br />
              Seller:
              <input type="text" name="seller" required />
              <br />
              <br />
              isUsed:
              <input type="checkbox" name="isUsed" />
              <br />
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = WomanNew;
