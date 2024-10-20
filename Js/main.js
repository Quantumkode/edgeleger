// sticky menu background
window.addEventListener('scroll', function() {
    if (this.window.scrollY > 150){
        this.document.querySelector('#navbar').computedStyleMap.opacity = 0.9;
    } else {
        this.document.querySelector ('#navbar').computedStyleMap.opacity = 1;
    }
});




// Smooth scrolling with easing effect
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        // Add animation to scroll to the target section with easing
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800,  // Duration (in milliseconds)
            'swing' // Easing function ('swing' or 'linear')
        );
    }
});
