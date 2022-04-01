import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const OAuthProviderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OAuth providers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="enabled" source="enabled" />
        <TextField label="ID" source="id" />
        <TextField label="key" source="key" />
        <TextField label="secret" source="secret" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
