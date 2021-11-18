import PropTypes from "prop-types";
import React, { useContext, createContext, useState, useCallback } from "react";

import { arrToggle } from "utils/array";

const RestaurantsStateContext = createContext();
const RestaurantsDispatchContext = createContext();

function RestaurantsProvider({ initialTagsFilter = [], children }) {
  const [tagsFilter, setTagsFilter] = useState(initialTagsFilter);
  const toggleTag = useCallback((tag) => {
    return setTagsFilter((arr) => {
      return arrToggle(arr, tag);
    });
  }, []);

  return (
    <RestaurantsStateContext.Provider
      value={{
        tagsFilter,
      }}
    >
      <RestaurantsDispatchContext.Provider
        value={{
          setTagsFilter,
          toggleTag,
        }}
      >
        {children}
      </RestaurantsDispatchContext.Provider>
    </RestaurantsStateContext.Provider>
  );
}

RestaurantsProvider.propTypes = {
  children: PropTypes.node,
};

RestaurantsProvider.defaultProps = {
  children: null,
};

function useRestaurants() {
  const context = useContext(RestaurantsStateContext);

  if (context === undefined) {
    throw new Error("Editor State must be used within a RestaurantsProvider");
  }

  return context;
}

function useRestaurantsDispatch() {
  const dispatch = useContext(RestaurantsDispatchContext);

  if (dispatch === undefined) {
    throw new Error(
      "useRestaurantsDispatch must be used within a RestaurantsProvider"
    );
  }

  return dispatch;
}

export { RestaurantsProvider, useRestaurants, useRestaurantsDispatch };
