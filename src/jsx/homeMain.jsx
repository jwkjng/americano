var React = require('React');
var Link = require('react-router-component').Link

var Body = React.createClass({
  componentDidMount: function () {

  },
  render: function () {
    return (
      <div className="container content">
        <h4>Home Main</h4>
        <p>{"Home page"}</p>
        <Link href="/pagetwo">Page Two</Link>
      </div>
    );
  }
});

module.exports = Body;
