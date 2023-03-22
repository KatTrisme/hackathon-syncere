import React, {createContext, useContext, useState} from 'react';

export const QrScannerDataContext = createContext('');

export const useQrScannerDataContext = () => useContext(QrScannerDataContext);

export function QrScannerDataProvider({ children }) {
  const [scannedData, setScannedData] = useState('')
  return(
    <QrScannerDataContext.Provider value={{ scannedData, setScannedData }}>
      {children}
    </QrScannerDataContext.Provider>
  )
}