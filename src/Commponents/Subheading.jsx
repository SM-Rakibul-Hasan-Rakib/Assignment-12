const Subheading = ({ heading, subheading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <p className="text-red-500 mb-2">---{heading}---</p>
      <h3 className="text-red-500 uppercase border-y-4 py-4">
        ---{subheading}---
      </h3>
    </div>
  );
};

export default Subheading;
