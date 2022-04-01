import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const OAuthProviderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="enabled" source="enabled" />
        <TextInput label="key" source="key" />
        <TextInput label="secret" source="secret" />
      </SimpleForm>
    </Edit>
  );
};
