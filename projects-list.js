document.addEventListener("DOMContentLoaded", function() {
    const data = [
        {
            language: "javascript",
            title: "web-socket-chat-js",
            description: "A real-time chat application using WebSockets.",
            link: "https://github.com/dev-chintan/web-socket-chat-js",
            imageUrl: "assets/images/web-socket-chat.png"
        },
    ];

    const container = document.getElementById("cards-container");

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.style = "width: 25rem";

        card.innerHTML = 
            `
            <div class="card-header">
                ${item.title}
            </div>
            <div class="card-body">
                <div>
                    <p class="card-text">${item.description}</p>
                    <a href="${item.link}" class="btn btn-primary">GitHub</a>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
});
