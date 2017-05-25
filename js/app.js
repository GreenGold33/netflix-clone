var tabs = $('.features-tabs__tab')
var tabsContent = $('.features-tabs-content__tab-container')
tabs.click(function (e) {
  e.preventDefault()
  var me = $(this)
  tabs.removeClass('features-tabs__tab--selected')
  me.addClass('features-tabs__tab--selected')
  tabsContent.removeClass('features-tabs-content__tab-container--selected')
  tabsContent
    .filter((i, tab) => $(tab).data('id') === me.data('id'))
    .addClass('features-tabs-content__tab-container--selected')
})
