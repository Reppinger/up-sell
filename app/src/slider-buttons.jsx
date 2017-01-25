class SliderButtons extends React.Component {
    calculateSliderValue(delta) {
        return (this.props.sliderValue + delta)
    }
    isMax() {
        return this.props.sliderValue >= this.props.sliderMax
    }
    isMin() {
        return this.props.sliderValue < this.props.sliderMin
    }
    button(disabled, newSliderValue, caption) {
        return <button  disabled={disabled}
                        onClick={this.props.updateSlider(newSliderValue)}>
            {caption} {newSliderValue}
        </button>
    }
    render() {
        return <div>
            { this.button(this.isMin(), this.calculateSliderValue(-1), 'Decrease to') }
            { this.button(this.isMax(), this.calculateSliderValue(1),  'Increase to') }
        </div>
    }
}