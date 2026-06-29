import site from "./site.js";
import {
  roles,
  steeringCommittee,
  steeringCommitteeChairs,
  steeringCommitteeCharter,
} from "./committees.js";
import previousConferences from "./previous-conferences.js";

export default {
  ...site,
  roles,
  steeringCommittee,
  steeringCommitteeChairs,
  steeringCommitteeCharter,
  previousConferences,
};
