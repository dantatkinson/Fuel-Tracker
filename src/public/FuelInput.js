import React from 'react';

class FuelInput {
    render() {
        return (
            <div class="fuel-input">
                <input type="text" placeholder="Enter amount of fuel..."></input>
                <button type="submit" class="submitButton">Submit</button>
            </div>
        );
    }
}

export default FuelInput;
