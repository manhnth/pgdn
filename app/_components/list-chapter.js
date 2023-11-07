import { baseApi } from "@/lib/apis";
import { useEffect, useState, memo } from "react";
import cx from "@/lib/classix";
import Link from "next/link";

const ListChapter = function ListChapter({ pathname, total_page }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [listChapter, setListChapter] = useState(null);

  // for list-chapter layout
  const colListChapter = listChapter?.length > 25 ? [0, 1] : [1];
  const half = listChapter && Math.ceil(listChapter.length / 2);
  const numPage = new Array(+total_page).fill(0);

  useEffect(() => {
    const fetchListChapter = async () => {
      try {
        const data = await baseApi.post(
          "api/" + pathname + "/" + "ds-chuong/",
          {
            page: currentPage,
          }
        );

        setListChapter(data);
      } catch (error) {
        console.log("ERROR fetchListChapter:", error);
      }
    };

    fetchListChapter();

    return () => {};
  }, [pathname, currentPage]);
  if (!listChapter) return <div></div>;

  return (
    <>
      <div className="list-chapter">
        <h3>Danh sách chương</h3>
        {colListChapter.map((a, i) => {
          let _i = i;

          const slice = _i === 0 ? [0, half] : [half];
          return (
            <ul key={i}>
              {listChapter.slice(...slice).map((c, y) => {
                return (
                  <li key={y}>
                    <Link href={`${pathname}/${c.input.split("/")[4]}`}>
                      {c.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
      <footer className="num-page">
        {numPage.map((_, i) => {
          return (
            <div
              className={cx(currentPage === i + 1 && "-active")}
              onClick={() => setCurrentPage(() => i + 1)}
            >
              {i + 1}
            </div>
          );
        })}
      </footer>
    </>
  );
};

export default ListChapter;
