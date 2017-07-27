class AppointmentForm extends React.Component {
  handleChange(e) {
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmission();
  }

  render() {
    return (
      <div>
        <h2>Make a new appointment</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            name="title"
            placeholder="Appointment title"
            value={this.props.input_title} onChange={this.handleChange.bind(this)}>
          </input>
          <input
            name="appointment_time"
            placeholder="Appointment time"
            value={this.props.input_appointment_time} onChange={this.handleChange.bind(this)}>
          </input>
          <input type="submit" value="Make appointment"></input>
        </form>
      </div>
    )
  }
}
