import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import QRCheck from "../Modules/QRCheck/QRCheck";
import {QRScanStyles} from "../Styles/QRscanStyle";


class QRScan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            qrdata: ""
        };
    }

    //{"id":"01","DateAndTime":"18-02-2020 15:00:00"}

    onSuccess = e => {
        data: e.data;
        this.setState({ qrdata: e.data });
    };

    render() {
        return (
            <>
                <QRCodeScanner
                    onRead={this.onSuccess}
                    showMarker={true}
                    reactivate={true}
                    reactivateTimeout={5000}
                    bottomContent={
                        <View style={QRScanStyles.container}>
                            <Text style={QRScanStyles.textStyle}>Scan the Fusion QR</Text>
                        </View>
                    }
                />

                <QRCheck qrdata={this.state.qrdata} />
            </>
        );
    }
}

export default QRScan;