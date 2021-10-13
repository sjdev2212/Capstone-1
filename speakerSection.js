const test = document.querySelector("#speakers");
test.className= "speakers-container"
let header = document.createElement("h3");
header.innerHTML= 'Featured Speakers';
header.setAttribute('style', 'font-size:6vw; text-align:center;height: 200px;');
test.appendChild(header);

  


const speakersList = [
    {
      image:"/writers/stephen-king.jpg",
      speakerName: 'Stephen King',
      speakerTitle : 'The master of horror',
      description: ' He is the author of nearly 90  books, most of them worldwide bestsellers. His latest novel, BILLY SUMMERS, may even be his best work ever. Also, other favorites from the last decade were The Outsider, The Bazaar of Bad Dreams, Finders Keepers, and Mr. Mercedes'
  
    }
    ,
    {
      image: "/writers/Barker.png",
      speakerName: 'Clive Barker',
      speakerTitle : 'Writer and Filmaker',
      description: 'Clive Barker is one of the prominent contemporary English writers. Besides writing, he is recognized for his creative input in the domain of filmmaking, screenwriting and video game designing. His forte remained the genre of horror and fantasy fiction.'
  
    }
    ,
    {
      image: "/writers/Koontz.jpg",
      speakerName: 'Dean Konntz',
      speakerTitle : "Don't hate me. Mr. Formula",
      description: 'American author. His novels are billed as suspense thrillers, but frequently incorporate elements of horror, fantasy, science fiction, mystery, and satire.'
  
    }
    ,
    {
      image: "/writers/Rice.jpg" ,
      speakerName: 'Anne Rice',
      speakerTitle : "She's cornered the market on Vampires",
      description: "Anne Rice is the author of over 30 books, most recently the Toby O'Dare novels Of Love and Evil, and Angel Time; the memoir, Called Out of Darkness;and her two novels about Jesus, Christ the Lord: Out of Egypt and Christ the Lord: The Road to Cana."
  
    }
    ,
    {
      image: "/writers/Gaiman.jpg",
      speakerName: 'Neil Gaiman',
      speakerTitle : 'TBritish writer',
      description: 'The most underrated writer of our generation, Neil Gaimans work has been honoured with many awards internationally, including the Newbery and Carnegie Medals.'
  
    }
    ,
    {
      image: "/writers/maberry.jpg",
      speakerName: 'Jonathan Maberry',
      speakerTitle : 'New York Times best-selling ',
      description: 'He was named one of the Today s Top Ten Horror Writers by Horror Novel Reviews. His books have been sold in more than two-dozen countries. '
  
    }
    
  
  ]


  for( let i= 0; i<speakersList.length; i++) {
    let div =document.createElement("div");
    div.className = "speaker-cards";
    let image = document.createElement("img");
    image.src = speakersList[i].image;
    image.className = "speakers-images"
    let speakerName = document.createElement("h2");
    speakerName.innerHTML= speakersList[i].speakerName;
    let speakerTitle = document.createElement("h3");
    speakerTitle.innerHTML = speakersList[i].speakerTitle;
    let desc = document.createElement("p");
    desc.innerHTML= speakersList[i].description;
    div.appendChild(image);
    div.appendChild(speakerName)
    div.appendChild(speakerTitle)
    div.appendChild(desc);
    test.appendChild(div);
}




 
  