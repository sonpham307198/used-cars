function createCallIcons() {
    var container = document.createElement("div");
    container.id = "interactivebutton";
    container.style.position = "fixed";
    container.style.bottom = "20px";
    container.style.left = "20px";
    container.style.zIndex = "9999999999";
    document.body.appendChild(container);

    var icons = [
        { url: "tel:0123456789", img: "https://yourimage1.com/icon1.png" },
        { url: "tel:0987654321", img: "https://yourimage2.com/icon2.png" }
    ];

    icons.forEach(function(icon) {
        var link = document.createElement("a");
        link.href = icon.url;
        link.target = "_blank";

        var img = document.createElement("img");
        img.src = icon.img;
        img.style.width = "120px";
        img.style.height = "auto";
        img.style.margin = "5px";
        img.style.borderRadius = "10px";
        
        link.appendChild(img);
        container.appendChild(link);
    });
}

document.addEventListener("DOMContentLoaded", createCallIcons);
