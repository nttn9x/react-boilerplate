import React, { useEffect } from "react";

import { useServiceContext } from "../../../context/service.context";

const Page2: React.FC = () => {
  const { apiGet } = useServiceContext();

  useEffect(() => {
    apiGet();
  }, [apiGet]);
  return <div>dashboard</div>;
};

export default Page2;
