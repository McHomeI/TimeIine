document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll("#timeline ul li .box");

    function checkBoxes() {
        const triggerBottom = window.innerHeight * 0.9; // 화면의 90% 높이에서 애니메이션 실행

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                box.classList.add("show");
                box.classList.remove("hide");
            } else {
                box.classList.add("hide");
                box.classList.remove("show");
            }
        });
    }

    // Debounced checkBoxes function to reduce scroll event load
    let debounceTimeout;
    window.addEventListener("scroll", () => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(checkBoxes, 50);  // Delay the execution slightly
    });

    checkBoxes(); // 페이지 로드 시 실행
});
