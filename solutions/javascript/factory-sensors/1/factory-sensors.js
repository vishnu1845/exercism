// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new error('Throws an error')
  }
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  if (temperature === null) {
    // Sensor is broken
    throw new ArgumentError('Sensor is broken');
  }

  if (temperature > 500) {
    // Machine overheating
    throw new OverheatingError(temperature);
  }

}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
    try {
    // Try to check the machine
    actions.check();
  } catch (error) {
    if (error instanceof ArgumentError) {
      // Sensor is broken
      actions.alertDeadSensor();
    } else if (error instanceof OverheatingError) {
      // Overheating protocol
      if (error.temperature > 600) {
        actions.shutdown();
      } else {
        actions.alertOverheating();
      }
    } else {
      // Unknown error, rethrow it
      throw error;
    }
  }
}
