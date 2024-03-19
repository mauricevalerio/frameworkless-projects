function clearElementChildren(parentEl) {
    while (parentEl.firstChild) {
        parentEl.removeChild(parentEl.firstChild)
    }
}

export { clearElementChildren }