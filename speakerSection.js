const speakersList = [
  {
    image: 'writers/stephen-king.jpg',
    speakerName: 'Stephen King',
    speakerTitle: 'The master of horror',
    description:
      ' He is the author of nearly 90  books, most of them worldwide bestsellers. His latest novel, BILLY SUMMERS, may even be his best work ever. Also, other favorites .',
  },
  {
    image: 'writers/Barker.jpg',
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
    speakerTitle: 'In the Vampire market',
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

let cards = '';
speakersList.forEach((speaker) => {
  cards += `   <div class="speaker-card">
<img class="speaker-img" src="${speaker.image}" alt="">
<div class="speaker-detail">
  <h4 class="speaker-name">${speaker.speakerName}</h4>
  <p class="speaker-title">${speaker.speakerTitle}</p>
  <p class="speaker-desc">${speaker.description}</p>
</div>
</div>`;
});

document.querySelector('#speaker-container').innerHTML = cards;
