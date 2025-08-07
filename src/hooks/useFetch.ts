// Import For React
import { useEffect, useState } from "react";

// Type For Props useFetch
type DataType<T> = T | null; //Tipado de Datos
type ErrorType = Error | null; //Tipado de Error

// Interface For Props useFetch
export interface UseFetchProps<T> {
  data: DataType<T>; // Datos obtenidos
  loading: boolean; // Estado de carga
  error: ErrorType; // Error
}

// Custom Hook useFetch
export const useFetch = <T>(url: string): UseFetchProps<T> => {
  // State
  const [data, setData] = useState<DataType<T>>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType>(null);

  // UseEffect
  useEffect(() => {
    // Controller Abort
    const controller = new AbortController();

    // Function For Fetch Data
    const fetchData = async () => {
      // Set Loading
      setLoading(true);

      // Try Catch
      try {
        // Fetch Data
        const response = await fetch(url, { signal: controller.signal });

        // Validaciones
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Set Data
        const data: T = await response.json();
        setData(data);

        // Errors
      } catch (error) {
        setError(error as Error);

        // Set Loading
      } finally {
        setLoading(false);
      }
    };

    // Call Fetch Data
    fetchData();

    // Clean Up
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};
