// Stateless functional component
const AppointmentsList = ({appointments}) =>
  <div>
    <h2>All your appointments</h2>
    {appointments.map(function(appointment, index) {
      return (
        <Appointment key={appointment.id} appointment={appointment} />
      )
    })}
  </div>
