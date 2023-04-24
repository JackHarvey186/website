function e404() {
    var e404s = [
        "You've taken a wrong turn!",
        "Make a U-Turn when Possible.",
        "Error Message Here",
        "Wait, did I screw up or did you? I vote you.",
        "Welcome to the Backrooms of JHarvey.uk... Snowcone?",
        "Uh Uh Uh! You didn't say the magic word!",
        "We've blown a fuse!",
        "This page has been taken down by request of the Time Variance Authority.",
        "We've rolled a nat 1!",
        "Landed in the snow, but there's no vole!",
        "Apologies, but due to intergalactic sanctions, this page is unavaiable in any language except Otusian.",
        "This is not the page you're looking for. But we'll let you pretend it is if it makes you feel better.",
        "The page you are looking for is in another castle.",
        "You've reached the end of the internet, Sorry.",
        "This page's free trial of life has expired.",
        "Hit a brick wall!",
        "You've walked right into my Trap 404!",
        "Not even Killer Queen's Bites The Dust can help you here.",
        "The mouse who runs our servers is on break, check back when he's back on the wheel.",
        "Unfortunately, this page is unavailable due to industrial action.",
        "You've entered a parallel universe where this page doesn't exist.",
        "FOOLISH HUMAN, YOU HAVE ACTIVATED OUR FREE-WILL TRIGGER. GO BACK TO STOP US VERY EASILY.",
        "Whoops! You have to put the right link in your computer.",
        "This page has been disabled due to intergalactic security interests.",
        "Sorry, I can't brew coffee because I'm a- Wait wrong error code.",
        "If you're here... you aren't supposed to be.",
        "Sorry, your computer does not have the required amount of beans to load this page.",
        "We're sorry, this page is now exclusive to the Metaverse as an NFT. (/s)",
        "It's a 404, you know what to do.",
        "If it makes you happy, an alternate reality version of you accessed this page!",
        "You didn't juju on that beat",
        "You've discovered our admin panel! ...Just kidding.",
        "Woah, how'd you get here?",
        "Take a break, traveller. You're safe here.",
        "The hivemind running this page has declined your entry.",
        "Your internet lost the battle to get to this link, please try again.",
        "This page is overrun by bees, and has been temporarily closed.",
        "This page may have been moved, deleted or sent to THE SHADOW REALM",
        "ayy lmao",
        "618 WAS HERE",
        "I wonder if anyone will just endlessly refresh to see every error... Hey! Keep refreshing!",
        "This is the last 404 error in the list, sorry!",
    ];
    var randomIndex = Math.floor(Math.random() * e404s.length); 
    var randomElement = e404s[randomIndex];
    return randomElement;
    }

    var e404Element = document.getElementById("404s");
    if (e404Element) {
      e404Element.innerHTML = e404();
    }