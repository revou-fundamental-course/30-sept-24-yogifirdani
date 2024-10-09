// Get the textarea element
const inputSuhu = document.getElementById("input-suhu");
const hasilFahrenhait = document.getElementById("fahrenheit");
const caraKalkulasi = document.getElementById("carakalkulasi");

// Add event listener to the Konversi button
document.querySelector(".konversi-btn").addEventListener("click", (e) => {
  e.preventDefault(); // prevent form submission

  // Validate the input value
  const inputValue = inputSuhu.value.trim();
  if (inputValue === "") {
    alert("Silakan masukkan nilai untuk Celsius");
    return;
  }

  // Check if the input value is a valid number
  const isValidNumber = !isNaN(parseFloat(inputValue)) && isFinite(inputValue);
  if (!isValidNumber) {
    alert("Nilai masukan tidak valid. Harap masukkan angka yang valid");
    return;
  }

  // Perform the conversion from Celsius to Fahrenheit
  const fahrenheitValue = (parseFloat(inputValue) * 9) / 5 + 32;
  // alert(`Nilai dalam Fahrenheit adalah: ${fahrenheitValue}`);
  hasilFahrenhait.innerText = fahrenheitValue;
  caraKalkulasi.innerText= `(${inputSuhu.value} * 9)/5 +32`

  // Perform the reverse operation (optional)
  const reverseValue = ((fahrenheitValue - 32) * 5) / 9;
 // alert(`Nilai terbalik dalam Celcius adalah: ${reverseValue}`);
});

// Add event listener to the Reset button
document.querySelector(".reset-btn").addEventListener("click", () => {
  inputSuhu.value = "";
});

// Add event listener to the Reverse button
document.querySelector(".reverse-btn").addEventListener("click", () => {
  const inputValue = inputSuhu.value.trim();
  if (inputValue === "") {
    alert("Silakan masukkan nilai untuk Celsius");
    return;
  }

  const isValidNumber = !isNaN(parseFloat(inputValue)) && isFinite(inputValue);
  if (!isValidNumber) {
    alert("Nilai masukan tidak valid. Harap masukkan angka yang valid");
    return;
  }

  const reverseValue = ((parseFloat(inputValue) - 32) * 5) / 9;
  alert(`Nilai terbalik dalam Celcius adalah: ${reverseValue}`);
});
