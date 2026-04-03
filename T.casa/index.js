
    const modal = document.getElementById("modalAvaliacao");
    const abrir = document.getElementById("abrirModal");
    const fechar = document.getElementById("fecharModal");
    const stars = document.querySelectorAll(".star");
    const enviar = document.getElementById("enviarAvaliacao");

    let avaliacao = 0;

    abrir.onclick = () => modal.style.display = "block";
    fechar.onclick = () => modal.style.display = "none";
    window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        rating = index + 1;
        updateStars();
      });
    
      star.addEventListener('mouseover', () => {
        highlightStars(index);
      });
    
      star.addEventListener('mouseout', () => {
        highlightStars(rating - 1);
      });
    });
    
    function updateStars() {
      stars.forEach((star, i) => {
        star.classList.toggle('selected', i < rating);
      });
    }
    
    function highlightStars(index) {
      stars.forEach((star, i) => {
        star.classList.toggle('hovered', i <= index);
      });
    }

    enviar.onclick = () => {
      const comentario = document.getElementById("comentario").value;
      alert(`Avaliação enviada!\n⭐ ${avaliacao} estrelas\n💬 Comentário: ${comentario}`);
      modal.style.display = "none";
    };