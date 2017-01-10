var Content = React.createClass({
    render() {
        return <div>
            <input type="radio" name="upsell-group" id="upsell1" />
            <label htmlFor="upsell1">Starter Maintenance Kit</label><br/>
            {/*<input type="radio" name="upsell-group" id="upsell2" />*/}
            {/*<label htmlFor="upsell2">Deluxe Maintenance Kit</label><br/>*/}
            <input type="radio" name="upsell-group" id="upsell2" />
            <label htmlFor="upsell3">No, Thank You</label>
        </div>
    }
});

ReactDOM.render(
    <Content/>,
    document.getElementById('content')
);