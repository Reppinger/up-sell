class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }
    handleCheckoutClick(event) {
        this.setState({ counter: ++this.state.counter });
    }
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(CheckoutButton, { id: "checkout",
                fontSize: "20pt",
                counter: this.state.counter,
                handleClick: this.handleCheckoutClick.bind(this) }),
            React.createElement("br", null),
            React.createElement(Counter, { value: this.state.counter })
        );
    }
}
