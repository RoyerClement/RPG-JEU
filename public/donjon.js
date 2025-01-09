const button = document.createElement("button");
let count = 1;
const text = "add 1 to stats ";
button.textContent = text + count;
button.addEventListener("click", async function () {
    count += 1;
    const res = await fetch("http://localhost:8000/all-data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ stats: count }),
    });
    const json = await res.json();
    button.textContent = text + json.stats;
});
document.body.appendChild(button);
