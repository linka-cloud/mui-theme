// Copyright 2021 Linka Cloud  All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Theme, UiMode } from './theme'

const initialState: Theme = {}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<UiMode>) => {
      state.mode = action.payload
    },
    toggleMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    }
  }
})

export const { setMode, toggleMode } = themeSlice.actions
export const themeReducer = themeSlice.reducer
