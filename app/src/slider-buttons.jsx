class SliderButtons extends React.Component {
    calculateNewSliderValue(delta) {
        return (this.props.sliderValue + delta);
    }
    isMax() {
        return this.props.sliderValue >= 100;
    }
    isMin() {
        return this.props.sliderValue < 1;
    }
    render() {
        let newSliderValue = 0;
        return <div>
            <button disabled={this.isMin()}
                    {...newSliderValue = this.calculateNewSliderValue(-1)}
                    onClick={this.props.updateSlider(newSliderValue)}>
                Decrease to {newSliderValue}
            </button>
            <button disabled={this.isMax()}
                    {...newSliderValue = this.calculateNewSliderValue(1)}
                    onClick={this.props.updateSlider(newSliderValue)}>
                Increase to {newSliderValue}
            </button>
        </div>
    }
}