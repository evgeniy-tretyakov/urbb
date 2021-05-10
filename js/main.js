(function ($) {

  clickableBlock = function(element){
    element.each(function(){
      $(this).on('click', function(){
        let link = $(this).find('a');
        $(link)[0].click();
      });
    });
  };

  oneHeightElements = function(element) {
    var maxheight = 0;
    element.height('auto');
    element.each(function () {
      var height = $(this).height();
      if (height > maxheight) {
          maxheight = height;
      }
    });
    element.height(maxheight);
  };

  htmlClear = function(element){
    element.html('');
  };

  twoElementsWrapper = function(element, wrapper){
    element.next().andSelf().wrapAll(wrapper);
  };

  innerElementsWrapper = function(element, wrapper){
    element.children().wrapAll(wrapper);
  };

  footerMenusWrapper = function(element, wrapper){
    element.children().slice(1).wrapAll(wrapper);
  };

  langSwitcher = function(element){
    let list = element.find('ul');
    let ru = element.find('li:first');
    let en = element.find('li:last');
    if (window.location.href.indexOf("en") > -1){
      element.append(en.text());
      en.hide();
      ru.show();
    } else {
      element.append(ru.text());
      ru.hide();
      en.show();
    };

    element.on('click', function(){
      list.stop().slideToggle();
      $(this).toggleClass('switcherExpanded');
    });

  };

  requisiteStyling = function(){
    $('.requisites-heading').parent().addClass('contact-requisites');
  };
  
  buttonAppend = function(container, html){
    container.append(html);
  };

  headerMenuOpener = function(button, menu){
    button.on('click', function(){
      menu.stop().slideToggle();
      $(this).toggleClass('clicked');
    });
  };

  ribblaCopyright = function(){
    $('.footer--rb_logo').html('<a href="https://ribbla.com/" target="_blank" class="ribblaLogo"></a>');
  };

  appendBlock = function(parent, block){
    parent.append(block);
  };

  videoPopup = function(videoContainer){
    let videoPopup = $("#video-view");
    videoContainer.click(function () {
      var iframe = $(this).find('iframe');
      $(this).find('iframe').clone().appendTo('#video-view');
      videoPopup.parent().show();
      videoCPopupfind('iframe').click();
    });
    $('.vid-closer').on('click', function(){
      $(this).parent().parent().hide();
      $(this).parent().find('iframe').remove();
    });

    $(document).mouseup(function (e){ 
      if(videoPopup.find('iframe').length > 0){
        if (!videoPopup.is(e.target) && videoPopup.has(e.target).length === 0) { 
          videoPopup.parent().hide();
          videoPopup.find('iframe').remove();
        }
      }
    });

    emptyLineFixer = function(element) {
      $(element).each(function(){
        if (!$(this).text().trim().length && $(this).children().length < 1 ) {
          $(this).remove();
        };
      });
    }

    parentStyling = function(element, parent, className){
      element.closest(parent).addClass(className);
    };

    sidebarExpander = function(element, className){
      element.each(function(){
        $(this).on('click', function(){
          $(this).toggleClass(className);
          $(this).next().stop().slideToggle();
        })
      });
    };

    sidebarFilterOpener = function(){
      $('.sidebar_left .block-title').on('click', function(){
        $(this).closest('.sidebar_left').toggleClass('sidebar_fullHeight');
      });
    };

    contentOpener = function(element, className){
      element.each(function(){
        $(this).on('click', function(){
          $(this).next().stop().slideToggle();
          $(this).toggleClass(className);
        });
      });
    };

    serviceItemWrapper = function(element){
      element.each(function(){
        $(this).children().not(':first-child').wrapAll('<div class="scrollable"/><div>');
      });
    };
    
    servicePicsPositioner = function(element){
      element.each(function(){
        if($(this).children('img').length > 0) {
          $(this).prev('p').andSelf().wrapAll('<div class = "picBlock"></div>');
          $(this).addClass('picItem');
        };
      });
      $('.picBlock').each(function(){
        if($(this).children().length < 2){
          $(this).find('.picItem').addClass('picFullScreen');
        }
      });
    };

    serviceFormValue = function(element, heading, input){
      element.each(function(){
        let serviceName = $(this).find(heading).text();
        console.debug(serviceName);
        let hiddenInput = $(this).find(input);
        hiddenInput.val(serviceName);
      });
    };

    formValue = function(element, title){
      element.each(function(){
        let button = $(this).find('.btn');
        let itemName = $(this).find(title).text();
        let modalField = $('.form-item-submitted-nazvanie-tehniki-ili-zapchasti input');

        button.on('click', function(){
          modalField.val(itemName);
        });

      });

    };

    classAdding = function(element, className){
      element.each(function(){
          $(this).addClass(className);
      });
    };

    frontFormButtons = function(){
      $('.form-front .form-actions').wrap('<div class="form-buttons"></div>');
      $('.form-front .webform-component--knokpka---skachat-prays').appendTo('.form-buttons');
    };

    selectiveManager = function(element, selectivesContainer){
      element.each(function(){
        let thisContainer = $(this).find(selectivesContainer);
        if(thisContainer.children().length < 2){
          $(this).hide();
        }
      });
    };

    galleryFormatterFix = function(element, thumbs, desc){
      element.each(function(){
        let galleryThumbs = $(this).find(thumbs);
        let descBlock = $(this).find(desc);
        if(galleryThumbs.children().length < 1){
          descBlock.addClass('descMargin')
        }
      });
    };

    galleryFormatterFixNews = function(element, desc){
      element.each(function(){
        let descBlock = $(this).find(desc);
        if($(this).find('.gallery-thumbs').length < 1){
          descBlock.addClass('descMargin')
        }
      });
    };

  };

  $(document).ready(function() {
    htmlClear($('#backtotop'));
    htmlClear($('.breadcrumb .first a'));
    langSwitcher($('.header--ruen .block-block'));
    buttonAppend($('.header--blue_line .container'), '<div class="mobile-menu-opener"><div>');
    headerMenuOpener($('.mobile-menu-opener'), $('header .navbar-collapse'));
    twoElementsWrapper($('.header--phone'), '<div class="header-contacts-wrapper"></div>');
    innerElementsWrapper($('.footer--static_line'), '<div class="footer-static-wrapper"></div>');
    appendBlock($('body'), '<div id="video-overlay" class="video-overlay"><div id="video-view"><div class="vid-closer"></div></div>');
    requisiteStyling();
    ribblaCopyright();
    videoPopup($(".vid-content"));
    clickableBlock($('.cards-section .views-row'));
    emptyLineFixer($('p'));
    parentStyling($('.sidebar_left'), '.main-container', 'container-aside');
    sidebarExpander($('legend.panel-heading'), 'expanded');
    sidebarFilterOpener();
    serviceItemWrapper($('.view-services .view-content .views-row'));
    contentOpener($('.page-our-services .views-row .views-field-nothing'), 'menu--opened');
    servicePicsPositioner($('.page-our-services .views-row .views-fieldset .views-field-body .field-content p'));
    serviceFormValue($('.page-our-services .views-row'), '.views-fieldset .views-field-title-1 span', '.form-item-submitted-nazvanie-uslugi input');
    classAdding($('#block-block-13'), 'news-subtitle');
    formValue($('.group-short-desc'), '.field-name-title-field .field-item.even');
    formValue($('.container-aside section.col-sm-9 .view-content .views-row'), '.views-field-title span a');
    classAdding($('.container-aside section.col-sm-9 .view-content .views-row'), 'cardsRow');
    classAdding($('.node-type-technica section.col-sm-9 .view-content .views-row'), 'cardsRow');
    classAdding($('.node-type-news section.col-sm-12 .view-content .views-row'), 'cardsRow');
    classAdding($('.node-parts'), 'detailed-card');
    classAdding($('.node-technica'), 'detailed-card');
    footerMenusWrapper($('.footer--content_line .container'), '<div class="footer-row-wrapper"></div>');
    frontFormButtons();
    selectiveManager($('.views-exposed-widgets .views-exposed-widget'), '.panel-body');
    galleryFormatterFix($('.node-type-technica'), '.galleryformatter .gallery-thumbs ul', '.detailed-card .group-short-desc');
    galleryFormatterFixNews($('.node-type-news'), '.news-node--header .field-name-body');
    clickableBlock($('.cardsRow'));

  });

})(jQuery);
