import { createSlice } from "@reduxjs/toolkit";
import { properties as initialProperties } from "../data/properties";

const propertySlice = createSlice({
  name: "properties",
  initialState: {
    properties: initialProperties,
    filteredProperties: initialProperties,
    filters: {
      type: "",
      bhk: "",
      price: 0,
      builtUpArea: 0,
      sort: "Relevance",
      city: "",
      listedBy: "",
      verified: false,
    },
  },
  reducers: {
    filterByType: (state, action) => {
      state.filters.type = action.payload;
      state.filteredProperties = applyFilters(state.properties, state.filters);
    },
    filterByBHK: (state, action) => {
      state.filters.bhk = action.payload;
      state.filteredProperties = applyFilters(state.properties, state.filters);
    },
    filterByPrice: (state, action) => {
      state.filters.price = action.payload;
      state.filteredProperties = applyFilters(state.properties, state.filters);
    },
    sortByPrice: (state, action) => {
      state.filters.sort = action.payload;
      state.filteredProperties = applyFilters(state.properties, state.filters);
    },
    filterByBuiltUpArea: (state, action) => {
      state.filters.builtUpArea = action.payload;
      state.filteredProperties = applyFilters(state.properties, state.filters);
    },
    filterByCity(state, action) {
      state.filters.city = action.payload;
      state.filteredProperties = applyFilters(state.properties, state.filters);
    },
    filterByListedBy: (state, action) => {
      state.filters.listedBy = action.payload;
      state.filteredProperties = applyFilters(state.properties, state.filters);
    },
    filterByVerified: (state, action) => {
      state.filters.verified = action.payload;
      state.filteredProperties = applyFilters(state.properties, state.filters);
    },
  },
});

const applyFilters = (properties, filters) => {
  let filtered = properties;

  if (filters.type) {
    filtered = filtered.filter((property) => property.type === filters.type);
  }

  if (filters.city) {
    filtered = filtered.filter((property) => property.city === filters.city);
  }

  if (filters.bhk) {
    filtered = filtered.filter((property) => property.bhk === filters.bhk);
  }

  if (filters.price) {
    filtered = filtered.filter((property) => property.price <= filters.price);
  }
  if (filters.listedBy) {
    filtered = filtered.filter(
      (property) => property.listedBy === filters.listedBy
    );
  }

  if (filters.verified) {
    filtered = filtered.filter(
      (property) => property.verified === filters.verified
    );
  }

  if (filters.sort === "price-inc") {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (filters.sort === "price-dec") {
    filtered = filtered.sort((a, b) => b.price - a.price);
  } else if (filters.sort === "area-inc") {
    filtered = filtered.sort((a, b) => a.builtUpArea - b.builtUpArea);
  } else if (filters.sort === "area-dec") {
    filtered = filtered.sort((a, b) => b.builtUpArea - a.builtUpArea);
  }

  return filtered;
};

export const {
  filterByType,
  filterByBHK,
  filterByPrice,
  sortByPrice,
  filterByBuiltUpArea,
  filterByCity,
  filterByListedBy,
  filterByVerified,
} = propertySlice.actions;
export default propertySlice.reducer;
