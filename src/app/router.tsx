import { Suspense } from "react";
import { Routes, Route } from "react-router";
import { LandingPage } from '@ro'

export function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<> </>} />
      </Routes>
    </Suspense>
  );
}