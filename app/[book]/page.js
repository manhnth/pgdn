'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
  const [d, setDetail] = useState(null);

  const pathname = usePathname();

  console.log('hey', pathname);

  useEffect(() => {
    fetch('api/detail' + pathname)
      .then((res) => {
        console.log('run', res);
        res.json();
      })
      .then((data) => setDetail(data));
  }, [pathname]);

  if (d)
    return (
      <>
        <div className="book-info"></div>
      </>
    );

  return 'not found';
}
