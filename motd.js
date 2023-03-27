// Thanks Ash for the free code
    function motdsfunction() {
      var motds = [
          "Owl Extraordinare",
          "What're you looking for down here?",
          "When the | When the",
          "Titanfall 2 is a great game and you should play it now",
          "Coo-Coo-Coo-Roo!",
          "I'm busy right now, can I ignore you later?",
          "Did you know? Great Horned Owls have the largest eyes of any owl species.",
          "Frinkin' Racdrops, I committed to main!",
          "I python-java'd your mum last night",
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
          "Find the secret: 618",
          "01011001 01001111 01010101 00100000 01001000 01000001 01010110 01000101 00100000 01010100 01001111 01001111 00100000 01001101 01010101 01000011 01001000 00100000 01000110 01010010 01000101 01000101 00100000 01010100 01001001 01001101 01000101 00101110",
          "Look! A rare MOTD!",
          "King of the woodland, Bane of voles everywhere.",
          "If you're reading this, you're my 2nd favourite visitor!",
          "All hail Gaben",
          "The contents of this website may contain material that disgusts, offends or disturbs.",
          "Coded in HTML, CSS and my sheer determination.",
          "!!! ATTENTION !!! Thank you for your attention.",
          "Wow! You're part of the 0.01% of vistors who don't know the fog is coming!",
          ":>",
          "Nice page, one problem: I am inside your browser.",
          "Error 404: MOTD not found.",
          "Oops, I forgot to make a MOTD.",
          "Thanks Ash for making this MOTD code, which I then stole.",
          ".",
          "You've reached the end of the MOTD list, there is no more funny here. Please, go touch grass."
      ];
      var randomIndex = Math.floor(Math.random() * motds.length); 
      var randomElement = motds[randomIndex];
      return randomElement;
      }

      var motdElement = document.getElementById("motd");
      if (motdElement) {
        motdElement.innerHTML = motdsfunction();
      }