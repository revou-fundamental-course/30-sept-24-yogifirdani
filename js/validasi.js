// Get elements
const inputSuhu = document.getElementById("input-suhu");
const hasilFahrenhait = document.getElementById("fahrenheit");
const caraKalkulasi = document.getElementById("carakalkulasi");

// Function to validate input
const isValidInput = (inputValue) => {
  return (
    inputValue !== "" && !isNaN(parseFloat(inputValue)) && isFinite(inputValue)
  );
};

// Function to convert Celsius to Fahrenheit
const convertToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

// Event listener for the Konversi button
document.querySelector(".konversi-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const inputValue = inputSuhu.value.trim();

  if (!isValidInput(inputValue)) {
    alert("Masukkan nilai Celsius yang valid.");
    return;
  }

  const fahrenheitValue = convertToFahrenheit(parseFloat(inputValue));
  hasilFahrenhait.innerText = fahrenheitValue;
  caraKalkulasi.innerText = `(${inputValue} * 9)/5 +32`;
});

// Event listener for the Reset button
document.querySelector(".reset-btn").addEventListener("click", () => {
  inputSuhu.value = "";
  hasilFahrenhait.innerText = "";
  caraKalkulasi.innerText = "";
});

// Event listener for the Reverse button
document.querySelector(".reverse-btn").addEventListener("click", () => {
  const inputValue = inputSuhu.value.trim();

  if (!isValidInput(inputValue)) {
    alert("Masukkan nilai Fahrenheit yang valid.");
    return;
  }

  const celsiusValue = ((parseFloat(inputValue) - 32) * 5) / 9;
  alert(`Nilai dalam Celsius adalah: ${celsiusValue}`);
});
