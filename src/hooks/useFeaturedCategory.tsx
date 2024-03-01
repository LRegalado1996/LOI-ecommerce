import { useEffect, useState } from "react";
import { CategoriasDestacada } from "../interfaces/reqArticlesApi";
import { reqArticles } from "../api/reqArticles";

export const useFeaturedCategory = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<CategoriasDestacada[]>([]);

  useEffect(() => {
    uploadArticles();
  }, []);

  const uploadArticles = async () => {
    const resp = await reqArticles.get("/index.php", {
      params: {
        ctrl: "index",
        act: "categoriasDestacadas",
      },
    });

    if (resp.data.length > 0) {
      setCategories(resp.data);
      setLoading(false);
    }
  };

  return { loading, categories };
};
