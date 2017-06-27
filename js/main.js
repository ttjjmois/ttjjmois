var feed = new Instafeed({
  get: 'user',
  userId: 4703362334,
  accessToken: '4703362334.df6c138.c6388cc0d5d64a01825e2c5a02045f8f',
  target: 'instagram',
  limit: '6',
  resolution: 'standard_resolution',
  after: function() {
    var el = document.getElementById('instagram');
    if (el.classList)
      el.classList.add('show');
    else
      el.className += ' ' + 'show';
    }
  });

window.onload = function() {
	feed.run();

};
