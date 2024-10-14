document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('item-form');
    const itemInput = document.getElementById('item-input');
    const errorMessage = document.getElementById('error-message');
    const itemList = document.getElementById('item-list');
    
    let items = loadItemsFromCookies(); // Carrega itens salvos nos cookies

    // Renderiza os itens salvos ao carregar a página
    items.forEach(item => addItem(item, itemList, items, itemInput));

    // Manipulação do formulário
    itemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newItem = itemInput.value.trim();
        
        // Validar entrada usando função do app.js
        const validationError = validateInput(newItem, items);
        if (validationError) {
            showError(errorMessage, validationError, itemInput);
            return;
        }

        clearError(errorMessage, itemInput);
        addItem(newItem, itemList, items, itemInput);
    });

    // Limpar erro ao começar a digitar novamente
    itemInput.addEventListener('input', () => {
        if (itemInput.classList.contains('invalid')) {
            clearError(errorMessage, itemInput);
        }
    });
});
