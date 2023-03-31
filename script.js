function paraCelsius(temp, unidade) {
  let celsiusTemp;

  switch (unidade) {
    case "fahrenheit":
      celsiusTemp = (temp - 32) * 5/9;
      break;
    case "kelvin":
      celsiusTemp = temp - 273.15;
      break;
    case "rankine":
      celsiusTemp = (temp - 491.67) * 5/9;
      break;
    default:
      celsiusTemp = temp;
  }

  return celsiusTemp;
}

function paraFahren(temp, unidade) {
  let fahrenheitTemp;

  switch (unidade) {
    case "celsius":
      fahrenheitTemp = (temp * 9/5) + 32;
      break;
    case "kelvin":
      fahrenheitTemp = (temp - 273.15) * 9/5 + 32;
      break;
    case "rankine":
      fahrenheitTemp = temp - 459.67;
      break;
    default:
      fahrenheitTemp = temp;
  }

  return fahrenheitTemp;
}

function paraKelvin(temp, unidade) {
  let kelvinTemp;

  switch (unidade) {
    case "celsius":
      kelvinTemp = temp + 273.15;
      break;
    case "fahrenheit":
      kelvinTemp = (temp + 459.67) * 5/9;
      break;
    case "rankine":
      kelvinTemp = temp * 5/9;
      break;
    default:
      kelvinTemp = temp;
  }

  return kelvinTemp;
}

function paraRankine(temp, unidade) {
  let rankineTemp;

  switch (unidade) {
    case "celsius":
      rankineTemp = (temp + 273.15) * 9/5;
      break;
    case "fahrenheit":
      rankineTemp = temp + 459.67;
      break;
    case "kelvin":
      rankineTemp = temp * 9/5;
      break;
    default:
      rankineTemp = temp;
  }

  return rankineTemp;
}

function converterTemperatura() {
  const tempInput = document.getElementById("tempUser");
  const temp = parseFloat(tempInput.value);
  if(temp === '') {
    alert("Entre com um valor válido!");
    return
  }

  const unitSelect = document.getElementById("menu-drop");
  const unidade = unitSelect.value;

  const celsiusTemp = document.getElementById("celsiusTemp");
  const fahrenheitTemp = document.getElementById("fahrenheitTemp");
  const kelvinTemp = document.getElementById("kelvinTemp");
  const rankineTemp = document.getElementById("rankineTemp");

  celsiusTemp.innerHTML = paraCelsius(temp, unidade).toFixed(2) + "º";
  fahrenheitTemp.innerHTML = paraFahren(temp, unidade).toFixed(2) + "º";
  kelvinTemp.innerHTML = paraKelvin(temp, unidade).toFixed(2) + "º";
  rankineTemp.innerHTML = paraRankine(temp, unidade).toFixed(2) + "º";
}