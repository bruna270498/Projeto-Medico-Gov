import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ContextApi = createContext();
function ContextProvider({ children }) {
    const values = useMemo(() => ({}), [])
 return (
    <ContextApi.Provider
      value={ values }
    >
      {children}
    </ContextApi.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.shape(),
}.isReqired;

export default ContextProvider;