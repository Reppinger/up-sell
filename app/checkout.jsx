var Content = React.createClass({
    getInitialState: function(){
        return {counter: 0}
    },
    handleCheckoutClick(event) {
        this.setState({counter: ++this.state.counter})
    },
    render() {
        return <div>
            Option buttons will go here?
        </div>
    }
});

ReactDOM.render(
    <Content/>,
    document.getElementById('content')
);