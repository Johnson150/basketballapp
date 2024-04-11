import { useState, useEffect } from 'react';
import Layout from '../app/layout';
import StatsList from "../app/components/StatsList";

const StatsPage = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `/api/stats`;
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setStats(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    console.error("Error fetching stats:", error);
    return <p>Error fetching stats</p>;
  }

  return (
    <Layout> 
      <main className="flex min-h-screen flex-col justify-between p-24">
        <div className="overflow-y-auto max-h-[400px]">
          {stats ? <StatsList stats={stats} /> : <p>No stats found</p>}
        </div>
      </main>
    </Layout>
  );
};

export default StatsPage;
