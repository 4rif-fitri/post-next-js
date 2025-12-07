import Link from "next/link";


export default function Home() {
  return (
    <>
      <h1 className="posting">testing</h1>
      <Link href="posts">Posts page </Link>
      <Link href="albums">Albums page </Link>
    </>
  );
}
