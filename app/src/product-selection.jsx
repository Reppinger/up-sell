var Content = React.createClass({
    getInitialState: function(){
        return {counter: 0}
    },
    handleCheckoutClick(event) {
        //This feels so evil. Need routing.
        window.location.href = 'checkout.html'
    },
    render() {
        return <div>
            <SliderButtons />
            <SliderValue />
            <CheckoutButton id="checkout"
                            fontSize="20pt"
                            counter={this.state.counter}
                            handleClick={this.handleCheckoutClick} />
            <br/>
        </div>
    }
});

ReactDOM.render(
    <Content/>,
    document.getElementById('content')
);