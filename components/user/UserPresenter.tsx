import { User } from "@/types/common";
import Link from "next/link";
import React from "react";
import { IoMdAdd } from "react-icons/io";
import Button from "../libs/Button";
import Card from "../libs/Card";
import Table from "../libs/Table";
import TableContainer from "../libs/TableContainer";
import TableHead from "../libs/TableHead";
import Typography from "../libs/Typography";
import SingleUserPresenter from "./SingleUserPresenter";

type Props = {
  users: User[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  onChangeStatus: (user: User) => void;
};

const UserPresenter = ({ users, page, setPage, onChangeStatus }: Props) => {
  return (
    <div className="space-y-5">
      <Typography variant="h3">User management</Typography>
      <Card>
        <div className="flex justify-end">
          <Link href="/user-management/add-user">
            <Button>
              <div>
                <IoMdAdd />
              </div>
              Add user
            </Button>
          </Link>
        </div>
        <TableContainer>
          <Table>
            <TableHead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Role</td>
                <td>Status</td>
                <td>Action</td>
              </tr>
            </TableHead>
            <tbody>
              {users.map((user) => (
                <SingleUserPresenter
                  key={user._id}
                  user={user}
                  onChangeStatus={onChangeStatus}
                />
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default UserPresenter;
