const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;


   // "@chakra-ui/icons": "^2.0.17",
    // "@chakra-ui/react": "^2.5.1",
    // "@emotion/react": "^11.10.6",
    // "@emotion/styled": "^11.10.6",
    // "@testing-library/jest-dom": "^5.16.5",
    // "@testing-library/react": "^13.4.0",
    // "@testing-library/user-event": "^13.5.0",
    // "axios": "^1.3.4",
    // "framer-motion": "^10.2.3",
    // "react": "^18.2.0",
    // "react-dom": "^18.2.0",
    // "react-router-dom": "^5.2.0",
    // "react-scripts": "5.0.1",
    // "web-vitals": "^2.1.4"