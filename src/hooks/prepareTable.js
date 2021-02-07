import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { apiBaseUrl } from "../constants/api";
import axios from "axios";
function usePrepareTable(api) {
  const { i18n } = useTranslation();
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const getServiceStatuses = async () => {
    const { data } = await axios.get(
      `${apiBaseUrl}/api/${api}?lang=${i18n.language}`
    );
    let columns = data.map((column) => {
      return Object.keys(column).map((key) => {
        return { Header: key, accessor: key };
      });
    });

    return { columns: columns[0], data };
  };
  useEffect(() => {
    getServiceStatuses().then((res) => {
      setColumns(res.columns);
      setData(res.data);
    });
  }, [i18n.language]);
  return { columns, data };
}
export { usePrepareTable };
