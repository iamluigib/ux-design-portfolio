const swup = new Swup();

M.AutoInit();

// Code that should make SWUP transition to the top of the linked page but doesn't. I assume it has to do with the Scroll Plugin that I don't quite know how it works. 

/*
const options = {
    animationSelector: '[class*="transition-fade"]',
    animateHistoryBrowsing: true,
    plugins: [

        new SwupScrollPlugin({
            animateScroll: false
        })
    ]
};

const swup = new Swup(options);

let scrollValues = {};

swup.on('clickLink', () => {
    scrollValues[window.location.href] = window.scrollY;
});

swup.on('popState', () => {
    setTimeout(function() {
        window.scrollTo(0, scrollValues[window.location.href]);
    }, 100);
});
*/
