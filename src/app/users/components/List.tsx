import { PropsWithChildren } from "react";

export default function List(props: PropsWithChildren) {
  const { children } = props;

  return (
    <div className="flex flex-col itens-center justify-evenly w-1/2 rounded border border-gray-500 p-4 shadow-2xl shadow-gray-950 divide-y divide-gray-500">
      {children}
    </div>
  );
}
