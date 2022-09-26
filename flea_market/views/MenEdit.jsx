const React = require("react");
const DefaultLayout = require("./layouts/Default");

class MenEdit extends React.Component {
  render() {
    const { product } = this.props;
    const { cart } = this.props;
    return (
      <DefaultLayout
        title={"Flea Market"}
        cart={cart.length}
        subtitle={"Men Edit Page"}
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
              <a href="/men" className="pageAdmin">
                Admin Mode (ON)
              </a>
            </div>
          </div>

          <div className="newProduct">
            <form
              action={`/men/admin/${this.props.product._id}?_method=PUT`}
              method="post"
            >
              Image Link:
              <input
                type="text"
                name="productImg"
                defaultValue={this.props.product.productImg}
              />
              <br />
              <br />
              Product Name:{" "}
              <input
                type="text"
                name="productName"
                defaultValue={this.props.product.productName}
              />
              <br />
              <br />
              Price:
              <input
                type="text"
                name="price"
                defaultValue={this.props.product.price}
              />
              <br />
              <br />
              Seller:
              <input
                type="text"
                name="seller"
                defaultValue={this.props.product.seller}
              />
              <br />
              <br />
              isUsed:
              {this.props.product.isUsed ? (
                <input type="checkbox" name="isUsed" defaultChecked />
              ) : (
                <input type="checkbox" name="isUsed" />
              )}
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

module.exports = MenEdit;
