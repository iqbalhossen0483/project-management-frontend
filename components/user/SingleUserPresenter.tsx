import { User } from "@/types/common";
import { useState } from "react";
import Button from "../libs/Button";
import Switch from "../libs/Switch";
import UpdateUserRoleModal from "./UpdateUserRoleModal";

type Props = {
  user: User;
  onChangeStatus: (user: User) => void;
  loadingStatus: string;
};

const SingleUserPresenter = ({
  user,
  onChangeStatus,
  loadingStatus,
}: Props) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <>
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>
          <Switch
            loading={loadingStatus === user._id}
            enabled={user.status === "ACTIVE"}
            onChange={() => onChangeStatus(user)}
          />
        </td>
        <td className="flex justify-center">
          <Button onClick={() => setShowUpdateModal(true)}>Update Role</Button>
        </td>
      </tr>
      <UpdateUserRoleModal
        open={showUpdateModal}
        setOpen={setShowUpdateModal}
        userId={user._id}
      />
    </>
  );
};

export default SingleUserPresenter;
