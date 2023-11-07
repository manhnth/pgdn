import Link from "next/link";

export default function BtnGroupChap({ currentChap }) {
  return (
    <div>
      <Link href={"./chuong-" + (currentChap - 1)}>Chương trước</Link>
      <Link href={"./chuong-" + (+currentChap + 1)}>Chương sau</Link>
    </div>
  );
}
