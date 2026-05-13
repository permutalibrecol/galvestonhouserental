document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar-container');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'en', // Cambia a 'es' si prefieres mostrarlo en español por defecto
        firstDay: 1,
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth'
        },
        // Fechas de prueba premium para simular reservas de Airbnb/VRBO en vivo
        events: [
            {
                title: 'Airbnb Booking',
                start: '2026-05-15',
                end: '2026-05-19',
                color: '#121110', // Color sofisticado oscuro a juego con el diseño
                textColor: '#ffffff'
            },
            {
                title: 'VRBO Reserved',
                start: '2026-05-22',
                end: '2026-05-25',
                color: '#c5a880', // Color dorado/arena de lujo
                textColor: '#121110'
            },
            {
                title: 'Booking Direct',
                start: '2026-05-28',
                end: '2026-06-02',
                color: '#121110',
                textColor: '#ffffff'
            }
        ]
    });

    calendar.render();
});
