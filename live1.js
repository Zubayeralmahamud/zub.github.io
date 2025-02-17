// Streaming URLs and labels
const buttonsData = {
    'HD': [
{ url: 'https://dash-hex.pages.dev/ADB?c=https://embedme.top/embed/alpha/persepolis-vs-al-nassr/1', label: 'Server 1' },
        { url: 'https://widespreadcomponent.com/u78iskuszh?key=89d7346e4bbb60e86b3209c6c55eac73', label: 'Server 2', newTab: true },
{ url: 'https://dash-hex.pages.dev/zig', label: 'Server 3' },
{ url: 'https://dash-hex.pages.dev/ad1', label: 'Server 4' },
{ url: 'https://dash-hex.pages.dev/ad1', label: 'Server 4' },
    ]
};

// Automatically select the first server and set iframe source
document.getElementById('iframe').src = buttonsData.HD[0].url; // Set first server as default

// Generate buttons dynamically
const buttonContainer = document.getElementById("buttonContainer");
buttonsData.HD.forEach(button => {
    const btn = document.createElement("a");
    btn.href = button.url;
    btn.textContent = button.label;
    btn.className = "tomboltv";
    
    btn.onclick = (e) => {
        if (button.newTab) {
            window.open(button.url, '_blank');
        } else {
            e.preventDefault(); // Prevent navigation
            document.getElementById('iframe').src = button.url; // Update iframe src
        }
    };
    
    buttonContainer.appendChild(btn);
});
