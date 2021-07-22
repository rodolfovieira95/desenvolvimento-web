function handleChange(param) {
  if (param == "metro") {
    const metro = document.getElementById("metro").value;
    document.getElementById("kilometro").value = 1000 * metro;
  } else {
    const kilometro = document.getElementById("kilometro").value;
    document.getElementById("metro").value = kilometro / 1000;
  }
}
