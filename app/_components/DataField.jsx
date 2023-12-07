const DataField = ({ label, value }) => {
  return (
    <div className="my-2 lg:my-4 lg:text-left lg:max-w-xs">
      <div className="text-custom-gray-light font-bold text-xs tracking-widest m-1">
        {label}
      </div>
      <div className="text-custom-gray-dark font-medium text-xl lg:text-2xl">
        {value}
      </div>
    </div>
  );
};

export default DataField;
