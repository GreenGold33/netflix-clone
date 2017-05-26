var tabs = $('#features > nav a')
var tabsContent = $('.features-tabs-content__tab-container')
tabs.click(function (e) {
  e.preventDefault()
  var me = $(this)
  tabs.removeClass('is-selected')
  me.addClass('is-selected')
  tabsContent.removeClass('features-tabs-content__tab-container--selected')
  tabsContent
    .filter((i, tab) => $(tab).data('id') === me.data('id'))
    .addClass('features-tabs-content__tab-container--selected')
})
