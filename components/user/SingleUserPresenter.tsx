import { User } from "@/types/common";
import Switch from "../libs/Switch";

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
  return (
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
      <td></td>
    </tr>
  );
};

export default SingleUserPresenter;
