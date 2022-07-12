$(function() {
  // bind change event to select
  $('#language').on('change', function()
  {
    var url = $(this).val(); // get selected value
    if (url === 'english-index')
    { // require a URL
      window.location.href = 'http://arambha.net/'; // redirect
    } else if (url === 'german-index')
    { // require a URL
      window.location.href = 'http://arambha.net/heimat.html' // redirect
    } else if (url === 'portuguese-index')
    { // require a URL
      window.location.href = 'http://arambha.net/casa.html'; // redirect
    } else if (url === 'english-blog')
    { // require a URL
      window.location.href = 'http://arambha.net/blog.html'; // redirect
    } else if (url === 'german-blog')
    { // require a URL
      window.location.href = 'http://arambha.net/blog-de.html' // redirect
    } else if (url === 'portuguese-blog')
    { // require a URL
      window.location.href = 'http://arambha.net/blog-pt.html'; // redirect
    } else if (url === 'english-friend')
    { // require a URL
      window.location.href = 'http://arambha.net/friends.html'; // redirect
    } else if (url === 'german-friend')
    { // require a URL
      window.location.href = 'http://arambha.net/freunde.html' // redirect
    } else if (url === 'portuguese-friend')
    { // require a URL
      window.location.href = 'http://arambha.net/amigos.html'; // redirect
    }
    return false;
  });
});
