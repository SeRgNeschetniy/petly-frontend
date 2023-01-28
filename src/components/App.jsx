import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}></Route>
      </Routes>

      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#0101',
        }}
      >
        React homework template
      </div>
    </>
  );
};
