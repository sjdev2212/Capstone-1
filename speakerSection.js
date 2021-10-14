const speakerDiv = document.querySelector('.speakers');
const speakerDivMob = document.querySelector('.speakers-mob');
const speakerHeader = document.querySelector('.speaker-header');
speakerDiv.className = 'speakers-container';
const header = document.createElement('h3');
header.innerHTML = 'Featured Speakers';
header.setAttribute('style', 'font-size:6vw; margin-top:20vw; text-align:center;height: 200px;');
speakerHeader.appendChild(header);

const speakersList = [
  {
    image: 'writers/stephen-king.jpg',
    speakerName: 'Stephen King',
    speakerTitle: 'The master of horror',
    description:
      ' He is the author of nearly 90  books, most of them worldwide bestsellers. His latest novel, BILLY SUMMERS, may even be his best work ever. Also, other favorites .',
  },
  {
    image: 'writers/Barker.png',
    speakerName: 'Clive Barker',
    speakerTitle: 'Writer and Filmaker',
    description:
      'Clive Barker is one of the prominent contemporary English writers. Besides writing, he is recognized for his creative input in the domain of filmmaking.',
  },
  {
    image: 'writers/Koontz.jpg',
    speakerName: 'Dean Konntz',
    speakerTitle: "Don't hate me. Mr. Formula",
    description:
      'American author. His novels are billed as suspense thrillers, but frequently incorporate elements of horror, fantasy, science fiction, mystery, and satire.',
  },
  {
    image: 'writers/Rice.jpg',
    speakerName: 'Anne Rice',
    speakerTitle: "She's cornered the market on Vampires",
    description:
      "Anne Rice is the author of over 30 books, most recently the Toby O'Dare novels Of Love and Evil, and Angel Time; the memoir, Called Out of Darkness;and her two novels about Jesus",
  },
  {
    image: 'writers/Gaiman.jpg',
    speakerName: 'Neil Gaiman',
    speakerTitle: 'British writer',
    description:
      'The most underrated writer of our generation, Neil Gaimans work has been honoured with many awards internationally, including the Newbery and Carnegie Medals.',
  },
  {
    image: 'writers/maberry.jpg',
    speakerName: 'Jonathan Maberry',
    speakerTitle: 'New York Times best-selling ',
    description:
      'He was named one of the Today s Top Ten Horror Writers by Horror Novel Reviews. His books have been sold in more than two-dozen countries. ',
  },
];

for (let i = 0; i < speakersList.length; i += 1) {
  const div = document.createElement('div');
  div.className = 'speaker-cards';
  const divRight = document.createElement('div');
  divRight.className = 'speaker-right';
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  const image = document.createElement('img');
  image.src = speakersList[i].image;
  image.className = 'speakers-images';
  const speakerName = document.createElement('h2');
  speakerName.className = 'speaker-name';
  speakerName.innerHTML = speakersList[i].speakerName;
  const speakerTitle = document.createElement('h3');
  speakerTitle.className = 'speaker-title';
  speakerTitle.innerHTML = speakersList[i].speakerTitle;
  const desc = document.createElement('p');
  desc.className = 'speaker-desc';
  desc.innerHTML = speakersList[i].description;
  div.appendChild(image);
  divRight.appendChild(speakerName);
  divRight.appendChild(speakerTitle);
  divRight.appendChild(desc);
  div.appendChild(divRight);
  cardDiv.appendChild(div);
  cardDiv.appendChild(divRight);
  speakerDiv.appendChild(cardDiv);
}

for (let i = 0; i < speakersList.length; i += 1) {
  const div = document.createElement('div');
  div.className = 'speaker-cards';
  const divRight = document.createElement('div');
  divRight.className = 'speaker-right';

  const image = document.createElement('img');
  image.src = speakersList[i].image;
  image.className = 'speakers-images';
  const speakerName = document.createElement('h2');
  speakerName.className = 'speaker-name';
  speakerName.innerHTML = speakersList[i].speakerName;
  const speakerTitle = document.createElement('h3');
  speakerTitle.className = 'speaker-title';
  speakerTitle.innerHTML = speakersList[i].speakerTitle;
  const desc = document.createElement('p');
  desc.className = 'speaker-desc';
  desc.innerHTML = speakersList[i].description;
  div.appendChild(image);
  divRight.appendChild(speakerName);
  divRight.appendChild(speakerTitle);
  divRight.appendChild(desc);
  div.appendChild(divRight);
  speakerDivMob.appendChild(div);
}
