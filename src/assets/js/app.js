// Função de validação do input
function validateInput(item, items) {
    if (item.trim() === '') {
        console.log("Erro: O item está vazio.");
        return 'Preencha o campo em Branco';
    } else if (items.includes(item.toLowerCase())) {
        console.log("Erro: Item duplicado.");
        return 'Este item já está na lista';
    }
    return null;
}

// Função de feedback de erro
function showError(errorMessage, message, itemInput) {
    errorMessage.textContent = message;
    itemInput.classList.add('invalid');
    console.log(`Erro: ${message}`);
}

// Limpar erro
function clearError(errorMessage, itemInput) {
    errorMessage.textContent = '';
    itemInput.classList.remove('invalid');
}

// Função para salvar lista de itens nos cookies
function saveItemsToCookies(items) {
    document.cookie = `items=${JSON.stringify(items)}; path=/; max-age=${60 * 60 * 24 * 30}`; // 30 dias
    console.log('Itens salvos nos cookies:', items);
}

// Função para carregar itens dos cookies
function loadItemsFromCookies() {
    const cookies = document.cookie.split('; ');
    const itemsCookie = cookies.find(cookie => cookie.startsWith('items='));
    if (itemsCookie) {
        return JSON.parse(itemsCookie.split('=')[1]);
    }
    return [];
}

// Adicionar item à lista
function addItem(item, itemList, items, itemInput) {
    const li = document.createElement('li');
    li.textContent = item;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.classList.add('delete-btn');
    
    deleteBtn.addEventListener('click', () => {
        itemList.removeChild(li);
        items = items.filter(i => i !== item.toLowerCase());
        saveItemsToCookies(items); // Atualiza os cookies
        console.log(`Item removido: ${item}`);
    });
    
    li.appendChild(deleteBtn);
    itemList.appendChild(li);

    // Adicionar item na lista de itens e limpar input
    items.push(item.toLowerCase());
    saveItemsToCookies(items); // Salvar nos cookies
    itemInput.value = '';
    console.log(`Item adicionado: ${item}`);
}
