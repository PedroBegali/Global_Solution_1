document.addEventListener('DOMContentLoaded', () => {
    const ligarEmpresarial = document.getElementById('ligarEmpresarial');
    const ligarParticular = document.getElementById('ligarParticular');

    let tipoUsuario = 'empresarial';

    function alterarBotao() {
        if (tipoUsuario === 'empresarial') {
            ligarEmpresarial.classList.add('ativo');
            ligarParticular.classList.remove('ativo');
        } else {
            ligarEmpresarial.classList.remove('ativo');
            ligarParticular.classList.add('ativo');
        }
    }

    ligarEmpresarial.addEventListener('click', () => {
        tipoUsuario = 'empresarial';
        alterarBotao();
    });

    ligarParticular.addEventListener('click', () => {
        tipoUsuario = 'particular';
        alterarBotao();
    });

});