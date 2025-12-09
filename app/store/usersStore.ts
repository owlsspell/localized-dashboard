import { create } from "zustand";

export type User = {
  id: number;
  name: string;
  email: string;
  company?: { name?: string };
};

type UsersState = {
  users: User[];
  loading: boolean;
  error: string | null;
  query: string;
  page: number;
  pageSize: number;
  fetchUsers: () => Promise<void>;
  setQuery: (q: string) => void;
  setPage: (p: number) => void;
};

export const useUsersStore = create<UsersState>((set, get) => ({
  users: [],
  loading: false,
  error: null,
  query: "",
  page: 1,
  pageSize: 5,
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as User[];
      set({ users: data, loading: false, error: null, page: 1 });
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : "Fetch failed";
      set({ loading: false, error: errorMessage });
    }
  },
  setQuery: (q) => set({ query: q, page: 1 }),
  setPage: (p) => {
    const { page } = get();
    const next = Math.max(1, p);
    if (next !== page) set({ page: next });
  },
}));
