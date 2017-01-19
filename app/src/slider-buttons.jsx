//Stateful, yucky implementation from React Quickly. Needs refactored (as the author points out).
class SliderButtons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {sliderValue: 0}
    }

    handleSlide(event, ui) {
            this.setState({sliderValue: ui.value})
    }

    handleChange(value) {
        return () => {
            $('#slider').slider('value', this.state.sliderValue + value)
            this.setState({sliderValue: this.state.sliderValue + value})
        }
    }

    componentDidMount() {
        $('#slider').on('slide', this.handleSlide.bind(this))
    }

    componentWillUnmount() {
        $('#slider').off('slide', this.handleSlide.bind(this))
    }

    render() {
        return <div>
            <button disabled={(this.state.sliderValue <1 ? true : false)}
                    onClick={this.handleChange(-1)}>
                Decrease to {this.state.sliderValue -1}
            </button>
            <button disabled={(this.state.sliderValue >=100 ? true : false)}
                    onClick={this.handleChange(1)}>
                Increase to {this.state.sliderValue +1}
            </button>
        </div>
    }
}