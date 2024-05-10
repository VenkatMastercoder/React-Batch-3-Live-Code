/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
const NewBanner = (Banner) => {
  return () => {
    return (
      <div>
        <p>New Banner</p>
        <Banner />
      </div>
    );
  };
};

export default NewBanner