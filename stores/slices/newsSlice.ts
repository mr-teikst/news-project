import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NewsState {
  articles: Article[];
  isLoading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  articles: [],
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setArticles, setLoading, setError } = newsSlice.actions;
export default newsSlice.reducer;
