function copyCode(id) {
    // Get the code snippet element
    const code = document.getElementById(id);

    // Create a range object to select the code snippet text
    const range = document.createRange();
    range.selectNode(code);

    // Select the code snippet text
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Deselect the text
    window.getSelection().removeAllRanges();

    // Replace button text with "Copied!"
    const copyButton = code.parentElement.querySelector(".copy-button");
    const originalButtonText = copyButton.textContent;
    copyButton.textContent = "Copied!";

    // Reset button text after 3 seconds
    setTimeout(() => {
            copyButton.textContent = originalButtonText;
    }, 1000);
}