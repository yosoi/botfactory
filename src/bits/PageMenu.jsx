import { Icon, Pagination } from "semantic-ui-react";

import React from "react";

export default function PageMenu({ pagination, size }) {
  return (
    <Pagination
      defaultActivePage={1}
      ellipsisItem={{
        content: <Icon name="ellipsis horizontal" />,
        icon: true,
      }}
      firstItem={{
        content: <Icon name="angle double left" />,
        icon: true,
      }}
      lastItem={{
        content: <Icon name="angle double right" />,
        icon: true,
      }}
      prevItem={{ content: <Icon name="angle left" />, icon: true }}
      nextItem={{ content: <Icon name="angle right" />, icon: true }}
      size={size === "small" ? "mini" : "big"}
      totalPages={10}
    />
  );
}
