const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )

  //speakers 

  const speaker = [
  {
    image: image,
    speakerName: 'Stephen King',
    speakerTitle : 'The master of horror',
    description: ' He is the author of nearly 90  books, most of them worldwide bestsellers. His latest novel, BILLY SUMMERS, may even be his best work ever. Also, other favorites from the last decade were The Outsider, The Bazaar of Bad Dreams, Finders Keepers, and Mr. Mercedes'

  }
  ,
  {
    image: image,
    speakerName: 'Clive Barker',
    speakerTitle : 'Writer and Filmaker',
    description: 'Clive Barker is one of the prominent contemporary English writers. Besides writing, he is recognized for his creative input in the domain of filmmaking, screenwriting and video game designing. His forte remained the genre of horror and fantasy fiction.'

  }
  ,
  {
    image: image,
    speakerName: 'Dean Konntz',
    speakerTitle : "Don't hate me. Mr. Formula",
    description: 'American author. His novels are billed as suspense thrillers, but frequently incorporate elements of horror, fantasy, science fiction, mystery, and satire.'

  }
  ,
  {
    image: image,
    speakerName: 'Anne Rice',
    speakerTitle : "She's cornered the market on Vampires",
    description: "Anne Rice is the author of over 30 books, most recently the Toby O'Dare novels Of Love and Evil, and Angel Time; the memoir, Called Out of Darkness;and her two novels about Jesus, Christ the Lord: Out of Egypt and Christ the Lord: The Road to Cana."

  }
  ,
  {
    image: image,
    speakerName: 'Neil Gaiman',
    speakerTitle : 'TBritish writer',
    description: 'The most underrated writer of our generation, Neil Gaimans work has been honoured with many awards internationally, including the Newbery and Carnegie Medals.'

  }
  ,
  {
    image: image,
    speakerName: 'Jonathan Maberry',
    speakerTitle : 'New York Times best-selling ',
    description: 'He was named one of the Today s Top Ten Horror Writers by Horror Novel Reviews. His books have been sold in more than two-dozen countries. '

  }
  

]