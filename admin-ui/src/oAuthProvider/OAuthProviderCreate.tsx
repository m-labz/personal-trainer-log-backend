import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const OAuthProviderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="enabled" source="enabled" />
        <TextInput label="key" source="key" />
        <TextInput label="secret" source="secret" />
      </SimpleForm>
    </Create>
  );
};
