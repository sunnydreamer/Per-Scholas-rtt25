const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Sell extends React.Component {
  render() {
    const { products } = this.props;
    const { cart } = this.props;
    return (
      <DefaultLayout
        title={"Seller Central"}
        cart={cart.length}
        subtitle={"SELL"}
      >
        <div></div>
      </DefaultLayout>
    );
  }
}

module.exports = Sell;
