import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MilestoneTitle } from "../milestone/MilestoneTitle";
import { TaskTitle } from "../task/TaskTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="endDate" source="endDate" />
        <ReferenceArrayInput
          source="milestones"
          reference="Milestone"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MilestoneTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <DateTimeInput label="startDate" source="startDate" />
        <ReferenceArrayInput
          source="tasks"
          reference="Task"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
