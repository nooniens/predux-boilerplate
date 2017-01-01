import { h, Component } from 'preact';
import { connect } from 'react-redux';


const App = class extends Component {


  render() {
    return (
      <div>
			Welcome to Preact
			<p>{this.props.welcome}</p>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  welcome: state.welcome_message,
});

export default connect(mapStateToProps)(App);
