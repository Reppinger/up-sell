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
    componentDidMount(){
        window.addEventListener('slide', this.handleSlide)
    },

    componentWillUnmount(){
        window.removeEventListener('slide', this.handleSlide)
    },

    render() {
        return <div>
            <SliderButtons sliderValue={this.state.sliderValue} />
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