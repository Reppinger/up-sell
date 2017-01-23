//Stateful, yucky implementation from React Quickly. Needs refactored (as the author points out).
class SliderButtons extends React.Component {
    //Getting better. Need to remove jquery selector coupling to UI
    handleChange(value) {
        return () => {
            $('#slider').slider('value', this.props.sliderValue + value)
        }
    }
    render() {
        return <div>
            <button disabled={(this.props.sliderValue <1 ? true : false)}
                    onClick={this.handleChange(-1)}>
                Decrease to {this.props.sliderValue -1}
            </button>
            <button disabled={(this.props.sliderValue >=100 ? true : false)}
                    onClick={this.handleChange(1)}>
                Increase to {this.props.sliderValue +1}
            </button>
        </div>
    }
}