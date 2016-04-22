/*jslint browser: true */
/*global $, jQuery, alert, console, OslerThreshold:true */

var console = console || { log: function() { 'use strict'; } };



window.OslerThreshold = window.OslerThreshold || {};

(function (s) {

    'use strict';

    s.App = function () {

        return {
            initialized: false,
            elements: {},
            settings: {
                debug: false,
                host_url: 'http://' + window.location.hostname + '/'
            },

            init: function () {


                if (this.settings.debug) { console.log('init()'); }

                if (this.initalized) { return false; }
                this.initialized = true;

                //dom elements
                this.elements.body          = $('body', 'html');
                this.elements.debug         = $('#txtDebug', this.elements.body);
                this.elements.pageSections  = $('.inner-wrap > section');
                this.elements.sideNav       = $('.side-nav', this.elements.body);
                this.elements.sideNavLinks  = $('li a', this.elements.sideNav);
                this.elements.currentYear   = $('.current-year', this.elements.body);

                //configure debug based on config file
                if (this.elements.debug.val()) {
                    this.settings.debug = true;
                    this.initDebug();
                }

                //initialize foundation
                $(document).foundation();

                this.initSideNav();

                // //populate current year for copyrite in footer
                var d = new Date();
                this.elements.currentYear.html(d.getFullYear());


            },

            initSideNav: function () {

                if (this.settings.debug) { console.log('initInPageAnchors()'); }

                var dest = 0,
                    offset = 0,
                    THIS = this;

                // click event
                $(this.elements.sideNavLinks).click(function (e) {
                    e.preventDefault();
                    // remove current 'on' class
                    $(THIS.elements.sideNavLinks).removeClass('on');
                    // set current 'on' class
                    $(this).addClass('on');
                    // get destination
                    dest = $(this.hash).offset().top;
                    offset = 0;
                    // animate the page body
                    $('html, body').animate({
                        scrollTop: dest - offset
                    }, 2000, 'swing');
                });

                // waypoints js
                $(this.elements.pageSections).each( function (i, e) {

                    var section_id = $(this).attr('id');

                    // offset used on last section only
                    if(section_id === 'section6'){
                        offset = 450;
                    }

                    var waypoint = new Waypoint({
                        element: document.getElementById(section_id),
                        handler: function(direction) {
                            $(THIS.elements.sideNavLinks).removeClass('on');
                            $('a.' + section_id, THIS.elements.sideNav).addClass('on');
                        },
                        offset: offset
                    });

                });

                // Scrollify.js (snap effect)
                $.scrollify({
                    section: '.section'
                })

            },

            initDebug: function () {

                if (this.settings.debug) { console.log('initDebug()'); }

                $(this.elements.body).append('<div id="debug-message"></div>');
                $('#debug-message').append('<p class="small">small</p><p class="medium">medium</p><p class="large">large</p><p class="exlarge">extra large</p>');
                $(window).resize(function () {
                    $('#debug-message').empty();
                    $('#debug-message').append('<p class="small">small</p><p class="medium">medium</p><p class="large">large</p><p class="exlarge">extra large</p>');
                    $('#debug-message').append('<p>width: ' + window.innerWidth + '</p>');
                });

            }

        };

    };

}(OslerThreshold));



$(document).ready(function() {
    'use strict';
    OslerThreshold.App().init();
});




