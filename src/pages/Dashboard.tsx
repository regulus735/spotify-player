import React, { useEffect } from 'react';
import './Dashboard.sass';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchAuthToken, refreshAuthToken } from '../store/auth-actions';
import Aside from '../components/Aside';
import Main from '../components/Main';
import Loading from '../components/Loading';

type DashboardProps = {
   code: string;
};

const Dashboard: React.FC<DashboardProps> = ({ code }) => {
   const dispatch = useAppDispatch();
   const { accessToken, refreshToken, expiresIn } = useAppSelector(
      (state) => state.auth
   );

   useEffect(() => {
      if (!code) return;

      const fetchData = async () => {
         dispatch(fetchAuthToken(code));
      };

      fetchData();
   }, [code, dispatch]);

   useEffect(() => {
      if (!refreshToken || !expiresIn) return;

      const fetchData = async () => {
         dispatch(refreshAuthToken(refreshToken));
      };

      const timeoutId = setInterval(() => fetchData(), (expiresIn - 60) * 1000);

      return () => clearInterval(timeoutId);
   }, [refreshToken, expiresIn, dispatch]);

   return (
      <main className="dashboard">
         {!accessToken && <Loading />}
         {accessToken && (
            <>
               <Aside />
               <Main />
            </>
         )}
      </main>
   );
};

export default Dashboard;
