function e404() {
    var e404s = [
        "You've taken a wrong turn!",
        "Make a U-Turn when Possible.",
        "Error Message Here",
        "Wait, did I screw up or did you? I vote you.",
        "Welcome to the Backrooms of JHarvey.uk... Snowcone?",
        "Uh Uh Uh! You didn't say the magic word!",
        "We've blown a fuse!",
        "We're sorry, but the site you requested is no longer of this reality. Please try again.",
        "This page has been taken down by request of the Time Variance Authority.",
        "We've rolled a nat 1!",
        "Landed in the snow, but there's no vole!",
        "Apologies, but due to intergalactic sanctions, this page is unavaiable in any language except Otusian.",
    ];
    var randomIndex = Math.floor(Math.random() * e404s.length); 
    var randomElement = e404s[randomIndex];
    return randomElement;
    }

    var e404Element = document.getElementById("404s");
    if (e404Element) {
      e404Element.innerHTML = e404();
    }