document.addEventListener('DOMContentLoaded', () => {
    const deleteUserModal = new bootstrap.Modal(document.getElementById('deleteUserModal'));
    const userNameToDelete = document.getElementById('userNameToDelete');
    const confirmDeleteUserBtn = document.getElementById('confirmDeleteUserBtn');
    let userIdToDelete = null;

    document.querySelectorAll('.btn-delete-user').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            userIdToDelete = this.dataset.id;
            const userName = this.dataset.name;
            userNameToDelete.textContent = userName;
            deleteUserModal.show();
        });
    });

    confirmDeleteUserBtn.addEventListener('click', async () => {
        if (userIdToDelete) {
            try {
                const response = await fetch(`/users/remove/${userIdToDelete}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    deleteUserModal.hide();
                    const rowToRemove = document.getElementById(`user-${userIdToDelete}`);
                    if (rowToRemove) {
                        rowToRemove.remove();
                    } else {
                        // Se estiver na página de detalhes, redirecionar para a lista
                        window.location.href = '/users';
                    }
                } else {
                    const errorText = await response.text();
                    alert(`Erro ao excluir usuário: ${errorText}`);
                }
            } catch (error) {
                console.error('Erro ao enviar requisição de exclusão:', error);
                alert('Ocorreu um erro ao tentar excluir o usuário.');
            } finally {
                userIdToDelete = null; // Resetar ID após a operação
            }
        }
    });
});