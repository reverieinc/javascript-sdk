import ReverieClient from "@reverieit/reverie-client"

async function uploadAudio() {
    const reverieClient = new ReverieClient({
        apiKey: "<YOUR-API-KEY>",
        appId: "<YOUR-APP-ID>"
    });

    const file = document.getElementById("audioFile").files[0];
    const lang = document.getElementById("language").value;
    const subtitles = document.getElementById("subtitles").value;

    if (!file) {
        alert("Please provide an audio file and domain.");
        return;
    }

    try {
        const response = await reverieClient.transcribeAudio({
            audioFile: file,
            language: lang,
            subtitles: subtitles
        });

        console.log("✅ Response from API:", response);
        const { transcript, original_transcript, subtitles: srt } = response.result;
        document.getElementById("result").innerHTML = `
            <h3>Transcript:</h3>
            <p>${transcript}</p>
            
            <h3>Original Transcript:</h3>
            <p>${original_transcript}</p>

            <h3>Subtitles:</h3>
            <pre>${srt}</pre>
        `;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("result").textContent = "Error processing the request.";
    }

}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("uploadAudio").addEventListener("click", uploadAudio);
    document.getElementById("reset").addEventListener("click", resetForm);


});

function resetForm() {
    document.getElementById("audioFile").value = "";
    document.getElementById("language").selectedIndex = 0;
    document.getElementById("domain").value = "";
    document.getElementById("subtitles").selectedIndex = 0;
    document.getElementById("result").textContent = "";
}
