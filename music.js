const readline = require("readline");
const { exec } = require("child_process");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan URL YouTube: ", (youtubeURL) => {
    if (!youtubeURL) {
        console.log("Masukin urlnya kocak");
        rl.close();
        return;
    }

    console.log("Downloading audio...");
    const command = `yt-dlp -x --audio-format mp3 -o "%(title)s.%(ext)s" ${youtubeURL}`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        console.log(`Download complete:\n${stdout}`);
    });

    rl.close();
});
