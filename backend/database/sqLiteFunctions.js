import { dbConn } from '../database/database.js';

export function all(query, params = {}) {
  try {
    const preparedStatement = dbConn.prepare(query);
    return preparedStatement.all(params);
  } catch (err) {
    console.log(err);
    return { err };
  }
}

export function run(query, params = {}) {
  try {
    const preparedStatement = dbConn.prepare(query);
    return preparedStatement.run(params);
  } catch (err) {
    console.log(err);
    return { err };
  }
}

export function get(query, params = {}) {
  try {
    const preparedStatement = dbConn.prepare(query);
    return preparedStatement.get(params);
  } catch (err) {
    console.log(err);
    return { err };
  }
}
