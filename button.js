function createCallButtons() {
    const phoneNumbers = [
        { number: '0901886997', imageId: '1w9Jj_wfbpDAOa8tQMAAYUV-DShvOQbLB' },
        { number: '0901886199', imageId: '1BWDj9N1k8eVvkVGVYKKbWetPG6VkSUYz' }
    ];
    
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'interactivebutton';
    buttonContainer.style.position = 'fixed';
    buttonContainer.style.bottom = '20px';
    buttonContainer.style.left = '20px';
    buttonContainer.style.zIndex = '9999999999';

    phoneNumbers.forEach(({ number, imageId }) => {
        const callButton = document.createElement('a');
        callButton.href = `tel:${number}`;
        callButton.classList.add(imageId);
        
        const buttonDiv = document.createElement('div');
        buttonDiv.style.width = '120px';
        buttonDiv.style.height = 'auto';
        buttonDiv.style.padding = '1px';
        buttonDiv.style.textAlign = 'center';
        buttonDiv.style.margin = '5px';
        buttonDiv.style.borderRadius = '4px';
        buttonDiv.style.background = `url(https://drive.google.com/thumbnail?id=${imageId}) no-repeat center center / contain`;
        buttonDiv.style.border = '1px solid transparent';
        buttonDiv.style.transition = 'border 0.3s';

        buttonDiv.addEventListener('mouseenter', () => {
            buttonDiv.style.border = '1px solid #888';
        });
        buttonDiv.addEventListener('mouseleave', () => {
            buttonDiv.style.border = '1px solid transparent';
        });

        callButton.appendChild(buttonDiv);
        buttonContainer.appendChild(callButton);
    });

    document.body.appendChild(buttonContainer);
}

document.addEventListener("DOMContentLoaded", createCallButtons);
