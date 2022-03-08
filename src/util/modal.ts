function openModal(div: HTMLDivElement) {
    div.style.display = "block";
    div.style.paddingRight = "17px";
    div.className="modal fade show";
}

function closeModal(div: HTMLDivElement) {
    div.style.display = "none";
    div.className="modal fade";
}

export {
    openModal,
    closeModal
}