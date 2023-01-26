import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}{" "}
      <div>
        <Link href={"/"}>Home</Link>
      </div>
    </main>
  );
}
