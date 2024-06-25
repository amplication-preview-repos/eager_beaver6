import { SortOrder } from "../../util/SortOrder";

export type TeamMemberOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
};
