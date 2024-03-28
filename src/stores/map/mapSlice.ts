import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plotInfo : null,
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setPlotInfo: (state, action) => {
      state.plotInfo = action.payload;
    },
  },
});

export const { setPlotInfo } = mapSlice.actions;

export default mapSlice.reducer;