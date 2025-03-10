document.addEventListener("DOMContentLoaded", function () {
    var callContainer = document.createElement("div");
    callContainer.id = "interactivebutton";
    callContainer.style.position = "fixed";
    callContainer.style.bottom = "20px";
    callContainer.style.left = "20px";
    callContainer.style.zIndex = "9999999999";
    document.body.appendChild(callContainer);

    function createCallIcon(url, imageId) {
        var link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.onclick = function () {
            pushthongtin(imageId);
        };

        var icon = document.createElement("div");
        icon.style.float = "left";
        icon.style.width = "120px";
        icon.style.height = "auto";
        icon.style.padding = "0px";
        icon.style.margin = "5px";
        icon.style.borderRadius = "10px";
        icon.style.background = "url(https://drive.google.com/thumbnail?id=" + imageId + ") no-repeat center";
        icon.style.backgroundSize = "contain";

        link.appendChild(icon);
        callContainer.appendChild(link);
    }

    function pushthongtin(id) {
        fetch("https://script.google.com/macros/s/AKfycbyHwEOC6Q218NUthh3MN9mYWJyfib76AI17Sc3yeSnzRYgIIjc/exec?button=" + id + "&url=" + encodeURIComponent(location.href) + "&time=" + Date.now());
    }

    createCallIcon("tel:+84901234567", "1w9Jj_wfbpDAOa8tQMAAYUV-DShvOQbLB");
    createCallIcon("tel:+84987654321", "1BWDj9N1k8eVvkVGVYKKbWetPG6VkSUYz");
});
