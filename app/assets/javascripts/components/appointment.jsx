// Stateless functional component
const Appointment = ({appointment}) =>
    <div>
      <h3>{appointment.title}</h3>
      <p>{formatDate(appointment.appointment_time)}</p>
    </div>
