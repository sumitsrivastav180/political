/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */

(function () {
    var container, button, menu, links, i, len;

    container = document.getElementById('site-navigation');
    if (!container) {
        return;
    }

    // Menu Toggle Button.
    button = container.getElementsByTagName('button')[0];
    if ('undefined' === typeof button) {
        return;
    }

    menu = container.getElementsByTagName('ul')[0];

    // Hide menu toggle button if menu is empty and return early.
    if ('undefined' === typeof menu) {
        button.style.display = 'none';
        return;
    }

    menu.setAttribute('aria-expanded', 'false');
    if (-1 === menu.className.indexOf('nav-menu')) {
        menu.className += ' nav-menu';
    }

    button.onclick = function () {
        if (-1 !== container.className.indexOf('toggled')) {
            container.className = container.className.replace(' toggled', '');
            button.setAttribute('aria-expanded', 'false');
            menu.setAttribute('aria-expanded', 'false');
        } else {
            container.className += ' toggled';
            button.setAttribute('aria-expanded', 'true');
            menu.setAttribute('aria-expanded', 'true');
        }

        icon = button.getElementsByTagName('i')[0]
        if ('true' === button.getAttribute("aria-expanded")) {
            icon.setAttribute('class', 'icon-bars');
            icon.setAttribute('class', 'icon-times');
            if (document.body.classList.contains('mobile-menu-style-sidebar')) {
                document.getElementById("sidebar-menu-overlay").style.display = "block";
            }
        } else {
            icon.setAttribute('class', 'icon-bars');
            if (document.body.classList.contains('mobile-menu-style-sidebar')) {
                document.getElementById("sidebar-menu-overlay").style.display = "none";
            }
        }
    };

    var responsiveToggleClass = function (el, className) {
        if (el.classList.contains(className)) {
            el.classList.remove(className);
        } else {
            el.classList.add(className);
        }
    };

    /**
     * Toggles `focus` class to allow submenu access on tablets.
     */
    (function (container) {
        var mobile_menu_breakpoint = responsive_breakpoint.mobileBreakpoint,
            breakpoint = window.matchMedia('(max-width: ' + mobile_menu_breakpoint + 'px)');
        var touchStartFn, i,
            parentLink = container.querySelectorAll('.menu-item-has-children > .res-iconify, .page_item_has_children > .res-iconify.no-menu');
        touchStartFn = function (e) {
            var parent_li = this.parentNode, i;
            if (parent_li.classList.contains('menu-item-has-children')) {
                responsiveToggleClass(parent_li, 'res-submenu-expanded');
                if (parent_li.classList.contains('res-submenu-expanded')) {
                    parent_li.querySelector('.sub-menu').style.display = 'block';
                    if (breakpoint.matches) {
                        parent_li.style.width = '100%';
                    }
                } else {
                    parent_li.querySelector('.sub-menu').style.display = 'none';
                    if (breakpoint.matches) {
                        parent_li.style.width = 'auto';
                    }
                }
            } else if (parent_li.classList.contains('page_item_has_children')) {
                responsiveToggleClass(parent_li, 'res-submenu-expanded');
                if (parent_li.classList.contains('res-submenu-expanded')) {
                    parent_li.querySelector('.children').style.display = 'block';
                    if (breakpoint.matches) {
                        parent_li.style.width = '100%';
                    }
                } else {
                    parent_li.querySelector('.children').style.display = 'none';
                    if (breakpoint.matches) {
                        parent_li.style.width = 'auto';
                    }
                }
            }
        };

        for (i = 0; i < parentLink.length; ++i) {
            parentLink[i].addEventListener('click', touchStartFn, false);
        }
    }(container));

    search_link = document.getElementById('res-search-link');

    if (search_link) {
        search_link.onclick = function () {
            search_form = container.getElementsByTagName('form')[0];
            if (search_form.style.display == 'block') {
                search_form.style.display = 'none';
            } else {
                search_form.style.display = 'block';
            }
        }
    }

    search_style = document.getElementById('full-screen-res-search-link');

    if (search_style) {
        search_style_form = document.getElementById('full-screen-search-wrapper');
        search_style_form.style.display = 'none';
        search_style.onclick = function () {
            search_style_form.style.display = 'block';
            search_style_form.style.position = 'fixed';
            search_form = container.getElementsByTagName('form')[0];
            search_form.style.display = 'block';
        }
    }

    search_close = document.getElementById('search-close');
    if (search_close) {
        search_close.onclick = function () {
            search_style_form = document.getElementById('full-screen-search-wrapper');
            search_style_form.style.display = 'none';
        }
    }


    menu_close = document.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');
    if (menu_close) {
        menu_close.onclick = function () {
            sub_menu = document.querySelectorAll('sub-menu');
            if (sub_menu.style.display == 'block') {
                sub_menu.style.display = 'none';
            } else {
                sub_menu.style.display = 'block';
            }
        }
    }

    let siteBrandingToggle = document.querySelector('.site-branding');
    if (!siteBrandingToggle) {
        let element = document.querySelector('body');
        element.classList.add("site-branding-off");
    }

})();
