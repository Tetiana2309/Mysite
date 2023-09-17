document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const openModalBtn = document.getElementById("openModalBtn_");
    const closeModalBtn = document.querySelector(".close_");

    let timer; 

    
    function openModal() {
        modal.classList.add("active");
        modal.style.animation = "fadeIn 0.3s";
            timer = setTimeout(closeModal, 5000);
    }

    
    function closeModal() {
        modal.style.animation = "none"; 
        modal.classList.remove("active");
        clearTimeout(timer); 
    }

    
    openModalBtn.addEventListener("click", openModal);
        if (closeModalBtn) {
        closeModalBtn.addEventListener("click", closeModal);
    }

    
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

 
    document.addEventListener("mousemove", function () {
        clearTimeout(timer); 
        timer = setTimeout(closeModal, 5000); 
    });
});








