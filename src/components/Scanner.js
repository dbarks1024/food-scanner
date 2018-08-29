import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'native-base';
import { BarCodeScanner, Permissions } from 'expo';
import { sendBarcode } from '../actions';

class Scanner extends Component {
  state = {
    hasCameraPermission: null,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
    }
  render() {
    return(
      <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeRead={({ type, data }) => {
              console.log(data);
            }}
          />
        </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentItem: state.scanner.currentItem
  }
}

export default connect(mapStateToProps, { sendBarcode })(Scanner);
