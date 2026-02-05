document.addEventListener('DOMContentLoaded', () => {
    const deleteMajorModal = new bootstrap.Modal(document.getElementById('deleteMajorModal'));
    const majorNameToDelete = document.getElementById('majorNameToDelete');
    const confirmDeleteMajorBtn = document.getElementById('confirmDeleteMajorBtn');
    let majorIdToDelete = null;

    document.querySelectorAll('.btn-delete-major').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            majorIdToDelete = this.dataset.id;
            const majorName = this.dataset.name;
            majorNameToDelete.textContent = majorName;
            deleteMajorModal.show();
        });
    });

    confirmDeleteMajorBtn.addEventListener('click', async () => {
        if (majorIdToDelete) {
            try {
                const response = await fetch(`/majors/remove/${majorIdToDelete}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    deleteMajorModal.hide();
                    const rowToRemove = document.getElementById(`major-${majorIdToDelete}`);
                    if (rowToRemove) {
                        rowToRemove.remove();
                    } else {
                        // Se estiver na página de detalhes, redirecionar para a lista
                        window.location.href = '/majors';
                    }
                } else {
                    const errorText = await response.text();
                    alert(`Erro ao excluir curso: ${errorText}`);
                }
            } catch (error) {
                console.error('Erro ao enviar requisição de exclusão:', error);
                alert('Ocorreu um erro ao tentar excluir o curso.');
            } finally {
                majorIdToDelete = null; // Resetar ID após a operação
            }
        }
    });
});