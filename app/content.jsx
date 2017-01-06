class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {counter: 0}
    }
    handleClick(event) {
        this.setState({counter: ++this.state.counter})
    }
    render() {
        return <div>
            <CheckoutButton id="checkout"
                                 fontSize="20pt"
                                 counter={this.state.counter}
                                 handleClick={this.handleClick.bind(this)}/>
        </div>

    }
}