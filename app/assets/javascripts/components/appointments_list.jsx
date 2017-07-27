class AppointmentsList extends React.Component {
  render() {
    return (
      <div>
        <h2>All your appointments</h2>
        {this.props.appointments.map(function(appointment, index) {
          return (
            <Appointment key={appointment.id} appointment={appointment} />
          )
        })}
      </div>
    )
  }
}
