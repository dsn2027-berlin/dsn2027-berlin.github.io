import site from "./site.js";
import {
  roles,
  steeringCommittee,
  steeringCommitteeChairs,
  steeringCommitteeCharter,
} from "./committees.js";
import previousConferences from "./previous-conferences.js";
import researchTrackProgramCommittee from "./research-track-program-committee.js";

export default {
  ...site,
  roles,
  steeringCommittee,
  steeringCommitteeChairs,
  steeringCommitteeCharter,
  researchTrackProgramCommittee,
  previousConferences,
};
