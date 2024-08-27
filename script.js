document.addEventListener('DOMContentLoaded', () => {
    const inputValue = document.getElementById('inputValue');
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    const resultDiv = document.getElementById('result');
    const convertBtn = document.getElementById('convert-btn');

    const conversionRates = {
        meter: {
            kilometer: 0.001,
            mile: 0.000621371,
            foot: 3.28084,
        },
        kilometer: {
            meter: 1000,
            mile: 0.621371,
            foot: 3280.84,
        },
        mile: {
            meter: 1609.34,
            kilometer: 1.60934,
            foot: 5280,
        },
        foot: {
            meter: 0.3048,
            kilometer: 0.0003048,
            mile: 0.000189394,
        },
    };

    function convert() {
        const fromUnit = inputUnit.value;
        const toUnit = outputUnit.value;
        const value = parseFloat(inputValue.value);

        if (isNaN(value)) {
            resultDiv.textContent = 'Please enter a valid number.';
            return;
        }

        const conversionRate = conversionRates[fromUnit][toUnit];
        const result = value * conversionRate;
        resultDiv.textContent = `${value} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`;
    }

    convertBtn.addEventListener('click', convert);
});
