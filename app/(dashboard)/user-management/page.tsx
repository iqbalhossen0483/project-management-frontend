"use client";
import UserPresenter from "@/components/user/UserPresenter";
import { useAppSelector } from "@/hooks/redux";
import {
  useGetAllUsersQuery,
  useUpdateUserStatusMutation,
} from "@/store/features/user";
import { User } from "@/types/common";
import React, { useState } from "react";
import { toast } from "react-toastify";

const UserManagement = () => {
  const [page, setPage] = useState(1);
  const { token } = useAppSelector((state) => state.user);
  const { data } = useGetAllUsersQuery({ page }, { skip: !token });
  const [updateUserStatus] = useUpdateUserStatusMutation();
  const [loadingStatus, setLoadingStatus] = useState("");

  async function handleUserStatus(user: User) {
    try {
      setLoadingStatus(user._id);
      const updateStatus = user.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
      await updateUserStatus({ id: user._id, status: updateStatus });
      toast.success("User status updated successfully");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoadingStatus("");
    }
  }

  const users: User[] = data?.data || [];

  return (
    <UserPresenter
      users={users}
      page={page}
      setPage={setPage}
      onChangeStatus={handleUserStatus}
      loadingStatus={loadingStatus}
    />
  );
};

export default UserManagement;
