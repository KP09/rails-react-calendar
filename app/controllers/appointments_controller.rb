class AppointmentsController < ApplicationController
  def index
    @appointment = Appointment.new
    @appointments = Appointment.order('created_at DESC')
  end

  def create
    @appointment = Appointment.create(appointment_params)
    @appointments = Appointment.order('created_at DESC')
  end

  private

  def appointment_params
    params.require(:appointment).permit(:title, :appointment_time)
  end
end
