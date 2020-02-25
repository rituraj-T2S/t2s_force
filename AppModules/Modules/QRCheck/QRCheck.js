import React, { Component } from "react";
import moment from "moment";
import { withNavigation } from "react-navigation";
import { maxTimeDifference } from "../Utils/InspectorConstants";

class QRCheck extends Component {
    getTimeDiff = (differenceIn = "minutes", floating = false) => {
        const data = this.props.qrdata;

        if (data !== undefined && data !== null && data !== "") {
            try {


                if (JSON.parse(data).hasOwnProperty("DateAndTime")) {
                    const QR_Time = moment(
                        JSON.parse(data).DateAndTime,
                        "DD-MM-YYYY HH:mm:ss"
                    );
                    const Device_Time = moment(new Date(), "DD-MM-YYYY HH:mm:ss");
                    const timeDifference = Math.abs(
                        QR_Time.diff(Device_Time, differenceIn, floating)
                    );
                    if (timeDifference === 0 || timeDifference <= maxTimeDifference) {
                         this.props.navigation.navigate("CheckList");

                    } else if (timeDifference > maxTimeDifference) {
                        alert("QR expired regenerate QR code");
                    }
                } else {
                    alert("invalid qrcode");
                }
            } catch (e) {
                alert("invalid QR");
            }
        }
    };

    render() {
        console.log(this.props);
        {
            this.getTimeDiff();
        }
        return <></>;
    }
}

export default withNavigation(QRCheck);
