"use strict";

$(function(){
    
    function new_external_event(){
        var et = $("#new-event-text").val();
        if (et != "") {
            $("#external-events").prepend("<a class='list-group-item external-event'>" + et + "</a>");
            prepare_external_list();
        }
    }
    function prepare_external_list(){
                    
        $("#external-events .external-event").each(function () {
            var eventObject = {title: $.trim($(this).text())};

            $(this).data("eventObject", eventObject);
            $(this).draggable({
                zIndex: 999,
                revert: true,
                revertDuration: 0
            });
        });

    }
    
    var todayDate = moment().startOf('day');
    var YM = todayDate.format('YYYY-MM');
    var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
    var TODAY = todayDate.format('YYYY-MM-DD');
    var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

    prepare_external_list();

    var calendar = $("#calendar").fullCalendar({
        header: {
            left: "prev,next today",
            center: "title",
            right: "month,agendaWeek,agendaDay"
        },
        buttonIcons: {
            prev: "fa fa-angle-left",
            next: "fa fa-angle-right",
            prevYear: "fa fa-angle-left",
            nextYear: "fa fa-angle-right"
        },
        editable: true,
        events: [
            {
              title: 'All Day Event',
              start: YM + '-01',
              className: 'orange'
            },
            {
              title: 'Long Event',
              start: YM + '-07',
              end: YM + '-10',
              className: 'green'
            },
            {
              id: 999,
              title: 'Repeating Event',
              start: YM + '-09T16:00:00',
              className: 'blue'
            },
            {
              id: 999,
              title: 'Repeating Event',
              start: YM + '-16T16:00:00',
              className: 'orange'
            },
            {
              title: 'Conference',
              start: YESTERDAY,
              end: TOMORROW,
              className: 'red'
            },
            {
              title: 'Meeting',
              start: TODAY + 'T10:30:00',
              end: TODAY + 'T12:30:00',
              className: 'orange'
            },
            {
              title: 'Lunch',
              start: TODAY + 'T12:00:00',
              className: 'red'
            },
            {
              title: 'Meeting',
              start: TODAY + 'T14:30:00',
              className: 'green'
            },
            {
              title: 'Happy Hour',
              start: TODAY + 'T17:30:00',
              className: 'blue'
            },
            {
              title: 'Dinner',
              start: TODAY + 'T20:00:00',
              className: 'orange'
            },
            {
              title: 'Birthday Party',
              start: TOMORROW + 'T07:00:00',
              className: 'red'
            },
            {
              title: 'Click for Google',
              url: 'http://google.com/',
              start: YM + '-28',
              className: 'green'
            }
        ],
        droppable: true,
        selectable: true,
        selectHelper: true,
        select: function (start, end, allDay) {
            var title = prompt("Event Title:");
            if (title) {
                calendar.fullCalendar("renderEvent",{title: title,start: start,end: end,allDay: allDay},true);
            }
            calendar.fullCalendar("unselect");
        },
        drop: function (date, allDay) {

            var originalEventObject = $(this).data("eventObject");

            var copiedEventObject = $.extend({}, originalEventObject);

            copiedEventObject.start = date;
            copiedEventObject.allDay = allDay;

            $("#calendar").fullCalendar("renderEvent", copiedEventObject, true);


            if ($("#drop-remove").is(":checked")) {
                $(this).remove();
            }

        }
    });

    $("#new-event").on("click", function () {
        new_external_event();
        return false;
    });
    $("#new-event-form").on("submit",function(){
        new_external_event();
        return false;
    });
});