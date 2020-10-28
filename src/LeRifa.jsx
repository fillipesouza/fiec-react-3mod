import React, { Component } from 'react';
import QrReader from 'react-qr-reader';

class LeRifa extends Component {

    state = {
        result: ''
    }
    
    componentDidMount() {
        /* Setting up the constraint */
        var facingMode = "user"; // Can be 'user' or 'environment' to access back or front camera (NEAT!)
        var constraints = {
            audio: false,
            video: {
                facingMode: facingMode
            }
        };
        navigator.mediaDevices.getUserMedia(constraints);
    };

    handleScan = async data => {
        if (data) {
          await fetch(data);
          alert('ok')  
        }
    }
    handleError = err => {
        console.error(err)
    }
    render() {
        return (
            <div>
                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '100%' }}
                />
                <p>Lendo</p>
            </div>
        )
    }
}

export default LeRifa;