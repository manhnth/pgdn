"use client";

import ErrorPage from "@/app/_components/error";
import { baseApi } from "@/lib/apis";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ChapPage() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [txt, setTxt] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchChap = async () => {
      const data = await baseApi.post("/api" + pathname, { link: pathname });

      setTxt(data);
      setLoading(false);
    };

    fetchChap();
  }, [pathname]);

  if (loading) return "Đang tải nội dung...";

  if (txt)
    return (
      <div className="wrapper">
        <div dangerouslySetInnerHTML={{ __html: txt }} />
      </div>
    );

  return <ErrorPage />;
}
