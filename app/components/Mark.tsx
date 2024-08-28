import React from "react";

export default function Mark({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <mark className="rounded-lg p-1 bg-blue-200 font-mono">{children}</mark>
  );
}
