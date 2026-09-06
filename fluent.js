var granimInstance = new Granim({
    element: '#screen-background-canvas',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#FF6B6B', '#4ECDC4', '#1A2980'],
                ['#F7971E', '#FFD200', '#00B4DB'],
                ['#DA22FF', '#9733EE', '#FF6B6B']
            ],
            transitionSpeed: 5000
        }
    }
});