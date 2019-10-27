const desaparece = () => {
    const buttons = document.querySelectorAll('[profile]')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = none;
    }
}
module.exports = desaparece()