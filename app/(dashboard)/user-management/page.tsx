"use client";
import UserPresenter from "@/components/user/UserPresenter";
import { useAppSelector } from "@/hooks/redux";
import { useGetAllUsersQuery } from "@/store/features/user";
import { User } from "@/types/common";
import React, { useState } from "react";

const UserManagement = () => {
  const [page, setPage] = useState(1);
  const { token } = useAppSelector((state) => state.user);
  const { data } = useGetAllUsersQuery({ page }, { skip: !token });

  async function handleUserStatus(user: User) {}

  const users: User[] = data?.data || [];

  return (
    <UserPresenter
      users={users}
      page={page}
      setPage={setPage}
      onChangeStatus={handleUserStatus}
    />
  );
};

export default UserManagement;
