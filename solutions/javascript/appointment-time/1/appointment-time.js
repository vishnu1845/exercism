// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  // let date = new Date()
  // return date
  const baseTime = now !== undefined ? now : Date.now()  
  const appointmentTime = baseTime + days * 24 * 60 * 60 * 1000
  return new Date(Date.parse(new Date(appointmentTime).toISOString()))
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString()
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const date = new Date(timestamp);

  return {
    year: date.getFullYear(),
    month: date.getMonth(),  
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const date = new Date(timestamp);

  if ("year" in options) date.setFullYear(options.year);
  if ("month" in options) date.setMonth(options.month); // keep 0-based
  if ("date" in options) date.setDate(options.date);
  if ("hour" in options) date.setHours(options.hour);
  if ("minute" in options) date.setMinutes(options.minute);

  return {
    year: date.getFullYear(),
    month: date.getMonth(), // ✅ keep 0-based
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const dateA = new Date(timestampA);
  const dateB = new Date(timestampB);

  const diffMs = Math.abs(dateB - dateA); // difference in milliseconds
  const diffSeconds = diffMs / 1000;

  return Math.round(diffSeconds);
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  const appointment = new Date(appointmentTimestamp).getTime();
  const current = new Date(currentTimestamp).getTime();

  // Appointment must be strictly in the future
  return appointment > current;
}


