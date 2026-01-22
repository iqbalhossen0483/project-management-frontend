"use client";

import { useAppSelector } from "@/hooks/redux";
import { useGetUserQuery } from "@/store/features/user";
import { setToken } from "@/store/slices/user";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function AuthGuard({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (session) {
      dispatch(setToken(session.accessToken));
    }
  }, [dispatch, session]);

  useGetUserQuery(undefined, {
    skip: !token,
  });

  return children;
}

export default AuthGuard;
