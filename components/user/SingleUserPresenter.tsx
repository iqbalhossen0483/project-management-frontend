import React from "react";
import { User, USER_STATUS } from "../../types/common";
import Switch from "../libs/Switch";

type Props = {
  user: User;
  onChangeStatus: (user: User) => void;
};

const SingleUserPresenter = ({ user, onChangeStatus }: Props) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <Switch
          enabled={user.status === USER_STATUS.ACTIVE}
          onChange={() => onChangeStatus(user)}
        />
      </td>
      <td></td>
    </tr>
  );
};

export default SingleUserPresenter;
