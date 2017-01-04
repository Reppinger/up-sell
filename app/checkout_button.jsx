class CheckoutButton extends React.Component {
    constructor(props){
        super(props)
        this.state = {counter: 0}
    }

    componentWillMount() {
        console.log(ReactDOM.findDOMNode(this))
    }

    componentDidMount() {
        console.dir(ReactDOM.findDOMNode(this))
    }

    handleSave(event) {
        this.setState({counter: ++this.state.counter})
        console.log(`Clicked ${this.state.counter} times.`)
    }

    render() {
        return <button
            onClick={this.handleSave.bind(this)}
            id={this.props.id}
            style={{fontSize: this.props.fontSize}}>Checkout</button>
    }
}

// const CheckoutButton = (props) =>
//     <button id={props.id} style={{fontSize: props.fontSize}}>Checkout</button>;
