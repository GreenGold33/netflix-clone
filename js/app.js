var tabs = $('.features-tabs__tab')
tabs.click(function (e) {
  e.preventDefault()
  tabs.removeClass('features-tabs__tab--selected')
  $(this).addClass('features-tabs__tab--selected')
})
