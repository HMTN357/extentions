// Define a global object to manage popups
let popups = {};

// Function to create a new popup window
function createPopup(windowId) {
    if (popups[windowId]) {
        return;  // Prevent duplicate windows
    }

    let popup = document.createElement('div');
    popup.id = windowId;
    popup.className = 'popup-window';
    popup.style.position = 'absolute';
    popup.style.top = '50px';
    popup.style.left = '50px';
    popup.style.width = '200px';
    popup.style.height = '200px';
    popup.style.backgroundColor = '#fff';
    popup.style.border = '2px solid #000';
    popup.style.zIndex = 9999;

    let contentArea = document.createElement('div');
    contentArea.className = 'popup-content';
    popup.appendChild(contentArea);

    let closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.onclick = () => closePopup(windowId);
    popup.appendChild(closeButton);

    document.body.appendChild(popup);
    popups[windowId] = popup;
}

// Function to add content to an existing popup
function addContentToPopup(windowId, content) {
    let popup = popups[windowId];
    if (popup) {
        let contentArea = popup.querySelector('.popup-content');
        let newContent = document.createElement('div');
        newContent.className = 'popup-content-item';
        newContent.innerHTML = content;
        contentArea.appendChild(newContent);
    }
}

// Function to close a popup window
function closePopup(windowId) {
    let popup = popups[windowId];
    if (popup) {
        popup.remove();
        delete popups[windowId];
    }
}

// Hat Block: Adds content to a popup when the block is triggered
function hatBlockTrigger(windowId, content) {
    if (!popups[windowId]) {
        createPopup(windowId);
    }
    addContentToPopup(windowId, content);
}
