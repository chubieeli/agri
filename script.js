// script.js
document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click', () => {
    if (!ramo.classList.contains('locked')) {
      ramo.classList.toggle('aprobado');
      verificarPrerequisitos();
    }
  });
});

function verificarPrerequisitos() {
  document.querySelectorAll('.ramo.locked').forEach(ramo => {
    const prereqCode = ramo.dataset.prereq;
    const prereqElement = document.querySelector(`[data-code="${prereqCode}"]`);

    if (prereqElement && prereqElement.classList.contains('aprobado')) {
      ramo.classList.remove('locked');
    }
  });
}

