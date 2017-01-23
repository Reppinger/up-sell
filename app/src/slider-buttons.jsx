class SliderButtons extends React.Component {
    calculateNewSliderValue(delta) {
        return this.props.sliderValue + delta;
    }

    //Now, how do I calculate the variable ONCE within the JSX for each button?
    render() {
        return <div>
            <button disabled={(this.props.sliderValue <1 ? true : false)}
                    onClick={this.props.updateSlider(this.calculateNewSliderValue(-1))}>
                Decrease to {this.calculateNewSliderValue(-1)}
            </button>
            <button disabled={(this.props.sliderValue >=100 ? true : false)}
                    onClick={this.props.updateSlider(this.calculateNewSliderValue(1))}>
                Increase to {this.calculateNewSliderValue(1)}
            </button>
        </div>
    }
}