import _ from "lodash";
import { READ_EVENTS, READ_EVENT, UPDATE_EVENT, DELETE_EVENT, CREATE_EVENTS } from "../actions";

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENT:
    case UPDATE_EVENT:
    case CREATE_EVENTS:
      const data = action.response.data
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENT:
      console.log(action.id);
      delete events[action.id];
      return { ...events };
    default:
      return events;
  }
};
