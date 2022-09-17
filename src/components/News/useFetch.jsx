import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (linkToSource) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
};
