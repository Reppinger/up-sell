var Content = React.createClass({
    getInitialState: function(){
        return {sliderValue: 0}
    },
    handleCheckoutClick(event) {
        //This feels so evil. Need routing.
        window.location.href = 'checkout.html'
    },
    handleSlide(event) {
        this.setState({sliderValue: event.detail.ui.value})
    },
    render() {
        return <div>
            {/*<SliderButtons />*/}
            <SliderValue sliderValue={this.state.sliderValue}
                          handleSlide = {this.handleSlide}/>
            <CheckoutButton id="checkout"
                            fontSize="20pt"
                            handleClick={this.handleCheckoutClick} />
            <br/>
        </div>
    }
});

ReactDOM.render(
    <Content/>,
    document.getElementById('content')
);