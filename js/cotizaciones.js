document.addEventListener('DOMContentLoaded', () => {
    const selected = new Set();

    document.querySelectorAll('.servicio').forEach(btn => {
        btn.addEventListener('click', () => {
            const label = btn.dataset.label;
            btn.classList.toggle('activo');
            if (selected.has(label)) {
                selected.delete(label);
            } else {
                selected.add(label);
            }
            mostrarSeleccion();
        });
    });

    function mostrarSeleccion() {
        let seleccionServicio = document.getElementById('resultado-seleccion')
        const result = [...selected].join(', ');
        seleccionServicio.textContent=
            result ? `Seleccionaste: ${result}` : 'No has seleccionado ningún servicio.';
    }

})