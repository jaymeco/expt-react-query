'use client'

import { useQuery } from "@tanstack/react-query";
import List from "./components/List";
import ListItem from "./components/ListItem";
import useDataAccess from "@/hooks/use-data-access";

export default function UsersPage() {
  const { useDao } = useDataAccess();
  const { data: users } = useQuery({
    queryKey: ['get-all-users'],
    queryFn: async () =>  await useDao().getAll(),
  });

  return (
    <section className="p-5 flex flex-col justify-between items-center w-full h-screen">
      <h1 className="mb-10">Github Users</h1>
      <List>
        {users?.map((user) => <ListItem
          key={user.id}
          name={user.login}
          avatar={user.avatar_url}
          login={user.login}
          description={user.html_url}
        />)}
      </List>
    </section>
  );
}
