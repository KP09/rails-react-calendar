import React from 'react'
import moment from 'moment'
import { formatDate } from './utils'

// Stateless functional component
export const Appointment = ({appointment}) =>
    <div>
      <h3>{appointment.title}</h3>
      <p>{formatDate(appointment.appointment_time)}</p>
    </div>
