function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");
  const userText = input.value.toLowerCase();

  if (userText.trim() === "") return;

  chat.innerHTML += `<p><strong>You:</strong> ${input.value}</p>`;

  let reply = "I am EL SCIENCE AI. Ask about Biology, Chemistry, or Physics.";

  // PHYSICS
  if (userText.includes("ohm")) {
    reply = `
<strong>Ohm’s Law</strong><br>
Ohm’s Law states that the current flowing through a conductor is directly proportional
to the voltage across it, provided temperature remains constant.<br><br>

<strong>Formula:</strong><br>
V = I × R<br><br>

Where:<br>
V = Voltage (Volts)<br>
I = Current (Amperes)<br>
R = Resistance (Ohms)<br><br>

<strong>Example:</strong><br>
If voltage is 10V and resistance is 5Ω:<br>
I = V ÷ R = 10 ÷ 5 = 2A
`;
  }

  chat.innerHTML += `<p><strong>EL SCIENCE AI:</strong> ${reply}</p>`;
  input.value = "";
}
