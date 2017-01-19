class SliderValue extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        window.addEventListener('slide', this.props.handleSlide)
    }

    componentWillUnmount(){
        window.removeEventListener('slide', this.props.handleSlide)
    }

    render() {
        return <div>
            Value: {this.props.sliderValue}
        </div>
    }
}