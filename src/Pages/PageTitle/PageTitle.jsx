import { Helmet } from "react-helmet";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>Petito | {title}</title>
    </Helmet>
  );
};

export default PageTitle;
