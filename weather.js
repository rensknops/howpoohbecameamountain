const forecast = [
  { day: "Monday", icon: "☀️", summary: "sunny", high: 24, low: 11 },
  { day: "Tuesday", icon: "🌧️", summary: "light rain, then heavy rain", high: 19, low: 9 },
  { day: "Wednesday", icon: "🌧️", summary: "rain and many bees", high: 21, low: 10 },
  { day: "Thursday", icon: "🌪️", summary: "windy, pooh exhales", high: 17, low: 8 },
  { day: "Friday", icon: "🌪️", summary: "very windy, the mountain might shift a few meters", high: 15, low: 6 },
  { day: "Saturday", icon: "☀️", summary: "clear skies, kris would have loved it", high: 13, low: 5 },
  { day: "Sunday", icon: "🌥️", summary: "cloudy", high: 12, low: 4 }
];

document.querySelector("#status").textContent = "for Pooh Mountain";

let html = "";
for (let i = 0; i < forecast.length; i++) {
  const d = forecast[i];
  html += `<div class="card">
    <h3>${d.day} ${d.icon}</h3>
    <p>${d.summary}</p>
    <p>High: ${d.high} °C</p>
    <p>Low: ${d.low} °C</p>
  </div>`;
}
document.querySelector("#forecast").innerHTML = html;
