"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { truncateStr } from "@/lib/utils";
import ListChapter from "../_components/list-chapter";

export default function Page() {
  const [d, setDetail] = useState(null);
  const [moreDesc, setMoreDesc] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch("api" + pathname);

        const data = await res.json();

        setDetail(data);
      } catch (error) {
        console.log("ERROR fetchBook:", error);
      }
    };

    if (pathname) fetchBook();

    return () => {};
  }, [pathname]);

  if (d)
    return (
      <div className="wrapper">
        <div className="book-info">
          <div className="book-info_name">{d.name}</div>
          <div className="book-info_cover">
            <img src={d.cover} alt="" />
          </div>
          <div
            className="book-info_detail"
            dangerouslySetInnerHTML={{ __html: d.details }}
          />
          <div className="book-info_toolbar">toolbar {d.total_page}</div>
        </div>
        <article className="book-desc">
          <div
            dangerouslySetInnerHTML={{
              __html: truncateStr(d.description, 365, moreDesc),
            }}
          />
          <div className="pointer" onClick={() => setMoreDesc(!moreDesc)}>
            {" "}
            {moreDesc ? "thu gọn" : "xem thêm"}
          </div>
        </article>
        <ListChapter pathname={pathname} total_page={d.total_page} />
      </div>
    );

  return "not found";
}
