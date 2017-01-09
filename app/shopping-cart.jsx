var Content = React.createClass({
    getInitialState: function(){
        return {counter: 0}
    },
    handleCheckoutClick(event) {
        this.setState({counter: ++this.state.counter})
    },
    render() {
        return <div>
            <CheckoutButton id="checkout"
                            fontSize="20pt"
                            counter={this.state.counter}
                            handleClick={this.handleCheckoutClick} />
            <br/>
            <Counter value ={this.state.counter} />
        </div>
    }
});

ReactDOM.render(
    <Content/>,
    document.getElementById('content')
);