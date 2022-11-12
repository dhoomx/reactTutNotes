import { useState, useEffect } from "react";
function useFetch(url) {
  const [data, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errrr, setErrrr] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error(
              "Sorrey could not fetch data please check your http Url Thx 🙏"
            );
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsLoading(false);
          setErrrr(null);
        })
        .catch((err) => {
          setErrrr(err.message);
          setIsLoading(false);
        });
    }, 1000);
  }, [url]);

  return {
    data,
    isLoading,
    errrr,
  };
}

export default useFetch;
