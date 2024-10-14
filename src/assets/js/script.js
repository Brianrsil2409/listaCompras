document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('item-input');
    const errorMessage = document.getElementById('error-message');

    itemInput.addEventListener('input', () => {
        if (itemInput.classList.contains('invalid')) {
            clearError(errorMessage, itemInput);
        }
    });
});
