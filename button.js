(function() {
    var phoneNumbers = [
        { number: '0901886997', imageId: '1w9Jj_wfbpDAOa8tQMAAYUV-DShvOQbLB' },
        { number: '0901886199', imageId: '1BWDj9N1k8eVvkVGVYKKbWetPG6VkSUYz' }
    ];

    var container = document.createElement('div');
    container.id = 'interactivebutton';
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.left = '20px';
    container.style.width = '120px';
    container.style.zIndex = '9999999999';

    phoneNumbers.forEach(function(phone) {
        var link = document.createElement('a');
        link.href = 'tel:' + phone.number;
        link.style.display = 'block';
        link.style.marginBottom = '10px';

        var icon = document.createElement('div');
        icon.style.width = '120px';
        icon.style.height = 'auto';
        icon.style.background = `url(https://drive.google.com/thumbnail?id=${phone.imageId}) no-repeat center center`;
        icon.style.backgroundSize = 'contain';

        link.appendChild(icon);
        container.appendChild(link);
    });

    document.body.appendChild(container);
})();
