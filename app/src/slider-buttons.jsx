class SliderButtons extends React.Component {
    calculateNewSliderValue(delta) {
        return (this.props.sliderValue + delta);
    }

    render() {
        let newSliderValue = 0;
        return <div>
            <button disabled={(this.props.sliderValue <1 ? true : false)}
                    {...newSliderValue = this.calculateNewSliderValue(-1)}
                    onClick={this.props.updateSlider(newSliderValue)}>
                Decrease to {newSliderValue}
            </button>
            <button disabled={(this.props.sliderValue >=100 ? true : false)}
                    {...newSliderValue = this.calculateNewSliderValue(1)}
                    onClick={this.props.updateSlider(newSliderValue)}>
                Increase to {newSliderValue}
            </button>
        </div>
    }
}