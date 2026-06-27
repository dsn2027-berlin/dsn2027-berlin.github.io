import site from "./site.js";
import {
  planningIdeas,
  potentialContributors,
  roles,
} from "./committees.js";
import previousConferences from "./previous-conferences.js";

export default {
  ...site,
  roles,
  potentialContributors,
  planningIdeas,
  previousConferences,
};
