"use client";

import { useMemo } from "react";
import { useUsersStore } from "./usersStore";

export const useFilteredUsers = () => {
  const users = useUsersStore((s) => s.users);
  const query = useUsersStore((s) => s.query);
  const page = useUsersStore((s) => s.page);
  const pageSize = useUsersStore((s) => s.pageSize);

  return useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q
      ? users.filter(
          (u) =>
            u.name.toLowerCase().includes(q) ||
            u.email.toLowerCase().includes(q)
        )
      : users;

    const start = (page - 1) * pageSize;
    return {
      filtered: list,
      paged: list.slice(start, start + pageSize),
      totalPages: Math.max(1, Math.ceil(list.length / pageSize)),
    };
  }, [users, query, page, pageSize]);
};
