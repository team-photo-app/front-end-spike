import React from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  handleIncrease = () => {
    this.setState((prevState) => ({
      counter: (prevState.counter + 1),
    }))
  }

  handleDecrease = () => {
    this.setState((prevState) => ({
      counter: (prevState.counter - 1),
    }))
  }

  handleReset = () => {
    this.setState({counter:0});
  }

  render() {
    return (
      <View>
        <Text>Welcome, {this.props.user}</Text>
        <Text>Counter: {this.state.counter}</Text>
        <Button title={'INCREASE'} onPress={this.handleIncrease}/>
        <Button title={'DECREASE'} onPress={this.handleDecrease}/>
        <Button title={'RESET'} onPress={this.handleReset}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.username }
}

export default connect(mapStateToProps)(Counter);
