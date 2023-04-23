import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import HomeComponent from "./home/index"
import ProfileComponent from "./profile/index"
import Navigation from "./navigation"
import ProfileScreen from "./screens/profile-screen";
import LoginScreen from "./screens/login-screen";
import SearchComponent from "./search/index"
import DetailComponent from "./detail/index"
import GameSummaryList from "./search/result-list"
import OtherProfile from './screens/other-profile'

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import authReducer from "./reducers/auth-reducer"
import RegisterScreen from './screens/register-screen';
import LoadProfile from './component/load-porfile'

const store = configureStore({
  reducer: { user: authReducer }
});


function App() {
  return (
    <Provider store={store}>
      <LoadProfile>
        <BrowserRouter>
          <div className="container">
            <Navigation />
            <Routes>
              <Route path="/*" element={<HomeComponent />} />
              <Route path="/my-profile" element={<ProfileComponent />} />
              <Route path="/search" element={<SearchComponent />} />
              <Route path="/search/:title" element={<GameSummaryList />} />
              <Route path="/game/detail/:id" element={<DetailComponent />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/profile/:id" element={<OtherProfile />} />
              <Route path="/register" element={<RegisterScreen />} />
            </Routes>
          </div>
        </BrowserRouter>
      </LoadProfile>
    </Provider>
  );
}

export default App;
