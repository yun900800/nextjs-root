import { useEffect, useState } from "react";

function Dashboard() {
    const [loading,setLoading] = useState(true);
    const [dashboardData,setDashboardData] = useState(null);
    useEffect(()=>{
        async function fetchDashboardData() {
            const response = await fetch('http://localhost:4000/dashboard');
            const data = await response.json();
            setDashboardData(data);
            setLoading(false);
        }
        fetchDashboardData();
    },[]);
    if (loading) {
        return <h2>Loadding...</h2>
    }
    return (<div>
        <h2>Dashboard</h2>
        <h2>Posts: {dashboardData.posts}</h2>
        <h2>Likes: {dashboardData.likes}</h2>
        <h2>followers: {dashboardData.followers}</h2>
        <h2>following: {dashboardData.following}</h2>
    </div>);
}

export default Dashboard;