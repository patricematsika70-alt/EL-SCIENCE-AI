function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function ask() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const chat = document.getElementById("chatbox");

  chat.innerHTML += `<p><b>You:</b> ${input}</p>`;

  let reply = "I am EL SCIENCE AI. Ask about Biology, Chemistry, or Physics.";

  if (input.includes("photosynthesis")) {
    const p = science.biology.photosynthesis;
    reply =
      pick(p.definition) + "<br><br>" +
      "<b>Explanation:</b><br>" + pick(p.explanation) + "<br><br>" +
      "<b>Practical:</b><br>" + pick(p.practical) + "<br><br>" +
      "<b>Diagram:</b><br>" + pick(p.diagram);
  }

  if (input.includes("acid")) {
    const a = science.chemistry.acids;
    reply =
      pick(a.definition) + "<br><br>" +
      "<b>Practical:</b><br>" + pick(a.practical);
  }

  if (input.includes("motion")) {
    const m = science.physics.motion;
    reply =
      pick(m.definition) + "<br><br>" +
      "<b>Practical:</b><br>" + pick(m.practical);
  }

  chat.innerHTML += `<p><b>EL SCIENCE AI:</b><br>${reply}</p>`;
}

function downloadNotes() {
  const text = document.getElementById("chatbox").innerText;
  const blob = new Blob([text], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "EL_SCIENCE_AI.txt";
  a.click();
}