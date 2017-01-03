class CheckoutButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleSave = this.handleSave.bind(this)
    }

    componentWillMount() {
        console.log(ReactDOM.findDOMNode(this))
    }

    componentDidMount() {
        console.dir(ReactDOM.findDOMNode(this))
    }

    handleSave(event) {
        console.log(this, event)
    }

    render() {
        return <button
            onClick={this.handleSave}
            id={this.props.id}
            style={{fontSize: this.props.fontSize}}>Checkout</button>
    }
}

// const CheckoutButton = (props) =>
//     <button id={props.id} style={{fontSize: props.fontSize}}>Checkout</button>;
