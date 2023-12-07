const DataField = ({ label, value }) => {
  return (
    <div className="my-4">
      <div className="text-custom-gray-light font-bold text-xs tracking-widest m-1">
        {label}
      </div>
      <div className="text-custom-gray-dark font-medium text-xl">{value}</div>
    </div>
  );
};

export default DataField;
