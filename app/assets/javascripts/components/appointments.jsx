class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: 'Your title here',
      appointment_time: 'Tomorrow at 9am'
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleUserInput(obj) {
    this.setState(obj);
  }

  handleFormSubmission() {
    const appointment = {
      title: this.state.title,
      appointment_time: this.state.appointment_time
    }
    $.ajax({
      type: 'POST',
      url: '/appointments',
      data: JSON.stringify({appointment}),
      error: function(e) {
        console.log(e)
      },
      dataType: 'json',
      contentType: 'application/json'
    }).done(function(data) {
      this.addNewAppointment(data);
    }.bind(this));
  }

  addNewAppointment(appointment) {
    const appointments = React.addons.update(this.state.appointments, {$push: [appointment]});
    this.setState({appointments: appointments.sort(function(a,b){
      return new Date(a.appointment_time) - new Date(b.appointment_time);
    })})
  }

  render() {
    return (
      <div>
        <AppointmentForm
          input_title={this.state.input_title}
          input_appointment_time={this.state.input_appointment_time}
          onUserInput={this.handleUserInput}
          onFormSubmission={this.handleFormSubmission}
        />
        <AppointmentsList
          appointments={this.state.appointments}
        />
      </div>
    )
  }
}
