import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import momentPlugin, { toMoment } from '@fullcalendar/moment'
import moment from 'moment'

const MyCalendar = () => (
  <div id='calendar'></div>
);

MyCalendar.defaultHooks = {
  onComponentDidMount() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new Calendar(calendarEl, {
      plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, momentPlugin],
      themeSystem: 'bootstrap',
      height: '500px',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      titleFormat: 'MMMM D, YYYY',
      nowIndicator: true,
      now: moment().format(),
      initialView: 'timeGridDay',
      scrollTime: moment().format('HH:mm:ss'),
      navLinks: true,
      editable: true,
      selectable: true,
      dayMaxEvents: true,
      dateClick: function (info) {
        let m = toMoment(info.date, calendar);
        alert('clicked on ' + m.format());
      },
      select: function (info) {
        alert('selected ' + info.startStr + ' to ' + info.endStr);
      }
    });

    calendar.render();
  }
}

export default MyCalendar;