import Link from "next/link";

export const FooterArea = () => {
  return (
    <footer className="p-[40px] flex flex-col items-center justify-center w-full bg-white border-t border-t-[#e2e0db] ">
      <div className="container">
        <div className="mb-[40px] grid auto-cols-auto grid-flow-col gap-[32px] w-full">
          <div>
            <span className="block mb-[24px] text-[2rem]">關於</span>
            <ul className="grid gap-[12px]">
              <li>
                <Link href="/">集團介紹</Link>
              </li>
              <li>
                <Link href="/">關於我們</Link>
              </li>
              <li>
                <Link href="/">聯絡我們</Link>
              </li>
              <li>
                <Link href="/">服務條款</Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="block mb-[24px] text-[2rem]">會員服務</span>
            <ul className="grid gap-[12px]">
              <li>
                <Link href="/">會員</Link>
              </li>
              <li>
                <Link href="/">訂單查詢</Link>
              </li>
              <li>
                <Link href="/">常見問題</Link>
              </li>
              <li>
                <Link href="/">VIP 會員</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-[1.4rem] text-neutral-main">© 2023</p>
      </div>
    </footer>
  );
};
