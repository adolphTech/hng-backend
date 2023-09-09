const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 

// Endpoint to handle GET requests
app.get('/api', (req, res) => {
    const slackName = req.query.slack_name ;
    const track = req.query.track ;

    // Get the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];

    const currentUTC = new Date(Date.now() + (Math.random() * 4 - 2) * 60 * 1000);
    const currentUTCFormatted = currentUTC.toISOString();

    // GitHub URLs
    const githubFileURL = 'https://github.com/adolphTech/hng-backend/blob/task-1/server.js';
    const githubRepoURL = 'https://github.com/adolphTech/hng-backend';

    //response JSON
    const jsonResponse = {
        slack_name: slackName,
        current_day: currentDay,
        utc_time: currentUTCFormatted,
        track: track,
        github_file_url: githubFileURL,
        github_repo_url: githubRepoURL,
        status_code: 200
    };

    res.json(jsonResponse);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
