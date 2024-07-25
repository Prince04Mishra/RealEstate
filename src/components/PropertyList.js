import React from "react";
import { useSelector } from "react-redux";

const PropertyList = () => {
  const properties = useSelector(
    (state) => state.properties.filteredProperties
  );

  return (
    <div className="property-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer m-24">
      {properties.map((property) => (
        <div
          key={property.id}
          className="property-card p-4 border rounded shadow-lg"
        >
          <img
            src={property.image}
            alt={property.type}
            className="w-full h-48 object-cover mb-4 rounded-lg cursor-zoom-in"
          />
          <h3 className="text-xl font-bold mb-2">
            {property.type} - {property.bhk} - {property.city}
          </h3>
          <p className="text-gray-700 mb-4 ">{property.description}</p>
          <p className="text-lg font-semibold text-blue-600">
            ₹ {property.price.toLocaleString()} -
            <span className="text-gray-400 ml-2 font-serif">
              {property.builtUpArea} sq.ft
            </span>
            <p>
              <span>{property.listedBy}</span>
            </p>
          </p>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
