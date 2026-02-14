import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from '@/components/Layout'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/beers" replace />} />
        <Route path="beers" element={<div>Beers — coming soon</div>} />
        <Route path="breweries" element={<div>Breweries — coming soon</div>} />
        <Route path="venues" element={<div>Venues — coming soon</div>} />
        <Route path="*" element={<div>Page not found</div>} />
      </Route>
    </Routes>
  )
}

export default App
