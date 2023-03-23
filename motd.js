// Thanks Ash for the free code
function motds() {
    var motds = [
        "Owl Extraordinare",
        "What're you looking for down here?",
        "When the | When the",
        "Titanfall 2 is a great game and you should play it now",
        "Coo-Coo-Coo-Roo!",
        "I'm busy right now, can I ignore you later?",
        "Did you know? Great Horned Owls have the largest eyes of any owl species.",
        "Frinkin' Racdrops, I committed to main!",
        "I python-java'd your mum",
        "ooooo you want to commit to main oooo",
        "Tea is better than coffee, fight me.",
        "STARS AND STRIPES BEATS HAMMER AND SICKLE, LOOK IT UP!",
        "Rock, Paper, BFG!",
        "*hl1 scientist scream*",
        "Make Strong the Weak, Mend the Broken, Make Powerless those who abuse the frail.",
        "Proudly accident free since... last week.",
        "Making your day a little brighter",
        "You're surrounded! Accept our terms of service!",
        "Copilot sure is nifty",
        "bruh",
        "help me im being forced to write these against my will i am located at",
        "Thanks for the visit, here's an owl! (OvO)",
        "Rolled a nat 20 to load this page!",
        "You've reached the end of the MOTD list, there is no more funny here. Please, go touch grass."
    ];
    var randomIndex = Math.floor(Math.random() * motds.length); 
    var randomElement = motds[randomIndex];
    return motds[randomElement];
}
motds();