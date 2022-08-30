import React from "react";

type Props = {
  message: string;
};

const Error: React.FC<Props> = ({ message }) => {
  return (
    <div>
      <p className="error">Error: {message}</p>
    </div>
  );
};

export default Error;
