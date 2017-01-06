class CheckoutButton extends React.Component {

    componentWillMount() {
        console.log(ReactDOM.findDOMNode(this));
    }

    componentDidMount() {
        console.dir(ReactDOM.findDOMNode(this));
    }

    render() {
        return React.createElement(
            "button",
            {
                onClick: this.props.handleClick,
                id: this.props.id,
                style: { fontSize: this.props.fontSize } },
            "Checkout clicked ",
            this.props.counter,
            " times."
        );
    }
}
