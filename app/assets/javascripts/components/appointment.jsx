class Appointment extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.appointment.title}</h3>
        <p>{this.props.appointment.appointment_time}</p>
      </div>
    )
  }
}
